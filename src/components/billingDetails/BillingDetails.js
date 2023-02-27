import React from 'react';
import './BillingDetails.scss';

const BillingDetails = () => {

    const billingCountrys = [
        {
            name:"Aland Islands", value:"AX"
        },
        {
            name: "Afghanistan", value: "AF"
        },
        {
            name: "Albania", value: "AL"
        }
]

  return (
    <div className='billing_wraper mt-4'>
        <h3 className='mb-3'>Billing details</h3>
        <div className='billing_feilds'>
            <div className='form_group mb-3'>
                <label htmlFor="billing_first_name">First name <abbr className='required' title='required'>*</abbr></label>
                <input type={"text"} id="billing_first_name" placeholder='Alice'/>
                {/* <span className='error' >Please Enter A Data</span> */}
            </div>
            <div className='form_group mb-3'>
                <label htmlFor="billing_last_name">Last name <abbr className='required' title='required'>*</abbr></label>
                <input type={"text"} id="billing_last_name" placeholder="Williams"/>
                {/* <span className='error' >Please Enter A Data</span> */}
            </div>
            <div className='form_group mb-3'>
                <label htmlFor="billing_Company_name">Company name (optional)</label>
                <input type={"text"} id="billing_Company_name" placeholder='Shop'/>
                {/* <span className='error' >Please Enter A Data</span> */}
            </div>
            <div className='form_group mb-3'>
                <label htmlFor="billing_last_name">Country <abbr className='required' title='required'>*</abbr></label>
                <select name='billing_country' id='billing_country'>
                    {billingCountrys.map((item,i)=>(
                        <option key={i} value={item.value}>{item.name}</option>
                    ))}
                </select>
                {/* <span className='error' >Please Enter A Data</span> */}
            </div>
            <div className='form_group mb-3'>
                <label htmlFor="billing_street_name">Street address <abbr className='required' title='required'> *</abbr></label>
                <input type={"text"} id="billing_street_name" placeholder='4402 Worthington Drive'/>
                {/* <span className='error' >Please Enter A Data</span> */}
            </div>
            <div className='form_group mb-3'>
                <label htmlFor="billing_city_name">Town / City <abbr className='required' title='required'> *</abbr></label>
                <input type={"text"} id="billing_city_name" placeholder='Near Sherwood Mall'/>
                {/* <span className='error' >Please Enter A Data</span> */}
            </div>
            <div className='form_group mb-3'>
                <label htmlFor="billing_postCode_name">Postcode / ZIP <abbr className='required' title='required'> *</abbr></label>
                <input type={"text"} id="billing_postCode_name" placeholder='678956'/>
                {/* <span className='error' >Please Enter A Data</span> */}
            </div>
            <div className='form_group mb-3'>
                <label htmlFor="billing_phone_name">Phone <abbr className='required' title='required'> *</abbr></label>
                <input type={"number"} id="billing_phone_name" placeholder='9867452390'/>
                {/* <span className='error' >Please Enter A Data</span> */}
            </div>
            <div className='form_group mb-3'>
                <label htmlFor="billing_email_name">Email address<abbr className='required' title='required'> *</abbr></label>
                <input type={"email"} id="billing_email_name" placeholder='support@ciyashop.com'/>
                {/* <span className='error' >Please Enter A Data</span> */}
            </div>
        </div>
    </div>
  )
}

export default BillingDetails