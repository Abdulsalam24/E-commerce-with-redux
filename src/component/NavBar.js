import React from "react";
import { useSelector } from "react-redux";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const state = useSelector((state) => state.cartReducer);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid nav-div">
        <h1>
          <Link className="navbar-brand fs-1 text-white" to="/">
            AMS
          </Link>
        </h1>
        <button
          className="navbar-toggler nav-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon dash"></span>
        </button>
        <div
          className="collapse navbar-collapse list"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
                
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Product">
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Cart">
                Cart ({state.length})
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

/*
 <nav>     <div classNameName="nav-bar">         <div classNameName="logo">             <h1>Store</h1>         </div>         <ul classNameName="list">             <li><Link to='/'>Home</Link></li>             <li><Link to='/Product'>Product</Link></li>             <li><Link to='/Cart'>Cart ({state.length})</Link></li>         </ul>     </div> < /nav>  */
