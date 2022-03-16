import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, delProduct } from '../redux/action/Action'



const Cart = ({cart , setCart}) => {



    const dispatch = useDispatch();

    const delCart = (product) => {
        dispatch(delProduct(product))
    }

    const state = useSelector(state => state.cartReducer)

    const total = () => cart.reduce((num , {price , qty}) => {
        return num + price * qty
    }, 0 )

      useEffect(() => {
        setCart(state)
      },[state])

  return (
    <div className="container">
            <div className='cart'>
            {cart.length >= 1 && (<h2>Total : ${Math.floor(total())}</h2>)}
            {cart.length === 0 ? (<div className='cart-no'>No Item Added...</div>) : cart.map((item) => (
                <div className='cart-item' key={item.id}>
                    <div className='cart-img'>
                        <img src={item.image} alt={item.title}/>
                    </div>
                    <div className="cart-text">
                        <h2 className='title'>{item.title}</h2>
                        <h3>${item.price}</h3>
                        <h2>quantity : {item.qty}</h2>
                        <button onClick={() => delCart(item)}>Del</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cart