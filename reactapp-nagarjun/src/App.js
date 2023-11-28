import logo from './logo.svg';
import './App.css';
import ShoppingList  from './ShoppingList';
import Button2 from './Button2';
import Hello from './Hello';


// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

export default function App() {
   return (
    <>
     <h1>Welcome to my React App!</h1>
     <Hello/>
      {/* <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
      
        }}
      /> */}
      {/* <h1> list of fruits and vegetables</h1>
      //<ShoppingList/> */}
      {/* <Button2/> */}
      


    </>
    
  );
}


// export default App;
