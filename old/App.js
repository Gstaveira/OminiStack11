import React, {useState} from 'react';
import Header from './Header';

function App() {
  const [cont, setCont] =useState(0); 
  
  function Increment() {
    setCont(cont +1);
    console.log(cont);
  }
  
  return (
    <div>
    <Header> Contador: {cont} </Header>
      <button onClick={Increment}> Incrementar </button>
      </div>
  );
}

export default App;
