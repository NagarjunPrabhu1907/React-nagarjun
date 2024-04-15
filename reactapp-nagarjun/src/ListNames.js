import React from 'react'

function ListNames({ListNames}) {
  return (
    <div>
       <h1>I am {ListNames.name}, {ListNames.age} years old, I am {ListNames.skill}</h1>
    </div>
  )
}

export default ListNames
