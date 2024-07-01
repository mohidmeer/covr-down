import React from 'react'
import serviceImg from '../../assets/img/service1.png';
import serviceImg2 from '../../assets/img/service2.png';
import serviceImg3 from '../../assets/img/service3.png'
import serviceImg4 from '../../assets/img/service4.png'
import map from '../../assets/img/map.png'
import why from '../../assets/img/why.png'

import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <div className='max-w-6xl  mx-auto flex flex-col gap-20'>
            <div className='max-w-4xl mx-auto flex flex-col gap-8 text-center'>
                <p className='subtitle uppercase'>
                    Our Services
                </p>
                <h2>
                    We provide great services for our customers based on needs
                </h2>
                <p>
                    At CovrDown, we believe in the power of knowledge.  Our mission is to provide our clients with the best subject matter experts in the industry to give them the tools they need to succeed. We use a blend of conventional and unconventional processes to ensure that we can accomplish a truly secure environment.
                </p>
            </div>
            <div className='grid grid-cols-2 gap-10  text-white '>

                <div className='w-full h-[400px]  flex items-center justify-center relative'>
                    <img src={serviceImg} className='object-cover w-full h-full -z-10  brightness-50  rounded-2xl' alt='' />
                    <div className='absolute text-center bottom-10 z-10 cursor-pointer flex flex-col gap-4 max-w-[400px] '>
                        <h4 className='text-xl'>Strategic Planning</h4>
                        <p className=''>
                            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                        </p>

                        <Link>
                            Learn More
                        </Link>

                    </div>

                </div>
                <div className='w-full h-[400px]  flex items-center justify-center relative'>
                    <img src={serviceImg2} className='object-cover w-full h-full -z-10  brightness-50  rounded-2xl' alt='' />
                    <div className='absolute text-center bottom-10 z-10 cursor-pointer flex flex-col gap-4 max-w-[400px] '>
                        <h4 className='text-xl'>Introductory Consultation</h4>
                        <p className=''>
                            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                        </p>

                        <Link>
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className='w-full h-[400px]  flex items-center justify-center relative'>
                    <img src={serviceImg3} className='object-cover w-full h-full -z-10  brightness-50  rounded-2xl' alt='' />
                    <div className='absolute text-center bottom-10 z-10 cursor-pointer flex flex-col gap-4 max-w-[400px] '>
                        <h4 className='text-xl'>Protective Intelligence</h4>
                        <p className=''>
                            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                        </p>

                        <Link>
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className='w-full h-[400px]  flex items-center justify-center relative'>
                    <img src={serviceImg4} className='object-cover w-full h-full -z-10  brightness-50   rounded-2xl' alt='' />
                    <div className='absolute text-center bottom-10 z-10 cursor-pointer flex flex-col gap-4 max-w-[400px] '>
                        <h4 className='text-xl'>Executive Protection</h4>
                        <p className=''>
                            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                        </p>

                        <Link>
                            Learn More
                        </Link>
                    </div>
                </div>


            </div>

            <div className='flex gap-2'>
                <div className='flex-col gap-6 flex flex-1 justify-center'>
                    <h4 className='leading-tight '>
                        Organize remote team fast & easily with our mobile app.
                    </h4>
                    <p>
                        We share common trends and strategies for creating & improving your rental income.
                    </p>
                    <h5>
                        Create Geofencing
                    </h5>
                    <p>
                        With lots of unique blocks, you can easily build a page without coding.
                    </p>
                    <h5>
                        Get Alerts
                    </h5>
                    <p>
                        With lots of unique blocks, you can easily build a page without coding.
                    </p>

                </div>
                <div className='flex-1'>
                    <img src={map} alt='' />

                </div>


            </div>
            <div className='flex gap-2'>
                <div className='flex-col gap-6 flex flex-1 justify-center   '>
                    <h4 className='leading-tight '>
                            Why choose us?
                    </h4>
                    <p>
                        Figma ipsum component variant main layer. Variant selection pixel undo draft vertical horizontal star duplicate. Arrange selection italic line invite object.
                    </p>
                    
                    <ul className='flex gap-4 flex-col'>
                        <li className='flex gap-4 items-center font-bold'>
                        <span className='w-8 h-8 flex items-center justify-center bg-tertiary/50  rounded-full '>
                            <span className='p-2 rounded-full bg-primary'/>
                        </span>    
                            Weather Updates
                        </li>
                        
                        <li className='flex gap-4 items-center font-bold'>
                        <span className='w-8 h-8 flex items-center justify-center bg-tertiary/50  rounded-full '>
                            <span className='p-2 rounded-full bg-primary'/>
                        </span>    
                            News Updates
                        </li>
                        <li className='flex gap-4 items-center font-bold'>
                        <span className='w-8 h-8 flex items-center justify-center bg-tertiary/50  rounded-full '>
                            <span className='p-2 rounded-full bg-primary'/>
                        </span>    
                            Geo Fencing 
                        </li>
                        
                    </ul>
                    <Link className='btn max-w-fit '>
                        Learn More 
                    </Link>

                </div>
                <div className='flex-1'>
                    <img src={why} alt='' />

                </div>


            </div>

        </div>
    )
}

export default Services