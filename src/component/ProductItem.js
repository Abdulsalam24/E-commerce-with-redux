import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../redux/action/Action'


const ProductItem = ({filter , setFilter , data}) => {

    const handleCat = (cat) => {
        const updatedList = data.filter((item) => item.category === cat)
        setFilter(updatedList)
    }

    const dispatch = useDispatch()

    const addCart = (product) => {
        dispatch(addProduct(product))
    }


    return (
      <div className="container">
        <div className="productItem">
          <div className="btn">
            <button onClick={() => setFilter(data)}>All</button>

            <button onClick={() => handleCat("men's clothing")}>men</button>
            <button onClick={() => handleCat("women's clothing")}>women</button>
            <button onClick={() => handleCat("electronics")}>Accessory</button>
            <button onClick={() => handleCat("jewelery")}>jewelry</button>
          </div>
          <div className="products">
            {
                filter.map((item) => {
                  return (
                    <div className="product-div" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                        <button><Link to={`/single/${item.id}`}>Check item </Link></button>
                        <button onClick={() => addCart(item)}>add </button>
                        
                    </div>
                  )
                })
            }
          </div>
        </div>
      </div>
    )
  }

export default ProductItem