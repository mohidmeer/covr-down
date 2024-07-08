import React from 'react'
import profile from '../../assets/img/profileUser.png'

const Suggestions = () => {

    return (
        <div className='ml-auto  w-full '>
            <p className='text-2xl font-bold'>Suggested Profiles </p>

            <div className='grid grid-cols-1  mt-2 gap-4'>
                <div className='p-4 shadow-xl flex flex-col items-center justify-center  gap-2 border rounded-xl '>
                    <img src={profile} className='w-24 h-24 rounded-full' alt='profile' />
                    <p>Ayon Targaryion</p>
                    <button className='btn-outline px-2 !py-1'>
                        Follow
                    </button>
                </div>
                
                <div className='p-4 shadow-xl flex flex-col items-center justify-center  gap-2 border rounded-xl '>
                    <img src={profile} className='w-24 h-24 rounded-full' alt='profile' />
                    <p>Ayon Targaryion</p>
                    <button className='btn-outline px-2 !py-1'>
                        Follow
                    </button>
                </div>
                
                <div className='p-4 shadow-xl flex flex-col items-center justify-center  gap-2 border rounded-xl '>
                    <img src={profile} className='w-24 h-24 rounded-full' alt='profile' />
                    <p>Ayon Targaryion</p>
                    <button className='btn-outline px-2 !py-1'>
                        Follow
                    </button>
                </div>
                
                
               
              
            </div>

        </div>
    )
}

export default Suggestions