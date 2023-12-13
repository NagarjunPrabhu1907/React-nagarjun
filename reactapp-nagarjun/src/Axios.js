import React, { useEffect, useState } from 'react'
import axios from 'axios'

 function Axios() {

    const [userdata,setUserData] = useState([]);
    useEffect (()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
           console.log(response)
           setUserData(response.data)
        })
    },[])
  return (
    <div>
      <h1> Id and names</h1>
      {userdata.map((data)=>{
        return (
            <>
            <div>  {data.id}:{data.name}  </div>
            <div></div>
            </>
        
        )
      })}

    </div>
  )
}
export default Axios;