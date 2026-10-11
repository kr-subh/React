import React from 'react'
import '../App.css'




const Cards = (props) => {

   
  return (

    <>
        <div className='card'>
        
            <h1> Author:{props.author}</h1>
            <h1>Book Title:{props.title}</h1>
            <h1>Category</h1>
            <h1>Year</h1>
            <h1>Availability</h1>            
            
        </div>
    </>

   
      
    
  )
}

export default Cards
