import React from 'react'
import FoodCard from './FoodCard'
import foods from './Data'
import { useState } from 'react'


const App = () => {


  // const[num, setNum]= useState(10);
  // const [user, setUser]=useState('subhash');
  // function changeNum(){
  //   setNum(num+1);
  //   setUser('Subhash Kumar');
  // }

  // return (
  //   <div>
      {/* {foods.map(function(food){

        return <FoodCard 
        key={food.id}
        // props={food} agar ye use krege toh Card me ({props}) use krna padega.
        name={food.name} 
        category={food.category} 
        price={food.price} 
        emoji={food.emoji} 
        available={food.available}
        />
      })} */}

  //     <button onClick={changeNum}>Value is {num} <br /> My name is {user}</button>

      
  //   </div>
  // )






  const[num, setNum]=useState(0);

  function increaseNum(){
    setNum(num+1);
  }

    function decreaseNum(){
    setNum(num-1);
  }

  function increaseByFive(){
    setNum(num+5);
  }

  return(

    <div>

    <h1>{num}</h1>
    <button onClick={increaseNum}>Increase</button>
    <button onClick={decreaseNum}>Decrease</button>
    <button onClick={increaseByFive}>Increase by 5</button>


    </div>


  )
}

export default App
