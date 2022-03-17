import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {addProduct} from '../redux/action/Action'

const Single = ({setCart}) => {
    const {id} = useParams()
    const [single, setSingle] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const state = useSelector(state => state.cartReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        setCart(state)
    }, [state])

    const addCart = (product) => {
        dispatch(addProduct(product))
    }

    useEffect(() => {
        const fetchSingle = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (response.ok) {
                setSingle(await response.json())
                setLoading(false)
            }
        }
        fetchSingle().catch(err => {
            setError(true)
            setLoading(false)
        })
    }, [])

    const Loading = () => {
        return (<div classNameName='loading'>
            loading...
        </div>)
    }

    return (
        <div className='container'>
            {loading ? <Loading/>
                    : (
                        <div className="single my-5 row d-flex align-items-center justify-content-between">
                            <img className="col-5" src={single.image} alt={single.title}/>
                            <div className="col-6">
                                <h2 className="">{single.title}</h2>
                                <p className="my-4">{single.description}</p>
                                <div className="rate d-flex">
                                <p>Rate : {single.rating && single.rating.rate}</p>
                                <i className="fa fa-star pt-1 mx-2" aria-hidden="true"></i>
                                </div>
                                <button className='btn-single btn btn-primary border-0' onClick={() => addCart(single)}>Add Cart</button>
                            </div>
                        </div>
                    )
            } {
                error
                    ? 'failed to fetch'
                    : ''
            }</div>
    )
}

export default Single 











// {/* <div classNameName='single-product'>
//                         <div classNameName='img'>
//                             <img src={single.image} alt={single.title}/>
//                         </div>
//                         <div classNameName="text">
//                             <h1>{single.category}</h1>
//                             <h2 classNameName='title'>{single.title}</h2>
//                             <p>Description : {single.description}</p>
//                             <h1>${single.price}</h1>
//                             <div classNameName="rate">
//                                 <p>Rate : {single.rating && single.rating.rate}</p>
//                                 <i classNameName="fa fa-star" aria-hidden="true"></i>

//                                 <button onClick={() => addCart(single)}>Add Cart
//                                 </button>
//                             </div>
//   </div>
//                         </div> */
// }