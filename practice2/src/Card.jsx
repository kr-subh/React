import React from 'react'


const Card = ({props}) => {
  return (
    <div>
        <h1>Name:{props.name}</h1>
        <h1>Name:{props.rollNo}</h1>
        <h1>Name:{props.branch}</h1>
        <h1>Name:{props.marks}</h1>
        <h1>Name:{props.attendance}</h1>
        {/* <h1>Name:{props.}</h1> */}

      
    </div>
  )
}

export default Card
