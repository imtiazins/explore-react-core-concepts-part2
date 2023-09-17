import { useState } from "react"

export default function Counter(){
    const [count ,setCount]= useState(50);
   
    const handleAdd=()=>{
        const newCount = count+1;
        setCount(newCount)
    }

    const handleReduce =()=>{
        const newCount =count -1;
        setCount(newCount)
    }
    const counterStyle ={
        border:'2px solid red',
        margin: '15px',
        padding:'20px',
        borderRadius:'15px'
        
    }

    return(
    <div style={counterStyle}>
       <h3>Counter:{count} </h3>
       <button onClick={handleAdd}>Add</button>
       <button onClick={handleReduce}>Reduce</button>
    </div>
    ) 
}