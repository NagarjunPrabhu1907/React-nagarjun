import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputRef = useRef(null);

  const focusTextInput = () => {
    // Accessing the DOM element using inputRef.current
    inputRef.current.focus();
  };

  return (
    <div>
      {/* The input element */}
      <input ref={inputRef} type="text" />

      {/* Button to focus the input */}
      <button onClick={focusTextInput}>Focus the input</button>
    </div>
  );
}

export default TextInputWithFocusButton;
