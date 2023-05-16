import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import AboutUs from './components/AboutUs'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      
    </div>
  )
}

export default App