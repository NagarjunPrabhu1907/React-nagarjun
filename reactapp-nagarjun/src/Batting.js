
import React ,{useContext} from "react";
import Bowling from "./Bowling";

import {BallContext1,BallContext2} from './Bowling'


export default function Batting() {

  const BallType1 = useContext (BallContext1);
  const BallType2= useContext(BallContext2);

  
  return (
    <div>
    <h2>Ball_1stOver: {BallType1}</h2>
      <h2>BallType_nextOver: {BallType2}</h2>
    
    </div>
  )
}
