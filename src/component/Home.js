import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
        <div className="home">
            <div className="home-text">
                <h2>welcome to Abd store</h2>
                <button><Link to='/product'>Buy Products</Link></button>
            </div>
        </div>
  )
}

export default Home