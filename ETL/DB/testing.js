const data = require('./data.json')

//console.log(data);
//console.log(data.drinks[0])


//Useful Properties:
//strDrink
//
console.log(data.drinks[0].strDrink);

let numString = 'strIngredient';

for (let x = 1; x < 15; x++) {
  let logString = numString + x
  console.log(data.drinks[0][logString])
}
