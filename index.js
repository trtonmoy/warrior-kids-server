const express = require("express");
const cors = require("cors");
const app = express();

const products = require("./data/data.json");

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("warrior kids server is running");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedId = products.find((product) => parseInt(product.id) === id);
  res.send(selectedId);
});

app.listen(port, () => {
  console.log(`this server is running port port : ${port}`);
});
