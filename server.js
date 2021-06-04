const express = require("express");
const logger = require("morgan");
const mongoose= require("mongoose");


const db = require ("./models");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// need to add the connection
mongoose.connect(process.env.MONGOD_URI|| "mongodb://localhost/workout", {useNewUrlPraser:true});


app.use(require("./routes/api"));
app.use(require("./routes/html"));

    

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
