import React from 'react'
import Hero from '../components/landing/Hero'
import Services from '../components/landing/Services'
import News from '../components/landing/News'

const HomePage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <Hero/>
      <Services/>
      <News/>
      
    </div>
  )
}

export default HomePage