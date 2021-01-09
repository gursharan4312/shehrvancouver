require("dotenv").config();
const mongoose = require("mongoose");

let conn = null;
const uri = process.env.DB_URL;

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  if (conn == null) {
    conn = mongoose.createConnection(uri, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    await conn;
    conn.model(
      "Job",
      new mongoose.Schema({
        name: String,
        description: String,
        pay: Number,
        location: String,
        email: String,
        phoneNumber: Number,
        expire_at: { type: Date, default: Date.now, expires: "20160m" },
      })
    );
  }
  const JobModel = conn.model("Job");
  let response;
  if (event.httpMethod === "POST") {
    const { name, description, pay, location, email, phoneNumber } = JSON.parse(
      event.body
    );
    const newjob = new JobModel({
      name,
      pay,
      email,
      phoneNumber,
      location,
      description,
      date: new Date(),
    });

    try {
      await newjob.save();
      response = {
        statusCode: 200,
        body: "job added!!",
      };
      console.log("saved");
    } catch (err) {
      response = {
        statusCode: 500,
        body: "Something went wrong try again!!",
      };
    }
  } else if (event.httpMethod === "GET") {
    try {
      let page = event.queryStringParameters.page || 1;
      let totaljobs = await JobModel.countDocuments();
      let jobs = await JobModel.find({})
        .limit(10)
        .skip((page - 1) * 10);

      let data = {
        jobs,
        page,
        pages: Math.ceil(totaljobs / 10) || 1,
      };
      response = {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } catch (err) {
      response = {
        statusCode: 500,
        body: "Something went wrong try again!!",
      };
    }
  } else if (event.httpMethod === "DELETE") {
    const { id } = JSON.parse(event.body);
    const job = await JobModel.findById(id);
    if (job) {
      await job.remove();
      response = {
        statusCode: 200,
        body: "Job Deleted",
      };
    } else {
      response = {
        statusCode: 404,
        body: "Job Not Found",
      };
    }
  } else if (event.httpMethod === "OPTIONS") {
    //enabling cors
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    };
    return {
      statusCode: 200,
      headers,
      body: "This was a preflight call!",
    };
  }
  response.headers = {
    "Access-Control-Allow-Origin": "*",
  };
  return response;
};
