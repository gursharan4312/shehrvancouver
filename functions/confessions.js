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
    });
    await conn;
    conn.model(
      "Confession",
      new mongoose.Schema({
        message: String,
        date: Date,
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
      let confessions = await ConfessionModel.find({});
      response = {
        statusCode: 200,
        body: JSON.stringify(confessions),
      };
    } catch (err) {
      response = {
        statusCode: 500,
        body: JSON.stringify(err),
      };
    }
  }
  return response;
};
