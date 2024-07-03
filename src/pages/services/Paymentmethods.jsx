import React from 'react'
import ServicesLayout from '../../layouts/ServicesLayout'

import paypal from '../../assets/img/paypal.png'
import master from '../../assets/img/master.png'
import google from '../../assets/svgs/google.svg'
import apple  from '../../assets/svgs/apple.svg'

const PaymentMethods = () => {
  return (
    <ServicesLayout title={'Payment Methods'}>

      <div className='flex flex-col gap-6'>
        <div className='bg-gray-100  p-4 flex items-center gap-2 cursor-pointer rounded-lg'>
          <div className='p-2 bg-gray-100  max-w-fit rounded-md'>
            <img src={paypal} alt='' />
          </div>
          <div className='max-w-3xl'>
            <h6>Paypal</h6>
          </div>
          <p className='ml-auto' >Connected</p>
        </div>
        <div className='bg-gray-100  p-4 flex items-center gap-2 cursor-pointer rounded-lg'>
          <div className='p-2 bg-gray-100  max-w-fit rounded-md'>
            <img src={master} alt='' />
          </div>
          <div className='max-w-3xl'>
            <h6>Master</h6>
          </div>
          <p className='ml-auto' >Connected</p>
        </div>
        <div className='bg-gray-100  p-4 flex items-center gap-2 cursor-pointer rounded-lg'>
          <div className='p-2 bg-gray-100  max-w-fit rounded-md'>
            <img src={google} alt='' />
          </div>
          <div className='max-w-3xl'>
            <h6>Google Pay</h6>
          </div>
          <p className='ml-auto' >Connected</p>
        </div>
        <div className='bg-gray-100  p-4 flex items-center gap-2 cursor-pointer rounded-lg'>
          <div className='p-2 bg-gray-100  max-w-fit rounded-md'>
            <img src={apple} alt='' />
          </div>
          <div className='max-w-3xl'>
            <h6>Apple Pay</h6>
          </div>
          <p className='ml-auto btn !bg-[#9D87F1]' >Connect</p>
        </div>

      </div>

    </ServicesLayout>
  )
}

export default PaymentMethods