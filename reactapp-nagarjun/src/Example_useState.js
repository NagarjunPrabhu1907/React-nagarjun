import { useState } from "react"; 
import React from 'react'



const Example_useState = () => {
const [isOn, setIsOn] = useState(true);

const [input,setInput] =  useState(" ");
const[words,setWords] = useState([]);

  return (
    <>
    <div>
      <p>Toggle State: {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>



    <div className="APP">
    <h1> Input value : {input}</h1>
    <input
    type="text"
    placeholder="type here"
    value={input}
    onChange={(e)=>setInput(e.target.value)} />
    </div>
    
    <button onClick={() => setWords((state) => [...state, input])}>Add Word</button>

     
  {words.map((word,idx)=>(
  <div key={idx}>{word}</div>
   ))}

    </>
  );
};

export default Example_useState;