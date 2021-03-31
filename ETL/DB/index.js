const mongoose = require('mongoose');


mongoose.Promise = Promise;
let db = mongoose.connect("mongodb://localhost/cocktails");

const cocktailSchema = mongoose.Schema({
  drinkName: String,
  mainIngredient: String,
  ingredients: [String],
  measurements: [String],
  instructions: String
})

const Cocktail = mongoose.model('Cocktail', cocktailSchema);

module.exports = Cocktail;