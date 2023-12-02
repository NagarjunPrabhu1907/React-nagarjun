import { useState } from "react"; 
import React from 'react'



const Example_useState = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <div>
      <p>Toggle State: {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>



  );
};

export default Example_useState;