import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useDispatch} from 'react-redux';
import {cartActions} from '../../store/CartSlice';


const CartItems = ({product}) => {
  console.log(product)

  const dispatch = useDispatch();
  // const quantity = useSelector(state => state.cart.items)

  const handleRemove = (id)=>{
    dispatch(cartActions.deleteToCart(id));
  }

  const handleIncrment = (id)=>{
    console.log("in")
    dispatch(cartActions.incrementQuantity(id))
  }

  const handleDecrement =(product)=>{
    if(product.quantity > 1){
      dispatch(cartActions.decrementQuantity(product.id))
    }else{
      dispatch(cartActions.deleteToCart(product.id))
    }
  }
  return (
    <>
      <tr>
        <td className='product_remove'>
          <DeleteOutlineIcon onClick={()=>handleRemove(product.id)} />
        </td>
        <td className='product_image'>
          <img src={product.images[0]} width="70px" alt='product_thumbnail'/>
        </td>
        <td className='product_name'>{product.title}</td>
        <td className='product_price'>${product.price}</td>
        <td className='product_quantity'>
          <div className='quantity'>
            <button className='decrement ' onClick={()=>handleDecrement(product)}>-</button>
            <span>{product.quantity}</span>
            <button className='increment' onClick={()=>handleIncrment(product.id)}>+</button>
          </div>
        </td>
        <td className='product_subtotal'>${product.total}</td>
      </tr>
    </>
  )
}

export default CartItems