const mongoose = require("mongoose");

function connectDB() {
  // Connection url to database
  mongoose.connect(
    "mongodb+srv://MD_KAF_SHAHRIER:Antor%233036@cluster0.i85ysj7.mongodb.net/GARI_LAGBE",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  // Checking connected or not
  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB Connection Error");
  });
}

connectDB();

module.exports = mongoose;
