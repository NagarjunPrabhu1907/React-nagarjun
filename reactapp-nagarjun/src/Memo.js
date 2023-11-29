import React, {useState} from "react";



function Memo() {

    const [counterOne,setCounterOne] = useState(0);
    const [counterTwo,setCounterTwo] = useState(0);

    const IncrementOne =()=>{
        setCounterOne(counterOne +1 );
    }
    const IncrementTwo =()=>{
        setCounterTwo (counterTwo + 1);
    }

    const isEven =() =>{
        let i=0;
        while (i<2000) i++;

        return  counterOne%2===0
    }
    
  return (
    <div>
      <button onClick={IncrementOne}>counterOne: {counterOne}</button>
      <span>{isEven()?"even":"odd"}</span>
      <br/>
      <button onClick={IncrementTwo}>counterTwo: {counterTwo}</button>
  
    </div>
  )
}

export default Memo;