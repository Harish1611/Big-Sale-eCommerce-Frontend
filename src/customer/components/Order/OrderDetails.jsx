import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracking from './OrderTracking'

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>

        <div className=''>
            <h1 className='fotn-bold text-xl py-7'>Delivery Address</h1>
        <AddressCard />
        </div>

        <div className='py-20'>
            <OrderTracking activeStep={3} />
        </div>

    </div>
  )
}

export default OrderDetails