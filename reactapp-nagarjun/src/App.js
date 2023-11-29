import logo from './logo.svg';
import './App.css';
import ShoppingList  from './ShoppingList';
import Button2 from './Button2';
import Hello from './Hello';
import Welcome from './Welcome';
import React, { createContext, useEffect, useState,useRef } from 'react'
import Students from './Students';
import ChildA from './ChildA';



function  App (){
  const refElement = useRef("");
  const[name,setName] = useState("Arjun")
  console.log(refElement)
  function Reset(){
    setName("")
    refElement.current.focus()
  }
  
   return (
   <>
  <h1>learning useRef</h1>
  <input ref ={refElement} type ="text" value = {name} onChange= {(e)=>setName(e.target.value)}>
 </input>
 <button onClick ={Reset} > Reset  </button>
 
  </>
   );
  }


export default App;

