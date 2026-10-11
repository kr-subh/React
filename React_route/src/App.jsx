import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Help from '../Pages/Help'
import Navbar from '../Components/Navbar'
 

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dance' element={<Help/>}/>
      </Routes>
      
    </div>
  )
}

export default App
