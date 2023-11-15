// Create web server

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const uuid = require("uuid");

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static("public"));
app.use(morgan("dev"));

// Array of comments
let comments = [
  {
    id: uuid.v4(),
    title: "First comment",
    content: "This is the first comment",