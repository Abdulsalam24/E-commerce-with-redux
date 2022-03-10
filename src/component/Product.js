import React, { useState , useEffect } from 'react'

const Product = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
          setLoading(true)
          const response = await fetch('https://fakestoreapi.com/products');
            if(response.ok){
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
            }else{
                setError(true)
            }
      }
      fetchData()
    }, [])

    console.log(data , filter , 'data')


      const handleCat = (cat) => {
        const updatedList = data.filter((item) => item.category === cat)
        setFilter(updatedList)
      }

    const ProductItem = () => {
      return (
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
                filter.map((item) => (
                    <div className="product-div" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                    </div>
                ))
            }
          </div>
        </div>
      )
    }

  return (
    <section id='product'>
        {loading ? 'loading...' : <ProductItem/>}

        {error ? 'failed to fetch...' : loading}
    </section>
  )
}

export default Product