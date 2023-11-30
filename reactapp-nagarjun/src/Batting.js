import React from "react";
import Bowling from "./Bowling";


export default function Batting(props) {
  return (
    <div>
      <h2>Ball_1stOver : {props.Ball}</h2>
      <h2> BallType_nextOver: {props.Ball1}</h2>

      <h5>{props.abcd}</h5>
    
    </div>
  )
}
