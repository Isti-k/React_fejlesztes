import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='flex flex-row'>
      <header>
        <Navbar />
      </header>
      <div className='m-20'>
        <Outlet />
      </div>
    </div>
  )
}

export default App