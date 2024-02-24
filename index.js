import express from "express";
import translatte from "translatte";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.post("/translate", (req, res) => {
  const { text, to } = req.body;
  translatte(text, { to })
  
    .then((data) => res.json({ translation: data.text }))
    .catch((err) => res.json({ message: err.message, status: err.status }));
});


app.listen(3000, () => console.log("Server is running on port 3000"));