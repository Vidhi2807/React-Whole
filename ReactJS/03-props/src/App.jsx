import React from 'react'
import Card from './components/card'


const App = () => {
  return (
    <div className='parent'>
     
      <Card user='vidhi' age={17} img="https://avatars.githubusercontent.com/u/224968546?v=4"/>
      <Card user='Devanshi' age={18} img="https://preview.redd.it/cute-white-cats-who-hide-their-real-intentions-behind-their-v0-j94wfnxj5cmc1.jpeg?auto=webp&s=89fe5fc7be07c16a0da3fdacaa35aa8333012e86"/>
      
    </div>
  )
}

export default App