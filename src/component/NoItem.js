import React from 'react'
import { Link } from 'react-router-dom';


const NoItem = () => {
  return (
    <div className='no-item container'>
        <h1>Your Cart is Empty ☹</h1>
        <Link to='/product'><button>&#x2190; Proceed to Product</button></Link>
    </div>
  )
}

export default NoItem