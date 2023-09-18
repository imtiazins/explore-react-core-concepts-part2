import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'
import Counter from './Counter'
import Users from './Users'



function App() {
 
  function handleClick(){
    alert('button clicked');
  }
  const handleClick2=()=>{
    alert('btn clicked on 2');
  }

  const addToFive =(num)=>{
    alert(num +5);
  }
  return (
    <>
      <h1>React Core Concepts 2</h1> 
      <Users></Users>
      <Team></Team>
      <Counter> </Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Clicked-2</button>
      <button onClick={()=>addToFive(3)}>Four </button>
    </>
  )
}

export default App
