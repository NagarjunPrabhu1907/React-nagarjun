 import React, {useContext} from 'react'
 import {data,data1} from './App'
 
 
 export default function ChildC() {
    const name = useContext (data);
    const gender = useContext(data1);

   return (
     <div>
       <h1> My name is {name} my gender is {gender}</h1>
     </div>
   )
 }
 