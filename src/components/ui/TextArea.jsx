import React from 'react'

const TextArea = (props) => {
  return (
    <div className='relative m-2 col-span-2'>
        <label className='absolute bg-white -top-[6px] left-3 text-xs px-2  '>{props.name}</label>
        <textarea
            {...props}
            className='input col-span-2'
        />


    </div>
  )
}

export default TextArea