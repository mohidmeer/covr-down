import React from 'react'

import news from '../../assets/img/news.png'

const News = () => {
  return (
    <div className='bg-gray-100 pt-10 pb-20'>
      <div className='flex flex-col gap-2 text-center p-4 '>
        <h2>News That Helps</h2>
        <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
      </div>
      <div className='max-w-6xl mx-auto mt-10 '>
        <div className='grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-8 p-6'>

          <div className='bg-white shadow-2xl shadow-primary rounded-xl overflow-hidden relative'>
              <img src={news}  className=' w-full    rounded-t-xl ' alt='' />

              <div className='px-8 py-4'>
                <p className='font-light'>Carrer</p>
                <h6>
                How to win any job you want. Get started with 5 steps.
                </h6>

              </div>



          </div>
          <div className='bg-white shadow-2xl shadow-primary rounded-xl overflow-hidden relative'>
              <img src={news}  className=' w-full    rounded-t-xl ' alt='' />

              <div className='px-8 py-4'>
                <p className='font-light'>Carrer</p>
                <h6>
                How to win any job you want. Get started with 5 steps.
                </h6>

              </div>



          </div>
          <div className='bg-white shadow-2xl shadow-primary rounded-xl overflow-hidden relative'>
              <img src={news}  className=' w-full    rounded-t-xl ' alt='' />

              <div className='px-8 py-4'>
                <p className='font-light'>Carrer</p>
                <h6>
                How to win any job you want. Get started with 5 steps.
                </h6>

              </div>



          </div>
        
        </div> 

      </div>

    </div>
  )
}

export default News