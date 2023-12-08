import logo from './logo.svg';
import './App.css';
import ShoppingList  from './ShoppingList';
import Button2 from './Button2';

import Welcome from './Welcome';
import React, { createContext, useEffect, useState,useRef } from 'react'
import Students from './Students';
import ChildA from './ChildA';
import Memo from './Memo';
import Batting from './Batting';
import Bowling from './Bowling';
import TextBox_label from './TextBox_label';
import Square from './Square';
import Board from './Square';
import Example_useState from './Example_useState';
import Example_useEffect from './Example_useEffect';
import TodoApp from './TodoApp';
import Example_project from './Example_project';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NextPage from './NextPage';
import LoginSignup from './LoginSignup';


function  App (){
  
  
   return (
   <>
  {/* <Router>
    <Routes>
    <Route path="/" element ={<Example_project/>}/>
      <Route path="/next-page" element ={<NextPage/>}/>
    </Routes>
  </Router> */}
  <LoginSignup/>
  </>
   );
  }


export default App;



