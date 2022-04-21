import React , {useState} from 'react'
import Home from './page/Home'

import NavBar from './component/NavBar'

import {Routes , Route} from 'react-router-dom'
import Single from './page/Single'
import Product from './page/Product'
import Cart from './page/Cart'



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