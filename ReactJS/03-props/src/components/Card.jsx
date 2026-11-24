import React from 'react'

const card = (props) => {

  return (
    <div className="card">
        <h1> {props.user} </h1>
        <p> Age: {props.age} </p>
        <pp> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, earum.</pp>
        <button> View Profile </button>

      </div>
  )
}

export default card