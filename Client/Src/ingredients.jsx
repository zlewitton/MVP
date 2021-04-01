import React, {useState, useEffect} from 'react';

let IngredientEntry = (props) => {

  //State:
  const [SearchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleClick = (e) => {
    props.updateIngredients(SearchTerm);
    setSearchTerm('');
  }

  //console.log(props);

  return (
    <div className='IngredientEntry'>

      <div className='IngredientSearch'>
        <form className='IngredientForm'>

          <input className='EnterIngredients' placeholder="Please enter your liquor or mixer" list='ingredients' type='search' style={{height:"5.1em"}} onChange={handleChange} value={SearchTerm}></input>

          <datalist id='ingredients' style={{height:"5.1em", overflow:"hidden"}}>
            {props.ingredients.map((ingredient) => <option>{ingredient}</option>)}
          </datalist>

          <button type='submit' form='IngredientForm' onClick={handleClick}>Add to your ingredients</button>

        </form>

      </div>

      <div className='IngredientList'>
        <label>Your ingredients:</label>
        <ul>
          {props.UserIngredients.map((ingredient) => <li>{ingredient}</li>)}
        </ul>
      </div>

    </div>
  )

}

export default IngredientEntry;