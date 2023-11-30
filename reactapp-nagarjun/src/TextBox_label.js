
import React,{useState} from 'react'

 function TextBox_label() {
    const [inputValue, setInputValue] = useState('hello');
  return (
    <div>
  
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p> {inputValue}</p>
      <button onClick={() => setInputValue('')}>Reset</button>
    </div>
  )
}

export default TextBox_label;
