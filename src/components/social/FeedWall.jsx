import React from 'react'
import SinglePost from './SinglePost'
import Suggestions from './Suggestions'

const FeedWall = () => {
  return (
    <div className='flex gap-20 relative'>
      <div className='flex flex-col gap-6'>
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>

      <div className='sticky top-4 self-start'>
        <Suggestions />
      </div>

    </div>
  )
}

export default FeedWall