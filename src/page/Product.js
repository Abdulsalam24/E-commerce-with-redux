import React, { useState , useEffect } from 'react'
import Error from '../component/Error';
import EventsLoader from '../component/EventsLoader';
import ProductItem from '../component/ProductItem';

const Product = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    

    useEffect(() => {
      const fetchData = async () => {
          setLoading(true)
          const response = await fetch('https://fakestoreapi.com/products');
          setData(await response.clone().json())
          setFilter(await response.json())
          setLoading(false)

      }
      fetchData()
      .catch(err => {
          setError(true)
          setLoading(false)
      })
    }, [])

  return (
    <section id='product'>
        {loading ? <EventsLoader/> : <ProductItem filter={filter} setFilter={setFilter} data={data}/>}

        {error ? <Error/> : ''}
    </section>
  )
}
export default Product