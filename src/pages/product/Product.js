import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Product.scss';
import Products from '../../json/Products.json'
import { Rating } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector,useDispatch } from 'react-redux';
import { cartActions } from '../../store/CartSlice';

const Product = () => {
  
  const cartProducts = useSelector(state => state.cart.items )
  const [data,setData] =useState(null);
  const [change,setChange] = useState(null)
  const product = useParams();
  const dispatch = useDispatch()

  useEffect(()=>{
    if(product.id){
      console.log("yes")
      setData(Products.find((item)=> item.id == product.id))
      setChange(cartProducts.find(item => item.id == product.id))
    }
  },[product.id,cartProducts])

  const shareIcons = [<TwitterIcon id="fo_icon"/>, <GoogleIcon id="fo_icon"/>, <InstagramIcon id="fo_icon"/>, <LinkedInIcon id="fo_icon"/>, <PinterestIcon id="fo_icon"/>];

  const handleAddToCart =(product)=>{
    dispatch(cartActions.addToCart(product))
  }

  return (
    <section className='product-section' id="top">
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-lg-5'>
            <div className='image_wraper'>
              <img src={data?.images[0]} alt="product img" width={"100%"}/>
            </div>
          </div>
          <div className='col-md-6 col-lg-7'>
            <div className='product_content_wraper'>
              <h4>{data?.title}</h4>
              <div className='rating_wraper'>
                {data && <Rating className='rating' name="read-only" value={data?.rating} readOnly />}
                <span className='reviews'> {`(${data?.review})`}</span>
              </div>
              <h3 className='product_title my-3'>${data?.price}</h3>
              <p className='product_detials'>{data?.description}</p>
              {change ? (<Link to={"/cart"} className='add_to_cart_btn'><ShoppingCartOutlinedIcon className='cart_icon'/> VIEW TO CART</Link>): (<Link onClick={()=>handleAddToCart(data)} to={"/cart"} className='add_to_cart_btn'><ShoppingCartOutlinedIcon className='cart_icon'/> ADD TO CART</Link>)}
              
            </div>
            <hr/>
            <p className='mb-2'><b>SKU : </b><span className='product_other_detials'>{data?.sku}</span></p>
            <p className='mb-2'><b>Size : </b><span className='product_other_detials'>{data?.size}</span></p>
            <p className='mb-2'><b>Categories : </b><span className='product_other_detials'>{data?.Categories}</span></p>
            <p className='mb-2'><b>Brand : </b><span className='product_other_detials'>dresswear,women,handbags</span></p>
            <hr/>
            <div className='share_actions d-flex'>
              <p><b>Share :</b></p>
              <div className='share_btn_groups'>
                {shareIcons.map((icon,i)=> (
                  <Link className="share_icon" key={i} >{icon}</Link>
                ))}
              </div>
            </div>
            <hr/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product