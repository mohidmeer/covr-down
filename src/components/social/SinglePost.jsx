import React from 'react'

import { AiFillHeart, AiOutlineShareAlt, AiOutlineComment } from 'react-icons/ai'; // Import icons as needed
import { IoLocationOutline } from "react-icons/io5";
import imgUrl from '../../assets/img/service2.png'
import profile from '../../assets/img/profileUser.png'
import { CiSaveDown2 } from "react-icons/ci";
import Input from '../ui/Input';
const SinglePost = () => {
    return (
        <div className="mt-5  mx-auto bg-white rounded-lg  overflow-hidden lg:min-w-[500px] xl:min-w-[700px]">
            <div className="p-4 flex gap-4 items-center">
                <img src={profile} className='w-16 h-16 rounded-full' alt='profile' />
                <div>
                    <p className=" font-semibold ">
                        Cristine Salviston <span className='font-extralight '>  is with </span> Alif & Khalid
                    </p>
                    <p className='text-gray-400 flex gap-1 items-center'>
                        <IoLocationOutline />
                        Sisily, Italy
                    </p>
                </div>

            </div>
            <p className="p-3  text-xl ">Snow Fall Festival at Italy</p>
            <img src={imgUrl} alt="Snow Fall Festival" className="w-full h-auto rounded-2xl  " />
            <div className="p-4 flex items-center">
                <div className="flex items-center gap-4  w-full">
                    <button className="flex items-center space-x-1 text-gray-500">
                        <AiFillHeart className="" size={24} />
                        <span>1.2k</span>
                    </button>

                    <button className="flex items-center space-x-1 text-gray-500">
                        <AiOutlineComment size={24} />
                        <span>200</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500">
                        <AiOutlineShareAlt size={24} />
                        <span></span>
                    </button>
                    <button className="flex items-center  text-gray-500 ml-auto">
                        <CiSaveDown2 size={24} />
                        <span></span>
                    </button>
                </div>
            </div>
            <div className="p-4 border-t flex justify-between gap-8 ">
                <div className='w-full'>
                    <Input className={'w-full'} name={'Comment'} placeholder={'Write your Comment'} />
                </div>
                <button className='font-bold text-primary'>
                    Post
                </button>

            </div>
        </div>
    )
}

export default SinglePost