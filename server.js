const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const apiRoutes = require("./routes/apiroutes.js");
const htmlRoutes = require("./routes/htmlroutes.js");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
// mongoose.connect("mongodb://localhost/workout", {

  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(apiRoutes);
app.use(htmlRoutes);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
