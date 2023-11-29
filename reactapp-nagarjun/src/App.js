import logo from './logo.svg';
import './App.css';
import ShoppingList  from './ShoppingList';
import Button2 from './Button2';
import Hello from './Hello';
import Welcome from './Welcome';
import React, { createContext, useEffect, useState } from 'react'
import Students from './Students';
import ChildA from './ChildA';



function  App (){
  const [count,setcount] = useState(0)
  const [data,setData] = useState("ram")
  useEffect( ()=>{
    console.log("component mounted")
  },[data])

   function updateCount() {
    setcount (count + 1 )
   }

   function updateData() {
    setData ("seeta")
   }


   return (
   <>
  <h1>Button clicked {count} times</h1> 
  <button onClick = {updateCount}>Click</button>
  <button onClick = {updateData}>update data</button>
  </>
   );
  }


export default App;

