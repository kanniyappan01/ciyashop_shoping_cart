import './Products.scss'
import { Rating } from '@mui/material';
import React from 'react';
import products from '../../json/Products.json'
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/CartSlice';
import { whishListActions } from '../../store/WishListSlice'; 

const Products = () => {
  const dispatch =useDispatch()

  const handleAddTocart =(product)=>{
    console.log(product)
    dispatch(cartActions.addToCart(product));
  }

  const handleAddToWhishList = (product)=>{
    dispatch(whishListActions.addItemToWishList(product))
    dispatch(whishListActions.toggle())
  }

  return (
    <section className="products_section" >
      <div className="container">
        <div className='row' >
          {products?.map((product,index)=>
            // product.title.toLocaleLowerCase().includes(cart.searchContent) ?(
              <div key={product.id} className='col-lg-4 col-md-6 col-xl-3 col-sm-6 '>
                <div className='product mb-4 p-2'>
                  <div className='product_thumbnail'>
                      <div className='product_thumbnail_inner'>
                        <Link to={`/products/product/${product.id}`}>
                          <div className='product_img_wraper'>
                            <img className='img_main' src={product.images[0]} alt="product-img"/>
                            <img className='img_swap' src={product.images[1]} alt="product-img"/>
                          </div>
                        </Link>
                        <div className='product_actions '>
                          <div className='product_action_inner'>
                            <div className='wishlist_btn'>
                                <button onClick={()=> handleAddToWhishList(product)}><FavoriteBorderIcon  className="wishlist_icon"/></button>
                            </div>
                            <div className='add_to_cart' >
                              <button onClick={()=>handleAddTocart(product)}>ADD TO CART</button>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className='product_info'>
                    <span className='product_category mb-1'>{product.Categories}</span>
                    <h3 className='product_name'>{product.title}</h3>
                    <div className='product_rating_price d-flex justify-content-between'>
                      <span className='price'>${product.price}</span>
                      <Rating className='rating' name="read-only" value={product.rating} readOnly />
                    </div>
                  </div>
                </div>
              </div>
          //   ) : null
            
          // 
          )}

        </div>
      </div>
    </section>
    
  )
}

export default Products