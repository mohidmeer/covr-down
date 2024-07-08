import React from 'react'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { MdDeleteSweep, MdEdit } from 'react-icons/md'

import userImg from '../../assets/img/user.png'
import { VscSettings } from "react-icons/vsc";

const ContentManagement = () => {
    return (
        <div className='h-screen flex flex-col gap-4 w-full overflow-hidden'>
            <div className=''>
                <TabGroup>
                    <TabList className={'flex flex-row flex-wrap sm:flex-row gap-6 font-semibold '}>
                        <Tab className={'data-[selected]:text-primary data-[selected]:border-primary border-b-2 border-transparent  outline-none'}>Feed</Tab>
                        <Tab className={'data-[selected]:text-primary data-[selected]:border-primary border-b-2 border-transparent  outline-none'}>News</Tab>
                        <Tab className={'data-[selected]:text-primary data-[selected]:border-primary border-b-2 border-transparent  outline-none'}>Alert</Tab>
                        <Tab className={'data-[selected]:text-primary data-[selected]:border-primary border-b-2 border-transparent  outline-none'}>Events</Tab>
                        <button className='btn ml-auto flex gap-2'>
                            Apply Filteroia 
                            <VscSettings size={24}/>
                        </button>

                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Feed />
                        </TabPanel>
                        <TabPanel>
                            <News />
                        </TabPanel>
                        <TabPanel>
                        <Alerts/>
                        </TabPanel>
                        <TabPanel>
                        <Events/>
                        </TabPanel>

                    </TabPanels>
                </TabGroup>
            </div>



        </div>
    )
}

export default ContentManagement




function Feed() {

    const tableData =
        [
            {
                "user": "John Doe",
                "email": "johndoe@gmail.com",
                "views": 123,
                "reports": 2,
                "dateTime": "2024-07-01 10:30",
                "likes": 45,
                "comments": 10,
                "actions": "View",
                "date": "2024-07-01",
                "time": "10:30"
            },
            {
                "user": "Jane Smith",
                "email": "janesmith@gmail.com",
                "views": 456,
                "reports": 0,
                "dateTime": "2024-07-02 12:15",
                "likes": 78,
                "comments": 20,
                "actions": "Edit",
                "date": "2024-07-02",
                "time": "12:15"
            },
            {
                "user": "Alice Johnson",
                "email": "alicejohnson@gmail.com",
                "views": 789,
                "reports": 1,
                "dateTime": "2024-07-03 14:45",
                "likes": 32,
                "comments": 15,
                "actions": "Delete",
                "date": "2024-07-03",
                "time": "14:45"
            },
            {
                "user": "Bob Brown",
                "email": "bobbrown@gmail.com",
                "views": 321,
                "reports": 3,
                "dateTime": "2024-07-04 16:30",
                "likes": 50,
                "comments": 25,
                "actions": "View",
                "date": "2024-07-04",
                "time": "16:30"
            },
            {
                "user": "Carol White",
                "email": "carolwhite@gmail.com",
                "views": 654,
                "reports": 0,
                "dateTime": "2024-07-05 18:00",
                "likes": 60,
                "comments": 5,
                "actions": "Edit",
                "date": "2024-07-05",
                "time": "18:00"
            }

        ];

    return (
        <div className='mt-10 overflow-x-auto rounded-xl relative max-w-4xl'>
 
                <table className="w-full text-sm text-left whitespace-nowrap">
                    <thead className="text-xs uppercase bg-gray-100 rounded-md">
                        <tr>
                            <th scope="col" className="px-6 py-3">No</th>
                            <th scope="col" className="px-6 py-3">User</th>
                            <th scope="col" className="px-6 py-3">Views</th>
                            <th scope="col" className="px-6 py-3">Date and Time</th>
                            <th scope="col" className="px-6 py-3">Likes</th>
                            <th scope="col" className="px-6 py-3">Comments</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} shadow-lg rounded-lg`} >

                                <td className="px-6 py-4 font-medium">{index + 1}</td>

                                <td className="px-6 py-4 font-bold flex items-center justify-start gap-2">
                                    <img src={userImg} className='w-10 h-10 rounded-full' alt='' />
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-bold'>{row.user}</p>
                                        <p>{row.email}</p>

                                    </div>
                                </td>

                                <td className="px-6 py-4">{row.views}</td>
                                <td className="px-6 py-4">{row.date}<br />{row.time}</td>
                                <td className="px-6 py-4">{row.likes}</td>
                                <td className="px-6 py-4">{row.comments}</td>
                                <td className="h-full w-full py-6 px-4  flex items-center justify-center  gap-4">

                                    <button className='btn font-light'>View</button>

                                    <button>
                                        <MdEdit size={24} className='text-secondary' />
                                    </button>


                                    <button>
                                        <MdDeleteSweep size={24} className='text-secondary' />
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
   
    )
}


function News() {


    const tableData = [
        {
            news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            views: 123,
            reports: 2,
            date: '2024-07-01',
            time: '10:30',
            actions: 'View'
        },
        {
            news: 'Pellentesque habitant morbi tristique senectus ',
            views: 456,
            reports: 0,
            date: '2024-07-02',
            time: '12:15',
            actions: 'Edit'
        },
        {
            news: 'Nulla tincidunt augue quis neque aliquam, id vehicula lorem interdum. ',
            views: 789,
            reports: 1,
            date: '2024-07-03',
            time: '14:45',
            actions: 'Delete'
        },
        {
            news: 'Vestibulum ante ipsum primis in faucibus orci luctus et .',
            views: 321,
            reports: 3,
            date: '2024-07-04',
            time: '16:30',
            actions: 'View'
        },
        {
            news: 'Etiam lacinia neque id nunc tincidunt, in commodo nisl ultrices. ',
            views: 654,
            reports: 0,
            date: '2024-07-05',
            time: '18:00',
            actions: 'Edit'
        }
    ];

    return (

        <div className='mt-10'>
            <div className="overflow-x-auto rounded-xl">
                <table className="w-full text-sm text-left ">
                    <thead className="text-xs uppercase bg-gray-100 rounded-md">
                        <tr>
                            <th scope="col" className="px-6 py-3">No</th>
                            <th scope="col" className="px-6 py-3">News</th>
                            <th scope="col" className="px-6 py-3">Views</th>
                            <th scope="col" className="px-6 py-3">Reports</th>
                            <th scope="col" className="px-6 py-3">Date &amp; Time</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} shadow-lg rounded-lg`}>

                                <td className="px-6 py-4 font-medium">{index + 1}</td>

                                <td className="px-6 py-4 font-bold flex items-center justify-start gap-2">
                                    <p src='' className='w-10 h-10 rounded-md bg-gray-300' alt='' />
                                    <p className="font-bold w-[200px]">{row.news}</p>
                                </td>

                                <td className="px-6 py-4">{row.views}</td>
                                <td className="px-6 py-4">{row.reports}</td>
                                <td className="px-6 py-4">{row.date} <br /> {row.time}</td>

                                <td className="px-6 py-4 flex items-center gap-4">

                                    <button>
                                        <MdEdit size={24} className='text-secondary' />
                                    </button>
                                    <button>
                                        <MdDeleteSweep size={24} className='text-secondary' />
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    )
}


function Alerts() {

    return (

        <div className='h-[60vh] flex-col flex justify-center items-center text-primary  animate-pulse'>
            <h2>No Alerts</h2>
        </div>
    )


}

function Events() {


    return (
        <div className='h-[60vh] flex-col flex justify-center items-center text-primary  animate-pulse'>
            <h2>No Events</h2>
        </div>

    )


}


