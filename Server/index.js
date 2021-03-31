const express = require('express');
const CocktailRouter = require('./CocktailRouter.js');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../Client/Dist/'));
app.use(CocktailRouter);

app.listen(port, () => {
  console.log("Cocktails app listening on port " + port)
});