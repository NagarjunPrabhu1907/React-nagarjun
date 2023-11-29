import logo from './logo.svg';
import './App.css';
import ShoppingList  from './ShoppingList';
import Button2 from './Button2';
import Hello from './Hello';
import Welcome from './Welcome';
import React, { useState } from 'react'
import Students from './Students';


// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

function  App (){
 const [count , setCount] = useState(0)
   return (
   <>
      <button onClick ={()=>setCount(count+1)}>{count}</button>
   



            {/* <Welcome name="John" />
            <Students name ="Nagarjun" age = {22}  />
            <Students name ="shivu" age = {24}  />
            <Students name ="kumar" age = {22}  />
            <Students   /> */}

     {/* <h1>Welcome to my React App!</h1> */}
      {/* <Hello/> 
     <Welcome/> */}
      


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


export default App;
