import { Link, NavLink } from "react-router-dom"
import logo from '../assets/img/logo.png';
import { MdArrowForward } from "react-icons/md";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import { useEffect, useState } from "react";


import userImg from '../assets/img/user.png'

const NavBar = () => {



    const [user, setUser] = useState(true);



    useEffect(() => { }, [user])

    return (
        <div className='mx-auto container mt-[40px]   ' >
            <nav className='flex justify-between  items-center p-2 '>
                <div className="">
                    <img src={logo} alt="" className="brightness-0 w-40  " />

                </div>
                <div className=''>
                    <ul className='flex gap-8'>
                        <li className="cursor-pointer group " >
                            <p className="nav-link">Pages</p>
                            <Pages />
                        </li>
                        <li className="nav-link">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/">Services</NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/">Patnership</NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/">Contact Us</NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/">About Us</NavLink>
                        </li>

                    </ul>
                </div>

                {
                    user ?
                        <div className="flex gap-4  items-center justify-center">
                            <Profile />
                        </div>
                        :
                        <div className="flex gap-4  items-center justify-center">
                            <Link to={"/login"} onClick={() => { setUser(true) }} className="nav-link">
                                Login
                            </Link>
                            <Link className="btn" to={"/login"}>
                                Register
                            </Link>
                        </div>
                }
            </nav>
        </div>
    )
}

export default NavBar

function Profile() {
    return (
        <div className="">
            <Menu>
                <MenuButton className={`rounded-full  `}>
                    <img src={userImg} alt="" className="w-10 h-10" />
                </MenuButton>
                <MenuItems transition
                    className={'border p-4 rounded-lg bg-white'}
                    anchor="bottom end">
                    <MenuItem>
                        <div className="bg-white">
                            <div className="flex gap-4 items-center">
                                <img src={userImg} alt="" className="w-20 h-20" />
                                <div className="flex flex-col gap-2">
                                    <p className="font-bold">Christophers Nolan</p>
                                    <p>christophersnolan890@gmail.com</p>
                                    <NavLink className={'btn flex justify-center'}>
                                        Dashboard
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                    </MenuItem>

                </MenuItems>
            </Menu>
        </div>
    )
}




function Pages() {
    const menuData = [
        {
            category: 'Auth',
            items: [
                { title: 'Login', path: '/login' },
                { title: 'Sign Up', path: '/register' },
                { title: 'Forgot Password', path: '/forgot-password' },
                { title: 'Set New Password', path: '/set-new-password' },
                { title: 'Verify Code', path: '/verify-code' },
            ],
        },
        {
            category: 'Manager',
            items: [
                { title: 'Dashboard', path: '/manager' },
                { title: 'Content Management', path: '/manager/content-management' },
                { title: 'User Management', path: '/manager/user-management' },
                { title: 'Feed', path: '/manager/feed' },
                { title: 'Weather', path: '/manager/weather' },
                { title: 'Traffic', path: '/manager/traffic' },
                { title: 'GeoFencing', path: '/manager/geo-fencing' },
                { title: 'Delete Account', path: '/manager/delete-account' },
                { title: 'Alerts', path: '/manager/alerts' },
                { title: 'Events', path: '/manager/events' },
                { title: 'News', path: '/manager/news' },
                { title: 'Notifications', path: '/manager/notifications' },
                { title: 'Passwords', path: '/manager/passwords' },
                { title: 'Payment Methods', path: '/manager/payment-methods' },
                { title: 'Payment Plan', path: '/manager/payment-plan' },
                { title: 'GeoFencing', path: '/manager/geo-fencing' },
                { title: 'Social Media Awareness', path: '/manager/socialmedia-awareness' },
                { title: 'Regional Awareness', path: '/manager/regional-awareness' },
            ],
        },
        {
            category: 'Users',
            items: [
                { title: 'Dashboard', path: '/user' },
                { title: 'Feed', path: '/user/feed' },
                { title: 'Weather', path: '/user/weather' },
                { title: 'Traffic', path: '/user/traffic' },
                { title: 'GeoFencing', path: '/user/geo-fencing' },
                { title: 'Delete Account', path: '/user/delete-account' },
                { title: 'Alerts', path: '/user/alerts' },
                { title: 'Events', path: '/user/events' },
                { title: 'News', path: '/user/news' },
                { title: 'Notifications', path: '/user/notifications' },
                { title: 'Passwords', path: '/user/passwords' },
                { title: 'Payment Methods', path: '/user/payment-methods' },
                { title: 'Payment Plan', path: '/user/payment-plan' },
                { title: 'GeoFencing', path: '/user/geo-fencing' },
                { title: 'Social Media Awareness', path: '/user/socialmedia-awareness' },
                { title: 'Regional Awareness', path: '/user/regional-awareness' },
            ],
        },
    ];
    return (
        <div className=" top-24  w-full h-0 bg-primary text-white  group-hover:h-screen  transition-all duration-700 group-hover:block absolute overflow-hidden inset-0 z-[999999999] ">
            <h2 className="text-center ">Pages</h2>
            <div className="max-w-7xl mx-auto mt-10">
                <div className="grid grid-cols-4 gap-8 ">
                    {menuData.map((menu, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <h5 className="text-2xl tracking-[0.5em]">{menu.category}</h5>
                            <div className="flex flex-col gap-4">
                                {menu.items.map((item, subIndex) => (
                                    <div key={subIndex} className="flex justify-between items-center border-b border-white hover:px-4 transition-all duration-300">
                                        <NavLink className="nav-link" to={item.path}>
                                            {item.title}
                                        </NavLink>
                                        <MdArrowForward />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// function Pages() {
//     return (
//         <div className=" top-24  w-full h-0 bg-primary text-white  group-hover:h-[90vh]  transition-all duration-700 group-hover:block absolute overflow-hidden inset-0 z-[999999999] ">
//             <h2 className="text-center ">Pages</h2>
//             <div className="max-w-7xl mx-auto mt-10">
//                 <div className="grid grid-cols-4 gap-8 ">
//                     <div className="flex flex-col gap-4" >
//                         <h5 className="text-2xl tracking-[0.5em]">Auth</h5>
//                         <div className="flex flex-col gap-4">
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/login'}>
//                                     Login
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/register'}>
//                                     Sign Up
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/forgot-password'}>
//                                     Forgot Password
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/set-new-password'}>
//                                     Set New Password
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/verify-code'}>
//                                     Verify Code
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex flex-col gap-4" >
//                         <h5 className="text-2xl tracking-[0.5em]">Manager</h5>
//                         <div className="flex flex-col gap-4">
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/manager'}>
//                                     Dashboard
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/manager/content-management'}>
//                                     Content Management
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/manager/user-management'}>
//                                     User management
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/manager/feed'}>
//                                     Feed
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/manager/weather'}>
//                                     Wheather
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/manager/traffic'}>
//                                     Traffic
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/manager/geo-fencing'}>
//                                     GeoFencing
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/manager/delete-account'}>
//                                     Delete Account
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/manager/alerts'}>
//                                     Alerts
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/manager/events'}>
//                                     Events
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/manager/news'}>
//                                     News
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/manager/notifications'}>
//                                     GeoFencing
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/manager/passwords'}>
//                                     Passwords
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/manager/payment-methods'}>
//                                     GeoFencing
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/manager/payment-plan'}>
//                                     Payment Plan
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/manager/geo-fencing'}>
//                                     GeoFencing
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex flex-col gap-4" >
//                         <h5 className="text-2xl tracking-[0.5em]">Users</h5>
//                         <div className="flex flex-col gap-4">
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/user/feed'}>
//                                     Feed
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/user/weather'}>
//                                     Wheather
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/user/traffic'}>
//                                     Traffic
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/user/geo-fencing'}>
//                                     GeoFencing
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/user/delete-account'}>
//                                     Delete Account
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/user/alerts'}>
//                                     Alerts
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/user/events'}>
//                                     Events
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/user/news'}>
//                                     News
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/user/notifications'}>
//                                     GeoFencing
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/user/passwords'}>
//                                     Passwords
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/user/payment-methods'}>
//                                     GeoFencing
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/user/payment-plan'}>
//                                     Payment Plan
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                             <div className="flex justify-between items-center border-b  border-white hover:px-4 transition-all duration-300 ">
//                                 <NavLink className={'nav-link'} to={'/user/geo-fencing'}>
//                                     GeoFencing
//                                 </NavLink>
//                                 <MdArrowForward />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }