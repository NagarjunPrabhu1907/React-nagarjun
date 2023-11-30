import React, { useState } from 'react'
import Batting from './Batting'


export default function Bowling() {

    const [BallType,setBall] = useState("Leather");
    const [ballType1,setBall1] = useState("Tennis");

    
  return (
    <div>
        
      

      <Batting Ball={BallType} Ball1 ={ballType1} abcd ="vvvvvvv"/>
    
      
    </div>
  )
}
