import React from 'react'
import { useState } from 'react'

const App = () => {

    const[data1, setData1]=useState([]);


   const getData=async ()=>{

     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
     console.log(response);

     const data =  await response.json();
     console.log(data);

     setData1(data);

  }


  return (
    <div>

      <button onClick={getData}>Click Me</button>
      {
        data1.map(function(props,idx){
          return(
            <div>
              <h1>HEllo</h1>
              <h1>heyy{idx}</h1>
              {/* <h1>hello  {idx}</h1> */}
              <h1>{props.title}</h1>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default App
