import React, {useState, useEffect, useContext} from 'react'
import {ShopContext} from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import Title from '../components/Title'

const RelatedProducts = ({category, subcategory}) => {
  
    const {products} = useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(()=> {
      if(products.length > 0){
        let productsCopy = products.slice();
        productsCopy = productsCopy.filter((item)=> category === item.category)
        productsCopy = productsCopy.filter((item)=> subcategory === item.subcategory)
        setRelatedProducts(productsCopy.slice(0, 5))
      }
    }, [products])


    return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {relatedProducts.map((item, index)=>(
          <ProductItem key={index} id={item._id} price={item.price} name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts