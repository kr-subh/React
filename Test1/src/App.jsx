import React from 'react'
import products from './data'
import Card from './Card'
import { useState } from 'react'


const App = () => {

  const[addtocart, setAddtocart] =useState(0);
  
      function whenclicked(){
          setAddtocart(addtocart+1);
      }

      




  return (
    <div > 
      {addtocart}

      {products.map(function(products){
        return(
          <div>
            <Card  key={products.id}
          props={products}/>

        <button onClick={whenclicked} >Add to Cart</button>

            
         
          </div>
         
        )
      })}
      
    </div>
  )
}

export default App
