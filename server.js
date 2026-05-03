const express = require("express");
const cors = require("cors");
const { predict } = require("./predictor");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/predict", (req, res) => {
  const { smiles } = req.body;

  const result = predict(smiles);
  res.json(result);
});

app.listen(5000, () => console.log("Server running on port 5000"));