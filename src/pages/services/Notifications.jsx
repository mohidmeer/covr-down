import React from 'react'
import ServicesLayout from '../../layouts/ServicesLayout'
import { PiBell } from 'react-icons/pi'
import { MdForward } from 'react-icons/md'
import { IoChevronForwardSharp } from 'react-icons/io5'

const Notifications = () => {


    const notificationsData = [
        {
            title: 'New York - Gas Leak',
            description: 'Lorem ipsum dolor sit amet consectetur. Integer eget justo ac varius. Pretium blandit scelerisque eget nulla ut at. Sollicitudin in nisi nisl aliquam. Habitant massa vulputate mauris arcu eros mollis aliquam aenean in.'
        },
        {
            title: 'San Francisco - Power Outage',
            description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.'
        },
        {
            title: 'Los Angeles - Water Main Break',
            description: 'Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
        },
        {
            title: 'Chicago - Road Closure',
            description: 'Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.'
        },
        {
            title: 'Houston - Severe Weather Alert',
            description: 'Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum.'
        }
    ];
    return (
        <ServicesLayout title={'Notifications'}>
            <div className='mt-5'>
                <div className='flex flex-col gap-2'>
                    {

                        notificationsData.map((i,z)=>(

                            <SingleNotifications key={z} title={i.title} description={i.description} />
                        ))
                    }


                </div>

            </div>

        </ServicesLayout>
    )
}

export default Notifications


function SingleNotifications({title='New York - Gas Leak',description='Lorem ipsum dolor sit amet consectetur. Integer eget justo ac varius. Pretium blandit scelerisque eget nulla ut at. Sollicitudin in nisi nisl aliquam. Habitant massa vulputate mauris arcu eros mollis aliquam aenean in.'}) {

    return (

        <div className='bg-white shadow-xl p-4 flex items-center gap-2 cursor-pointer'>
            <div className='p-6 bg-[#f0edfd] max-w-fit rounded-md'>
                <PiBell size={36} className='text-gray-500' />
            </div>
            <div className='max-w-3xl'>
                <h6>{title}</h6>
                <p>{description}</p>

            </div>
            <IoChevronForwardSharp className='ml-auto' size={24} />
        </div>
    )
}