import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

const NavBar = () => {
    
    const state = useSelector(state => state.cartReducer);

  return (
        <nav>
            <div className="nav-bar">
                <div className="logo">
                    <h1>Store</h1>
                </div>
                <ul className="list">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Product'>Product</Link></li>
                    <li><Link to='/Cart'>Cart ({state.length})</Link></li>
                </ul>
            </div>
        </nav>
  )
}

export default NavBar