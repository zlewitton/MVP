import React, {useState, useEffect} from 'react';
import Modal from 'react-modal'

let DrinkModal = (props) => {

  let ingMeas = [];

  for (let x = 0; x < props.drink.ingredients.length; x++) {
    ingMeas.push([props.drink.ingredients[x], props.drink.measurements[x]]);
  }

  console.log(ingMeas);

  return (
    <Modal isOpen={props.open} onRequestClose={props.closeForm} ariaHideApp={false}>

      <h1 className="drinkName">{props.drink.drinkName}</h1>

      <h3 className="ingredientLabel">Ingredients:
        {ingMeas.map((ing) => {
        return <div>You need {ing[1]} of {ing[0]}</div>})}
      </h3>

      <div className='Instructions'>Instructions:
          <div>{props.drink.instructions}</div>
      </div>


    </Modal>

  )
}

export default DrinkModal;