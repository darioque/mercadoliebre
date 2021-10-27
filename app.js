const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "./public");

app.use(express.static(publicPath)); // public es nuestro recurso de archivos estaticos

app.listen(3000, () => {
  console.log("El servidor se está ejecutando en el puerto 3000");
});

app.get("/", (req, res) => {
  // responde get to root with index.html
  res.sendFile(path.join(__dirname, "/views/index.html"));
});
