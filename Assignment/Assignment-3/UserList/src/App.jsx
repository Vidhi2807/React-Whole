import { useState } from 'react';
import './App.css';
import APIEffect from './Useeffect/APIEffect';

function App() {
  return (
    <>
      <h1>User List Page</h1>
      <APIEffect />
    </>
  );
}

export default App;