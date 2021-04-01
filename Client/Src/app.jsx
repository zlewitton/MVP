import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import IngredientEntry from './ingredients.jsx';
import DrinkList from './drinklist.jsx';
import DrinkModal from './drinkmodal.jsx';


let App = (props) => {

  //State:
  const [DrinksList, setDrinksList] = useState([]);
  const [TypedIngredient, setTypedIngredient] = useState("");
  const [IngredientList, setIngredientList] = useState([]);
  const [PossibleDrinks, setPossibleDrinks] = useState([]);
  const [UserIngredients, setUserIngredients] = useState([]);
  const [CurrentDrink, setCurrentDrink] = useState();
  const [RenderModal, setRenderModal] = useState(false);

  //Functions:
  const fetchDrinks = () => {
    axios.get('/CocktailList')
      .then(({data}) => {
        setDrinksList(data);
      })
    //console.log("I am fetching data");
  }

  const fetchIngredients = () => {
    axios.get('/Ingredients')
      .then(({data}) => {
        setIngredientList(data);
      })
    //console.log("I am fetching the ingredients")
  }



  useEffect(() => {
    fetchDrinks()
    fetchIngredients()
  }, [])

  const updateIngredients = (ingredient) => {

    var array = [...UserIngredients];
    array.push(ingredient);
    setUserIngredients(array);

  }

  const updateDrink = (drink) => {
    setCurrentDrink(drink);
  }

  const openForm = () => {
    setRenderModal(true);
  }

  const closeForm = () => {
    setRenderModal(!RenderModal);
  }

  //console.log('How many times will this re render?');
  //console.log(IngredientList)
  // console.log(DrinksList[0]);
  // console.log("The user ingredients: ", UserIngredients);
  //console.log("UserIngredients: ", UserIngredients);

  return (
    <div className='AppShell'>
      <div>Hello? Is this this working?</div>
      <div>Are the drinks being fetched? {DrinksList.length}</div>
      {DrinksList.length && <div>Drink data: {DrinksList[0].drinkName}</div>}
      <IngredientEntry ingredients={IngredientList} UserIngredients={UserIngredients}updateIngredients={updateIngredients}/>
      <DrinkList drinks={DrinksList} UserIngredients={UserIngredients} key={UserIngredients.length} updateDrink={updateDrink} openForm={openForm}/>
      {CurrentDrink && <DrinkModal open={RenderModal} closeForm={closeForm} drink={CurrentDrink}/>}
    </div>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);