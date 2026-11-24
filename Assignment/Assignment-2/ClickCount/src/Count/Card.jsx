import React from 'react'
import { useState } from 'react'
import './Card.css'

function Card(prop){
  var [plus,setplus] = useState([0]);
  
  function clickplus(){
       setplus(++plus);
  }
  function clickminus(){
       setplus(--plus);
  }
  function clickreset(){
       setplus(plus=0);
  }
  return (
    <div id="div">
      <p id="count">Count : {plus}</p>
      <button id = "button" onClick={clickplus}>+</button>
      <button id = "button1" onClick={clickminus}>-</button>
      <button id = "button2" onClick={clickreset}>reset</button>
    </div>
  )
}

export default Card