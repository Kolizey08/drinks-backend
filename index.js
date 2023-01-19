const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4500;

app.use(express.json());
app.use(require("./routes/drinks.route"));

mongoose
  .connect("mongodb+srv://Kolizey08:Maga@cluster0.nmzoj5b.mongodb.net/Drink")
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

  app.listen(port, ()=> {
    console.log('Сервер запущен успешно')
  })