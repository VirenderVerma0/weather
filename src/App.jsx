import React from 'react'
import Weather from "./components/Weather"
import Navbar from './components/Navbar'
import About from './components/About'
import { Route, Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/about" element={<About />} />
        </Routes>
    </>
  )
}

export default App
