import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import Home from './components/Home'
import Login from './components/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path="/add" element={<Add />} /> 
      
      </Routes>
    </>
  )
}

export default App
