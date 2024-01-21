//On importe la fonction d'état : useState et useEffect
import React,{useState, useEffect} from 'react';
import Burger from './Burger'
import './App.css';

function App() {
// Variable d'état burgerSelected pour accueillir le nom du burger
  const [burgerSelected, setBurgerSelected] = useState(null);

  useEffect(() => {
    async function loadData() {
            var rawResponse = await fetch('https://jsonplaceholder.typicode.com/users');
            var response = await rawResponse.json();
            console.log(response)
    }
    loadData()
  }, []);



// On prépare la fonction souvenir ui attend le nom du burger comme argument
  var souvenirParent = (name) => {

    // on utilise le setteur pour mettre a jour le nom du burger de la variable d'etat burgerSelected.
    setBurgerSelected(name);
  }


  // Structure JS (tableau) stockant le nom des burgers
  var burgerData = ["Le New-yorker", "Le Amberger", "Le Poulet"];

var burgerData2 =[
  {name:"Le New-yorker", img: '/burger-1.jpg'},
  {name:"Le Amberger", img: '/burger-2.jpg'},
  {name:"Le Poulet", img: '/burger-3.png'},
]

  // Structure JS : tableau vide pour accueillir notre composant
  // var burgerList = [];

  var burgerList = burgerData2.map(function(burger,i){
    return <Burger burgerName={burger.name} burgerNumber={i+1} burgerImg={burger.img} handleClickParent={souvenirParent}/>
  })
  // // On boucle sur burgerData et on push le composant avec la propriété burgerName personnalisé
  // for (var i = 0; i < burgerData.length; i++) {
  //   burgerList.push(<Burger burgerName={burgerData[i]} burgerNumber={i+1} />);
  // }
  // var burgerList = [];
  // for (var i = 0; i < 1000; i++) {
  //   burgerList.push(<Burger />);
  // }
  // console.log(burgerSelected)
  return (
    <div className="App">
      {/* {burgerList} */}
      {/* Envoi d'information clé/valeur  burgerName/le new yorker */}
      {/* <Burger burgerName="Le new yorker" burgerDescription ="salade, tomate, oignon"/> */}
      {/* on definie la description  */}

      {/* on injecte la variable (préparée dans le traitement) */}
      {burgerList}
      <h4>Vous avez sélectionné le burger: {burgerSelected} </h4>


    </div>
  );
}

export default App;
