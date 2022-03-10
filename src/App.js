import React from 'react'
import Home from './component/Home'

import NavBar from './component/NavBar'
import Product from './component/Product'

import {Switch , Route} from 'react-router-dom'


const App = () => {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={<Home/>}/>
        <Route exact path='/Product' component={<Product/>}/>
      </Switch>
    </>
  )
}

export default App