import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Card'

function App() {


  return (
    <>
    <div className='parent'>
       <Card user='Messi' age={39} img='https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Leo_Messi_Argentina_v_Egypt_7_July_2026-1.jpg/960px-Leo_Messi_Argentina_v_Egypt_7_July_2026-1.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail'/> 
       <Card user='Neymar' age={32} img='https://s.rfi.fr/media/display/0bb1a4ae-8b58-11f1-947e-005056a90284/w:1024/p:16x9/b0c7328d9d3b0746fe3a7437bf2617f4e651a967.jpg'/>
       <Card user='Suarez' age={35} img='https://m.media-amazon.com/images/M/MV5BM2QwOGYzNDgtNDA3ZS00ZjI2LWFjYTItMmQwOGQ4YTJmZWI2XkEyXkFqcGc@._V1_.jpg' />


    </div>
   

   

     
    </>
  )
}

export default App
