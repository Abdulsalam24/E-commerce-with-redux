import React, { useState , useEffect } from 'react'
import ProductItem from './ProductItem';

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
        {loading ? 'loading...' : <ProductItem filter={filter} setFilter={setFilter} data={data}/>}

        {error ? 'failed to fetch' : ''}
    </section>
  )
}
export default Product