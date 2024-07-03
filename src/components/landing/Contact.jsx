import React from 'react'
import Input from '../ui/Input'

const Contact = () => {
    return (
        <div className='bg-[#161C2D] text-white h-[60vh]'>
            <div className='max-w-6xl h-full mx-auto'>

                <div className='flex justify-between items-center h-full'>
                    <div className='flex flex-col gap-4 w-[500px] '>

                        <h4>
                            Get a free consultancy from our expert right now!
                        </h4>
                        <p>
                            With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino.
                        </p>



                    </div>
                    <div className=''>
                        <form className='flex flex-col w-[400px] bg-white px-6 py-10 rounded-md text-black'>
                            <Input name='Name' placeholder='Enter your name' />
                            <Input name='Email' placeholder='Enter your email' />
                            <Input name='Phone' placeholder='Enter your phone number' />
                            <Input name='Which Service you need' placeholder='Which service do you need?' />
                            <div className='p-2'>
                                <button className='btn '>
                                    Get Free Consultancy

                                </button>
                            </div>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact