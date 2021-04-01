const Cocktail = require('../../ETL/DB/index.js');

exports.retrieve = (req, res) => {
  return Cocktail.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
}

exports.getIngredients = (req, res) => {
  let retSet = new Set();
  return Cocktail.find({}, {ingredients:1, _id:0})
    .then((data) => {
      for (let x = 0; x < data.length; x++) {
        let ingredientList = data[x].ingredients;
        for (let ingredient of ingredientList) {
          retSet.add(ingredient);
        }
      }
      const retArray = [...retSet];
      res.status(200).send(retArray)
    })
    .catch((err) => {
      res.sendStatus(500);
    });
}