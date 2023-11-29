import logo from './logo.svg';
import './App.css';
import ShoppingList  from './ShoppingList';
import Button2 from './Button2';
import Hello from './Hello';
import Welcome from './Welcome';
import React, { createContext, useEffect, useState } from 'react'
import Students from './Students';
import ChildA from './ChildA';

const data = createContext();
const data1 = createContext();

function  App (){
  const name = "Nagarjun"
  const gender = "male"

   return (
   <>
   <data.Provider value = {name}>
    <data1.Provider value = {gender}>
   <ChildA/>
   </data1.Provider>
   </data.Provider>
  </>
   );
  }


export default App;
export {data,data1};
