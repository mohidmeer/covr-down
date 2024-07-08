import React from 'react'
import ServicesLayout from '../../layouts/ServicesLayout'
import { IoCheckmark } from "react-icons/io5";

const PaymentPlan = () => {
  return (
    <ServicesLayout title={'Choose your plan'}>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20'>
        <div className='p-6 shadow-2xl flex flex-col justify-center items-center rounded-2xl bg-white h-fit '>
          <h5>Starter Plan</h5>
          <ul className='flex flex-col gap-2 pl-4 mt-5'>
            <li className="flex items-center gap-2 font-[600]">
              <IoCheckmark />
              Live chat
            </li>
            <li className="flex items-center gap-2 font-[600]">
              <IoCheckmark />
              5GB hosting
            </li>
            <li className="flex items-center gap-2 font-[600]">
              <IoCheckmark />
              2 websites, 3 subdomains
            </li>
          </ul>
          <p className='text-4xl mt-10 font-bold'>
            $9.99/weekly
          </p>
          <p className='text-lg'>up to 5 user + 1.99 per user</p>
          <button className=' mt-5 btn-outline-saqure'>
            Select

          </button>
        </div>
        <div className='p-6 shadow-2xl flex flex-col justify-center items-center rounded-2xl bg-primary text-white h-[500px] md:-mt-28    '>
          <p>Your plan</p>
          <h5>Silver</h5>
          <ul className='flex flex-col gap-2 pl-4 mt-5'>

            <li className="flex items-center gap-2">
              <IoCheckmark />
              Live chat
            </li>
            <li className="flex items-center gap-2">
              <IoCheckmark />
              5GB hosting
            </li>
            <li className="flex items-center gap-2">
              <IoCheckmark />
              2 websites, 3 subdomains
            </li>
            <li className="flex items-center gap-2">
              <IoCheckmark />
              Email & live chat
            </li>
            <li className="flex items-center gap-2">
              <IoCheckmark />
              Backlinks
            </li>
          </ul>
          <p className='text-4xl mt-10 font-bold'>
            $9.99/weekly
          </p>
          <p className='text-lg'>up to 5 user + 1.99 per user</p>
          <button className=' mt-5 btn-outline-saqure bg-white text-primary'>
            Unsubscribe

          </button>
        </div>
        <div className='p-6 shadow-2xl flex flex-col justify-center items-center rounded-2xl bg-white h-fit '>
          <h5>Gold</h5>
          <ul className='flex flex-col gap-2 pl-4 mt-5'>
            <li className="flex items-center gap-2 font-[600]">
              <IoCheckmark />
              Live chat
            </li>
            <li className="flex items-center gap-2 font-[600]">
              <IoCheckmark />
              5GB hosting
            </li>
            <li className="flex items-center gap-2 font-[600]">
              <IoCheckmark />
              2 websites, 3 subdomains
            </li>
          </ul>
          <p className='text-4xl mt-10 font-bold'>
            $9.99/weekly
          </p>
          <p className='text-lg'>up to 5 user + 1.99 per user</p>
          <button className=' mt-5 btn-outline-saqure'>
            Select

          </button>
        </div>


      </div>

    </ServicesLayout>
  )
}

export default PaymentPlan