import React from 'react'

import download from '../../assets/img/download.png'

const Download = () => {
  return (
    <div className='bg-primary text-white'>
        <div className='h-[60vh] flex flex-col gap-6 justify-center items-center max-w-3xl mx-auto text-center'>

          <h1>
            Love Our Application ? <br />
            Download Now
          </h1>
          <p className='text-xl'>Frybix delivered blazing fast performance, striking word solution</p>
          <img src={download} className='' alt='' />

        </div>
      </div>
  )
}

export default Download