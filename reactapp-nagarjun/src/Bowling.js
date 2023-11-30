import React, { useState ,useContext,createContext} from 'react'
import Batting from './Batting'

const BallContext1 = createContext();
const BallContext2 = createContext();
export default function Bowling() {

  const BallType1 = "Tennis"
   const BallType2 = "leather"

    
  return (
    <div>
        
      
        <BallContext1.Provider value = {BallType1}>
    <BallContext2.Provider value = {BallType2}>
   <Batting/>
   </BallContext2.Provider>
   </BallContext1.Provider>
  
      
    </div>
  )
}
export {BallContext1,BallContext2};
