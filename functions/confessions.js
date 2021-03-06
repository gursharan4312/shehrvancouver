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
      "Confession",
      new mongoose.Schema({
        message: String,
        date: Date,
        expire_at: { type: Date, default: Date.now, expires: "10080m" },
      })
    );
  }
  const ConfessionModel = conn.model("Confession");
  let response;
  if (event.httpMethod === "POST") {
    const { message } = JSON.parse(event.body);

    const newConfession = new ConfessionModel({
      message,
      date: new Date(),
    });

    try {
      await newConfession.save();
      response = {
        statusCode: 200,
        body: "Confession added!!",
      };
    } catch (err) {
      response = {
        statusCode: 500,
        body: "Something went wrong try again!!",
      };
    }
  } else if (event.httpMethod === "GET") {
    try {
      let page = event.queryStringParameters.page || 1;
      let totalConfessions = await ConfessionModel.countDocuments();
      let confessions = await ConfessionModel.find({})
        .limit(10)
        .skip((page - 1) * 10);

      let data = {
        confessions,
        page,
        pages: Math.ceil(totalConfessions / 10) || 1,
      };
      response = {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } catch (err) {
      response = {
        statusCode: 500,
        body: JSON.stringify(err),
      };
    }
  }
  response.headers = {
    "Access-Control-Allow-Origin": "*",
  };
  return response;
};
