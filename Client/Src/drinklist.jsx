import React, {useState, useEffect} from 'react';
import DrinkElement from './drink.jsx';

let DrinkList = (props) => {

  //State

  // useEffect(() => {}, [props.ingredients])

  console.log(props);

  return (
    <div className='drinkList'>
      <div>Possible drinks:</div>
      {props.drinks.map((drink) => {
        const ingredients = drink.ingredients;
        //console.log(ingredients[0]);
        let match = 0;
        for (let x=0; x<ingredients.length; x++) {
          if (props.UserIngredients.indexOf(ingredients[x]) !== -1) {
            match += 1;
          }
        }
        if (match > 0) {
          return <DrinkElement drink={drink} remaining={ingredients.length-match} updateDrink={props.updateDrink} openForm={props.openForm}/>
        }
      })}
    </div>
  )
}

export default DrinkList;