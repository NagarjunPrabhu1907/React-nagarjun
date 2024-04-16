import React, { useRef, useEffect } from 'react';

function UseRef1() {
  const myRef = useRef(null);

  useEffect(() => {
    // Here you can access the underlying DOM element using myRef.current
    if (myRef.current) {
      console.log(myRef.current);
      // You can do anything with the DOM element here, like adding event listeners or modifying its properties
      myRef.current.addEventListener('click', () => {
        console.log('DOM element clicked!');
      });
    }
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div ref={myRef}>
      This is my component.
    </div>
  );
}

export default UseRef1;
