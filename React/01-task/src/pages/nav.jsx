import React from 'react'
import Food from './food'
import Fake from './fake'

function nav() {
  return (
    <div>
      <h1>LOgO</h1>
      <a href={Food}>Food</a>
      <a href={Fake}>Products</a>
    </div>
  )
}

export default nav