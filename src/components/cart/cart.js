import './Cart.scss';
import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import { Link, useNavigate } from 'react-router-dom'; 

const Cart = () => {
    const cartProducts = useSelector(state => state.cart.items);
    const [shippingCharge,setShippingCharge] = useState("flat");
    const [totalPrice,setTotalPrice] = useState(null);
  
    const navigate = useNavigate();
    const handleReturnShop =()=>{
      navigate('/products')
    }

    let getTotalPrice =cartProducts.map(item => item.total).reduce((acc,value) => acc+value, 0);

    useEffect(() => {
      if("flat" === shippingCharge){
        setTotalPrice(getTotalPrice+1)
      }else{
        setTotalPrice(getTotalPrice+1)
      }
    }, [shippingCharge,getTotalPrice])
    
    const handleTotalRate =(e)=>{
      if("flat" === e.target.id){
        setShippingCharge("flat")
        console.log("flat")
      }else{
        setShippingCharge("picup")
        console.log("pickup")
      }
    }

  return (
    <section className='cart_section'>
      <div className='container'>
      {cartProducts.length > 0 ? (
        <div className='row'>
          <div className='col-xl-8'>
            <div className='table_responsive'>
              <table className='cart_table table'>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th className='product_name'>Product</th>
                    <th className='product_price'>Price</th>
                    <th className='product_quantity'>Quantity</th>
                    <th className='product_total'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((product,index)=>(
                    <CartItems key={product.id} product={product}/>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className='col-xl-4 px-4'>
              <div className='cart_totals'>
                  <div className='cart_totals_inner'>
                    <h2>Cart totals</h2>
                    <div className='table_responsive'>
                      <table className='shop_table table'>
                        <tbody>
                          <tr className='cart_subtotal'>
                            <th className='total_heading'>Subtotal</th>
                            <td className='sub_total'>
                              <span>$ {getTotalPrice}</span>
                            </td>
                          </tr>
                          <tr className='shiping_total'>
                            <th>Shipping</th>
                            <td className='shiping'>
                              <ul>
                                <li className='mb-3'>
                                  <input id="flat" type={"radio"} name="rate" className='shiping_rate' checked={true} onChange={handleTotalRate}/>
                                  <label htmlFor="flat">Flat rate: $1.00</label>
                                </li>
                                {/* <li className='mb-3'>
                                  <input id="picup" type={"radio"} name="rate" className='shiping_rate' onChange={handleTotalRate}/>
                                  <label htmlFor="picup">Local pickup: $2.00</label>
                                </li> */}
                                <span>Estimate for <b>India</b></span>
                              </ul>
                            </td>
                          </tr>
                          {/* <tr className='shiping_total'>
                            <th>Shipping Address</th>
                            <td className='shiping'></td>
                          </tr> */}
                          <tr className='order_total'>
                            <th className='total_heading'>Total</th>
                            <td className='cart_grand_total'>
                              <span>$ {totalPrice}</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className='check_out mt-3'>
                      <Link to={"/checkout"} className='check_out_button button'>PORCEED TO CHECKOUT</Link>
                    </div>
                  </div>
              </div>
          </div>
        </div>): (
              <div className='d-flex justify-content-center'>
                <div className='cart_not_found'>
                  <img className='mb-3' src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QRAaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iNjMzMDZFMjg2MEIzRDlCMUM2Q0RGQzlDRjk0REUxNzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjc4NDk2Q0U5RkIzMTFFOTlFRUVCNzEzNENDMDcyNTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjc4NDk2Q0Q5RkIzMTFFOTlFRUVCNzEzNENDMDcyNTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1MEJFRjUyRTBGM0U4MTFCODkwRDMzM0NCRjgzRTY1IiBzdFJlZjpkb2N1bWVudElEPSI2MzMwNkUyODYwQjNEOUIxQzZDREZDOUNGOTRERTE3NCIvPiA8ZGM6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" alt='cart_not_found'/>
                  <h4 className='mb-3'>Your cart is currently empty.</h4>
                  <Link to={'/products'} className='shop_btn' onClick={handleReturnShop}>Return to shop</Link>
                </div>
              </div>
            )}
      </div>
    </section>
  )
}

export default Cart