import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Alerts = () => {

    const alertsData = [
        {
            image: 'https://via.placeholder.com/300',
            title: 'Severe Thunderstorm Warning',
            date: '2024-08-15',
            location: 'Madison Square Garden'
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Flood Alert',
            date: '2024-09-10',
            location: 'Modern Art Museum'
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Heatwave Advisory',
            date: '2024-10-20',
            location: 'Silicon Valley Convention Center'
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Heavy Snowfall Warning',
            date: '2024-11-05',
            location: 'Central Park'
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Hurricane Watch',
            date: '2024-12-01',
            location: 'Hollywood Boulevard'
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Air Quality Alert',
            date: '2024-07-25',
            location: 'Downtown'
        }
    ];
  return (
    <div className='flex flex-col gap-4 w-full'>
            <div className='f'>
                <h5>Alerts</h5>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {alertsData.map((alert, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={alert.image} alt={alert.title} className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h2 className="font-bold text-lg mb-2">{alert.title}</h2>
                        <div className="flex items-center text-gray-700 mb-1">
                            <FaCalendarAlt className="mr-2" />
                            <span>{alert.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <MdLocationOn className="mr-2" />
                            <span>{alert.location}</span>
                        </div>
                        <button className='btn !py-2 w-full mt-2'>
                            See Details
                        </button>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Alerts