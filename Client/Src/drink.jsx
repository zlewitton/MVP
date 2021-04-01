import React, {useState, useEffect} from 'react';

let DrinkElement = (props) => {

  //State
  const handleDrinkClick = (e) => {
    props.updateDrink(props.drink)
    props.openForm();
  }

  return (
    <div className='drinkElement' id={props.drink.drinkName}>
      <label>{props.drink.drinkName}: </label>
      <label> You need {props.remaining} more ingredients to make this drink</label>
      <button onClick={handleDrinkClick}>Click to expand</button>
    </div>
  )


}

export default DrinkElement;