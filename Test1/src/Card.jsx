import React from 'react'


const Card = ({props}) => {

  

  return (

   

    <div className='card'>

        <h2>Name:{props.name}</h2>
        <h2>Category:{props.category}</h2>
        <h2>Price:{props.price}</h2>
        <h2>Stock:{props.stock}</h2>



      
    </div>
  )
}

export default Card
