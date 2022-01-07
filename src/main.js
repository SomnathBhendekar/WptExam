const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { addRecord, showRecord } = require("./user");
const res = require("express/lib/response");

//http://localhost:5000/users
app.get("/users", async (req, res) => {
  const list = await showRecord();
  res.json(list);
});

// http://localhost:5000/add-record
app.post("/add-record", async (req, res) => {
  const user = req.body;
  await addRecord(user);
  res.json("Data added");
});

app.listen(5000, () => console.log("Server started"));
