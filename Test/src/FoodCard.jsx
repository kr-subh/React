import React, { useState } from 'react'

const FoodCard = (props) => {

  function onClickk(){
    console.log("Button Clicked");
  }

  function inputChange(){
    console.log("User is typing");
  }

  

  return (
    <div className='food-card'>
        <h1>Name:{props.name}</h1>
        <h1>Category:{props.category}</h1>
        <h1>Price:{props.price}</h1>
        <h1>Name:{props.emoji}</h1>
        <h1>Available:{props.available}</h1>

        <button onClick={onClickk}>Click ME!</button>
        <input onChange={inputChange } type="text" placeholder='Your Name' />

      
    </div>
  )
}

export default FoodCard
