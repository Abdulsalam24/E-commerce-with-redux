import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../redux/action/Action'

import { motion } from 'framer-motion'


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
          <div className="btn-select">
            <button onClick={() => setFilter(data)}>
              All
            </button>
            <button onClick={() => handleCat("men's clothing")}>men</button>
            <button onClick={() => handleCat("women's clothing")}>women</button>
            <button onClick={() => handleCat("electronics")}>Accessory</button>
            <button onClick={() => handleCat("jewelery")}>jewelry</button>
          </div>
          <motion.div layout className="products">

                    {
                        filter.map((item) => {
                            return (
                              <div className="card product-div" key={item.id}>
                                <img className="card-img-top" src={item.image} alt={item.title}/>
                                <div className="card-body">
                                  <h5 className="card-title">{item.title}</h5>
                                  <div className='my-4'>
                                    <div className="btn-product">
                                    <button className="btn btn-primary" onClick={() => addCart(item)}>Add
                                    </button>
                                    <button className="btn btn-primary mx-4">
                                          <Link to={`/single/${item.id}`}>Check item
                                          </Link>
                                    </button>
                                    </div>
                                  </div>

                                </div>
                            </div>
                            )
                        })
                    }
          </motion.div>
        </div>
      </div>
    )
  }

export default ProductItem