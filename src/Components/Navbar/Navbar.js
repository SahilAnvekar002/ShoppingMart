import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav id='navbar' className='navbar'>
        <div className="logo">
            <h2 className='heading'>ShoppingMart</h2>
        </div>
        <form className='search'>
            <input type="text" name='search' id='text' placeholder='Search with customer name'/>
            <input type="button" value='Search' id='btn'/>
        </form>
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </nav>
  )
}


export default Navbar
