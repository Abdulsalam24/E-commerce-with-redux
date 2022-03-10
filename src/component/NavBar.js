import React from 'react'

import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
        <nav>
            <div className="nav-bar">
                <div className="logo">
                    <h1>Store</h1>
                </div>
                <ul className="list">
                    <li><NavLink to='/Product'>Product</NavLink></li>
                    <li><NavLink to='/Cart'>Cart (0)</NavLink></li>
                    <li></li>
                </ul>
            </div>
        </nav>
  )
}

export default NavBar