const Drink = require("../models/Drink.modul");

module.exports.drinkController = {
  getDrink: (req, res) => {
    Drink.find({}, ["name", "price"])
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json({ error: "Ошибка при добавлении нового напитка" }));
  },
  getInStock: (req, res) => {
    Drink.find({ in_stock: true })
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json({ error: "Ошибка при добавлении нового напитка" }));
  },
  getDrinkId: (req, res) => {
    Drink.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json({ error: "Ошибка при добавлении нового напитка" }));
  },
  addDrink: (req, res) => {
    Drink.create({
      name: req.body.name,
      price: req.body.price,
      in_stock: req.body.in_stock,
      coffeine: req.body.coffeine,
      volume: req.body.volume,
      text: req.body.text,
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json({ error: "Ошибка при добавлении нового напитка" }));
  },
  deleteDrink: (req, res) => {
    Drink.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json("напиток удален");
      })
      .catch(() => res.json({ error: "Ошибка при добавлении нового напитка" }));
  },
  updateDrink: (req, res) => {
    Drink.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      in_stock: req.body.in_stock,
      coffeine: req.body.coffeine,
      volume: req.body.volume,
      text: req.body.text,
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json({ error: "Ошибка при добавлении нового напитка" }));
  },
};
