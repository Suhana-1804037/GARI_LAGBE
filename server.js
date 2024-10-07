const express = require("express");
const app = express();

// backend connected on port 5000
const port = process.env.PORT || 5000;
//mongodb connected to the server
const dbConnection = require("./db");

app.use(express.json());

app.use("/api/cars/", require("./routes/carsRoute"));
app.use("/api/services/", require("./routes/servicesRoute"));
app.use("/api/users/", require("./routes/usersRoute"));

app.use("/api/bookings/", require("./routes/bookingsRoute"));
app.use("/api/bookingsServices/", require("./routes/bookingsServicesRoutes"));



const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

app.get("/", (req, res) => res.send("Hello World!"));

// The JS Server Started on which port.
app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`));
