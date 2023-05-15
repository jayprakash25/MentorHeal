import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import { Outlet } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Tagline from './components/tagline'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      
    </div>
  )
}

export default App