import React from 'react'
import Cards from './Components/Cards'
import User from './User'



const App = () => {

  const arr = [
    
  {
    "id": 1,
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "category": "Fiction",
    "year": 1988,
    "available": true
  },
  {
    "id": 2,
    "title": "Atomic Habits",
    "author": "James Clear",
    "category": "Self Help",
    "year": 2018,
    "available": false
  },
  {
    "id": 3,
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "category": "Programming",
    "year": 2008,
    "available": true
  },
  {
    "id": 4,
    "title": "Rich Dad Poor Dad",
    "author": "Robert Kiyosaki",
    "category": "Finance",
    "year": 1997,
    "available": true
  },
  {
    "id": 5,
    "title": "Harry Potter",
    "author": "J. K. Rowling",
    "category": "Fantasy",
    "year": 1997,
    "available": false
  },
  {
    "id": 6,
    "title": "The Psychology of Money",
    "author": "Morgan Housel",
    "category": "Finance",
    "year": 2020,
    "available": true
  },
  {
    "id": 7,
    "title": "JavaScript: The Good Parts",
    "author": "Douglas Crockford",
    "category": "Programming",
    "year": 2008,
    "available": true
  },
  {
    "id": 8,
    "title": "Ikigai",
    "author": "Hector Garcia",
    "category": "Lifestyle",
    "year": 2016,
    "available": false
  }
]

  
  return (
    <div className='parent'>
    
     {/* <User name='subhash'/>
     <User name={arr}/>
     <User name='harsh'/> */}
    {/* {arr.map(function(elem){ */}
      {/* // return <h1>{elem+5}</h1> */}
      {/* return <Cards/> */}
    {/* })} */}

    {arr.map(function(elem){
      return

      
       <Cards author={elem.author} title={elem.title}/>

      
    })}


  
    </div>
  )
}

export default App
