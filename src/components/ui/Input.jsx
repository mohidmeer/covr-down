import React from 'react'

const Input = (props) => {
  return (
    <div className='relative m-2'>
        <label className='absolute bg-white -top-[6px] left-3 text-xs px-2 '>{props.name}</label>
        <input
            {...props}
            className='input'
        />


    </div>
  )
}

export default Input