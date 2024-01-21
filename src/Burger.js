// import React from 'react'; // On importe react
//On importe la fonction d'état : useState
import React, { useState } from 'react';

// On active l'objet/variable en utilisant props
function Burger(props) {

  //Variable d'état initialisée a zéro

  const [like, setLike] = useState(0);


  var handleClick = () => {
    setLike(like + 1);

    props.handleClickParent(props.burgerName);
  }


  return (
    <div>
      <img src={props.burgerImg} alt='' />
      {/* On rend dynamique comme avec Node en utilisant props */}
      <h4>{props.burgerName}</h4>
      <p>{props.burgerDescription}</p>
      {/* On appelle la description */}
      <p>{props.burgerNumber}</p>
      {/* on affiche le numéro du burger */}
      {/* //On injecte variable d'état like */}
      <span>{like}</span>
      {/*      on met le bouton sous écoute     */}
      <button onClick={() => setLike()}>like</button>
      <button onClick={() => handleClick()} type="button">Commander</button>
    </div>
  )
}


export default Burger;

