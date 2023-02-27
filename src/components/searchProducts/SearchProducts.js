import React from 'react';
import './SearchProducts.scss';
import { Link } from 'react-router-dom';

const SearchProducts = ({product,setActive}) => {
  return (
    <li className='product col-lg-2 p-2'>
        <Link to={`/products/product/${product.id}`} onClick={()=>setActive(false)}>
            <div className='product_thumbnail mb-3'>
                <img src={product.images[0]} alt="product img" width={"100%"}/>
            </div>
            <div className='product_detials'>
                <p>{product.title}</p>
            </div>
        </Link>
    </li>
  )
}

export default SearchProducts