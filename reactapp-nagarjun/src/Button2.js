export default function Button2() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
        <div>
      <button onClick={handleClick}>
        Click me
      </button>

      <p>hai</p>
      </div>

    );
  }
  