import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const[num, setNum]=useState(0);
  const[num2, setNum2]=useState(100);

  useEffect(function(){
    console.log("useEffect is running....");
  } ,[])

  return (
    <div>
      <h1> hello {num}</h1>
      <h1> heyy {num2}</h1>


      <button
      onMouseEnter={()=>{
        setNum(num+1);
      }}
      onMouseLeave={()=>{
        setNum2(num2+50)
      }}
      
      >Hover</button>
      
    </div>
  )
}

export default App
