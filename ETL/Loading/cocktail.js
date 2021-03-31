const axios = require('axios');
const Cocktail = require('../DB/index.js');

var url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z';

axios.get(url)
  .then((data) => {
    let info = data.data.drinks;
    info.map((drink) => {
      let ingredientArray = [];
      let measurementArray = [];
      let ingStr = 'strIngredient';
      let measStr = 'strMeasure';
      for (let x = 1; x < 15; x ++) {
        let ing = ingStr + x;
        let meas = measStr + x;
        if (drink[ing] !== null) {
          ingredientArray.push(drink[ing])
          measurementArray.push(drink[meas])
        }
      }
      return Cocktail.findOneAndUpdate(
        {drinkName: drink.strDrink},
        { drinkName: drink.strDrink,
          mainIngredient: ingredientArray[0],
          ingredients: ingredientArray,
          measurements: measurementArray,
          instructions: drink.strInstructions},
        { upsert: true}).exec();
    });
  })
  .catch((error) => {
    console.log(error)
  });