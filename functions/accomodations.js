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
      "Accomodation",
      new mongoose.Schema({
        address: String,
        description: String,
        rent: Number,
        furnished: String,
        email: String,
        phoneNumber: Number,
        expire_at: { type: Date, default: Date.now, expires: "20160m" },
      })
    );
  }
  const AccomodationModel = conn.model("Accomodation");
  let response = {
    statusCode: 200,
    body: "",
  };
  if (event.httpMethod === "POST") {
    const {
      id,
      address,
      description,
      rent,
      furnished,
      email,
      phoneNumber,
    } = JSON.parse(event.body);
    if (id) {
      const accomodation = await AccomodationModel.findById(id);
      accomodation.address = address;
      accomodation.description = description;
      accomodation.rent = rent;
      accomodation.furnished = furnished;
      accomodation.email = email;
      accomodation.phoneNumber = phoneNumber;
      await accomodation.save();
      response = {
        statusCode: 200,
        body: "Accomodation added!!",
      };
    } else {
      const newAccomodation = new AccomodationModel({
        address,
        description,
        rent,
        furnished,
        email,
        phoneNumber,
        date: new Date(),
      });

      try {
        await newAccomodation.save();
        response = {
          statusCode: 200,
          body: "Accomodation added!!",
        };
      } catch (err) {
        response = {
          statusCode: 500,
          body: "Something went wrong try again!!",
        };
      }
    }
  } else if (event.httpMethod === "GET") {
    try {
      let page = event.queryStringParameters.page || 1;
      let totalAccomodations = await AccomodationModel.countDocuments();
      let accomodations = await AccomodationModel.find({})
        .limit(10)
        .skip((page - 1) * 10);

      let data = {
        accomodations,
        page,
        pages: Math.ceil(totalAccomodations / 10) || 1,
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
    const accomodation = await AccomodationModel.findById(id);
    if (accomodation) {
      await accomodation.remove();
      response = {
        statusCode: 200,
        body: "Accomodation Deleted",
      };
    } else {
      response = {
        statusCode: 404,
        body: "Accomodation Not Found",
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
