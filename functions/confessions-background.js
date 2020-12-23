require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Confession = mongoose.model("Confession", {
  message: String,
  date: Date,
});

exports.handler = async function (event, context, callback) {
  if (event.httpMethod === "POST") {
    const { message } = JSON.parse(event.body);

    const newConfession = new Confession({
      message,
      date: new Date(),
    });

    newConfession
      .save()
      .then(() => {
        callback(null, {
          statusCode: 200,
          body: "Confession added!!",
        });
      })
      .catch(() => {
        callback(null, {
          statusCode: 500,
          body: "Something went wrong try again!!",
        });
      });
  } else if (event.httpMethod === "GET") {
    try {
      let confessions = await Confession.find({});
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(confessions),
      });
    } catch (err) {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify(err),
      });
    }
  }
};
