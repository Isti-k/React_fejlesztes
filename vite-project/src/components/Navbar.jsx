import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='header'>
        <a href="/" className='logo'>Logo</a>

        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="gallery">Gallery</a>
            <a href="/">Services</a>
            <a href="singin">Singin</a>
        </nav>
    </div>
  )
}

export default Navbar