import React, { useEffect , useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addProduct } from '../redux/action/Action'

const Single = ({setCart}) => {
  const {id} = useParams()
  const [single, setSingle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);



  const state = useSelector(state => state.cartReducer)

  const dispatch = useDispatch();

  useEffect(() => {
    setCart(state)
  },[state])
 

  const addCart = (product) => {
    dispatch(addProduct(product))
  }
  
  useEffect(() => {
    const fetchSingle = async () => {
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if(response.ok){
          setSingle(await response.json())
          setLoading(false)
        }
    }
    fetchSingle()
    .catch(err => {
      setError(true)
      setLoading(false)
    })
  }, [])




  const Loading = () => {
    return (
      <div className='loading'>
        loading...
      </div>
    )
  }

  
  return (
   <div className='container'>
        {loading ? <Loading/> : (
        <div className='single-product'>
            <div className='img'>
                <img src={single.image} alt={single.title}/>
            </div>
            <div className="text">
                <h1>{single.category}</h1>
                <h2 className='title'>{single.title}</h2>
                <p>Description : {single.description}</p>
                <h1>${single.price}</h1>
                <div className="rate">
                <p>Rate : {single.rating && single.rating.rate}</p>
                <i className="fa fa-star" aria-hidden="true"></i>

                <button onClick={() => addCart(single)}>Add Cart </button>
                </div>

            </div>
        </div>)}
        {error ? 'failed to fetch' : ''}
    </div>
  )
}

export default Single