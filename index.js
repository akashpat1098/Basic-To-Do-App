const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()
const cors = require("cors")
const routes = require('./routes/ToDoRoutes')
const app = express();
app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(8080, () => {
  console.log("Server is listening at 8080");
});

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err)=>{console.error(err);})

