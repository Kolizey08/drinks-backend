const mongoose = require("mongoose");

const drinksShema = mongoose.Schema({
  name: String,
  price: Number,
  in_stock: Boolean,
  coffeine: Boolean,
  volume: Number,
  text: String,
});

const Drink = mongoose.model("Drink", drinksShema);
module.exports = Drink;
