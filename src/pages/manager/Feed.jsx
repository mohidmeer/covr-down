
import React from 'react'
import Input from '../../components/ui/Input'
import FeedWall from '../../components/social/FeedWall'

const Feed = () => {
  return (
    <> 
    <div className='flex flex-col gap-4 w-full'>
            <div className='flex justify-between  overflow-hidden items-center   '>
                <h5>Feed</h5>
                <div className='w-1/3 ml-auto'>
                    <Input name={'Search'} placeholder="Search for user or keyword" />
                </div>
                <button className='btn '>
                    Add Keyword
                </button>
            </div>
            
                <FeedWall/>


            
        </div>

       
    </>
  )
}

export default Feed

