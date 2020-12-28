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
  let response;
  if (event.httpMethod === "POST") {
    const {
      address,
      description,
      rent,
      furnished,
      email,
      phoneNumber,
    } = JSON.parse(event.body);
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
  }
  response.headers = {
    "Access-Control-Allow-Origin": "*",
  };
  return response;
};