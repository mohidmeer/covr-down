import React from 'react'

import profile from '../../assets/img/profilepage.png'

const Testimonials = () => {
  return (
    <div className='bg-primary text-white'>
        <div className='h-[60vh] flex flex-col gap-6 justify-center items-center max-w-3xl mx-auto text-center p-6'>
          <p className='subtitle uppercase text-success'>
            Testimonials
          </p>
          <h4>
            “Simply the best. Better than all the rest. Id recommend this product to beginners and advanced users.”
          </h4>

          <img src={profile} className='rounded-full w-20 h-20' alt='' />

          <div className=''>
            <p className='text-lg'>Jenifer Lorenx</p>
            <p className='tracking-widest text-gray-300 '>Digital Marketer</p>
          </div>
        </div>
      </div>
  )
}

export default Testimonials