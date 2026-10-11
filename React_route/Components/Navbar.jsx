import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h1>Mirai School of Technology</h1>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='dance'>Help</Link>
        </div>
      
    </div>
  )
}

export default Navbar
