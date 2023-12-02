import { useState } from "react"; 
import React from 'react'

 function Example_useState() {
    const [name, setName] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <p>{name}</p>
      </form>
    </div>
  )
}
export default Example_useState;