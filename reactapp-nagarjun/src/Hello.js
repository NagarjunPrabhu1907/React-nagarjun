import React from "react";

const Hello =() => {
    function handleClick() {
        alert('This is a simple JSX example');
      }

    return (
        <>
       <button  onClick = {handleClick}>
        "JSX"
       </button>
      
        </>
    )
}
export default Hello;