const CocktailRouter = require('express').Router();
const CocktailModel = require('./Models/CocktailModels.js');

CocktailRouter.route('/')
  .get((req, res) => {
    CocktailModel.retrieve(req, res);
  });


module.exports = CocktailRouter;