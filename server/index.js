// server/index.js

const express = require("express");
const cors = require("cors")
const data = require("./data");
const bodyParser = require ("body-parser")

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.get("/api", (req, res) => {
    res.json(data);
    // res.json(data.contacts[req.body.index]);
});

app.post("/api", (req, res) => {
  console.log(req)
  const newContact = req.body;
  console.log(newContact)

  // add new contact
  data.contacts.push(newContact);
  console.log(data);

  res.json(data);
})
app.use(express.json())
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
