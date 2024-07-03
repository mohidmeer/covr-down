import React from 'react'
import { NavLink } from 'react-router-dom'

import heroImg from '../../assets/img/hero.png'
import star from '../../assets/img/star.png'
import heroArt from '../../assets/img/heroart.png'

const Hero = () => {
  return (
    <div className='flex items-center h-[80vh] container mx-auto p-8 relative overflow-hidden '>    
    <div className='bg-gradient-to-r from-primary via-primary to-yellow-600  p-10 rounded-full h-32 w-32 absolute top-28 left-72   -z-10 blur-3xl' />    
        
        <img src={star} alt='star' className='absolute top-2 left-72 ' />
        <img src={star} alt='star' className='absolute bottom-10 ' />

        <div className='flex-1 flex flex-col  gap-1'>
            <h1 className='mt-52 max-h-fit overflow-hidden '>
                Make the best Management decisions
            </h1>
            <p>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>

            <NavLink className={'btn max-w-fit '}>
                GET STARTED 
            </NavLink>

            <div>
                <div className='mb-10 ml-20'>
                    <img src={heroArt} alt='' />

                </div>
            
            </div>



        </div>
        
        <div className='flex-1 flex items-center justify-center mt-32'>


            <img src={heroImg} alt='' className='w-[560px] '/>
            
        </div>
        
    </div>
  )
}

export default Hero