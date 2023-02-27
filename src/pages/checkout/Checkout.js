import './Checkout.scss';
import React from 'react'
import BillingDetails from '../../components/billingDetails/BillingDetails';

const Checkout = () => {
  return (
    <section>
        <div className='container'>
            <div className='checkout_wraper'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <BillingDetails/>
                    </div>
                    <div className='col-md-6 col-sm-12'></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Checkout