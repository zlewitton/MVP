const CocktailRouter = require('express').Router();
const CocktailModel = require('./Models/CocktailModels.js');

CocktailRouter.route('/CocktailList')
  .get((req, res) => {
    CocktailModel.retrieve(req, res);
  });

CocktailRouter.route('/Ingredients')
  .get((req, res) => {
    CocktailModel.getIngredients(req, res);
  });


module.exports = CocktailRouter;