import React from "react";

const Hello =() => {
    function handleClick() {
        alert('This is a simple JSX example');
      }

    return (
        <>
       <button color="blue" shadowSize={2} onClick = {handleClick}>
        "JSX"
       </button>
      
        </>
    )
}
export default Hello;