import React from 'react'
import Hero from '../components/landing/Hero'
import Services from '../components/landing/Services'
import News from '../components/landing/News'
import profile from '../assets/img/profileUser.png'
import Testimonials from '../components/landing/Testimonials'
import Download from '../components/landing/Download'
import Contact from '../components/landing/Contact'

const LandingPage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <Hero />
      <Services />
      <Testimonials />
      <News />
      <Contact/>
      <Download />
    </div>
  )
}

export default LandingPage