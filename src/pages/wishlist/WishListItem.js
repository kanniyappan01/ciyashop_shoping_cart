import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { cartActions } from '../../store/CartSlice';
import { whishListActions } from '../../store/WishListSlice';
import { useDispatch } from 'react-redux';


const WishListItem = ({product}) => {
    const dispatch = useDispatch()
    const handleAddToCart =(product)=>{
        dispatch(cartActions.addToCart(product))
        dispatch(whishListActions.deleteToWishList(product.id))
    }

    const handlClearBtn =()=>{
        dispatch(whishListActions.deleteToWishList(product.id))
    }
  return (
    <>
        <tr>
            <td className='product_remove'>
                <DeleteOutlineIcon className='product_remove_btn' onClick={handlClearBtn}/>
            </td>
            <td className='product_thumbnail'>
                <img src={product.images[0]} width="70px" alt='product_thumbnail'/>
            </td>
            <td className='product_name'>{product.title}</td>
            <td className='product_price'>${product.price}</td>
            <td className='product_status'>{product.status}</td>
            <td className='product_actions'>
                <button className='addTo_cart_btn' onClick={()=>handleAddToCart(product)}>ADD TO CART</button>
            </td>
        </tr>
    </>
  )
}

export default WishListItem