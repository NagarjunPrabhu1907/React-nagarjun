
import React from 'react'
import ListNames from './ListNames'

 function List() {
    const names =[
      {
        id:1,
        name :"Virat",
        age :35,
        skill :'Chase master'
      },
      {
        id:2,
        name :"Rohit",
        age :36,
        skill:"Hitman"
      },
      {
        id:3,
        name :"KL Rahul",
        age :30,
        skill:"Class batsman"
      },
    ]
    const nameList =  names.map(name =>
    <ListNames key={name.id} ListNames={name}/>)
    
  return ( 
    <div>
 {nameList} 
    </div>
  )
}
export default List;