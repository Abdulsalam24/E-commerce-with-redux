import React , {useState} from 'react'
import Home from './component/Home'

import NavBar from './component/NavBar'

import {Routes , Route} from 'react-router-dom'
import Single from './component/Single'
import Product from './component/Product'
import Cart from './component/Cart'



const App = () => {
  const [cart , setCart] = useState([])


  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/product' element={<Product/>}/>
        <Route exact path='/single/:id' element={<Single setCart={setCart}/>}/>
        <Route exact path='/Cart' element={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
    </>

  )
}

export default App