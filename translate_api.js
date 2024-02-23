import express from "express";
import translatte from "translatte";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.post("/translate", (req, res) => {
  const { text, to } = req.body;
  translatte(text, { to })
    .then((data) => res.send({ text: data.text }))
    .catch((err) => res.send({ err: err }));
});

app.listen(3000, () => console.log("Server is running on port 3000"));