import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import {  MdOutlineSpaceDashboard, } from "react-icons/md";
import { PiCurrencyDollarSimpleThin, PiGlobeThin, PiMapPinAreaThin, PiUserThin,  } from "react-icons/pi";

import { MdOutlineDashboardCustomize } from "react-icons/md";
import { 
    PiNewspaperThin, 
    PiBellThin, 
    PiCalendarThin, 
    PiCloudThin, 
    PiMapPinThin, 
    PiLockThin, 
    PiCreditCardThin, 
    PiTrashThin, 
    PiWindThin, 
  } from 'react-icons/pi';
import { IoIosNotificationsOutline } from "react-icons/io";


const UserLayout = () => {

    const Menu = [

        {
          name: 'Services',
          href: '/user/services',
          icon: MdOutlineDashboardCustomize,
          subMenu: [
            { name: 'Feed', href: '/user/feed', icon: PiNewspaperThin },
            { name: 'Weather', href: '/user/weather', icon: PiCloudThin },
            { name: 'Traffic', href: '/user/traffic', icon: PiWindThin },
            { name: 'GeoFencing', href: '/user/geo-fencing', icon: PiMapPinThin },
            { name: 'Alerts', href: '/user/alerts', icon: PiBellThin },
            { name: 'Events', href: '/user/events', icon: PiCalendarThin },
            { name: 'News', href: '/user/news', icon: PiNewspaperThin },
            { name: 'Notifications', href: '/user/notifications', icon: IoIosNotificationsOutline },
           
            
          ]
    
        } ,
        {
          name: 'Profile',
          href: '/user/services',
          icon: MdOutlineSpaceDashboard,
          subMenu: [
            { name: 'My Profile', href: '/user/profile', icon: PiUserThin },
            { name: 'Social Media Awareness', href: '/user/socialmedia-awareness', icon: PiGlobeThin },
            { name: 'Regional Awareness', href: '/user/regional-awareness', icon: PiMapPinAreaThin },
            { name: 'Passwords', href: '/user/passwords', icon: PiLockThin },
            { name: 'Payment Methods', href: '/user/payment-methods', icon: PiCreditCardThin },
            { name: 'Subscription ', href: '/user/payment-plan', icon: PiCurrencyDollarSimpleThin },
            { name: 'Delete Account', href: '/user/delete-account', icon: PiTrashThin },
          ]
    
        }
    
      ]
    return (
        <div>
            <NavBar />
            <main  className="container mx-auto flex gap-10 mt-20">
                <SideBar Menu={Menu} />
                <Outlet/>
            </main>
        </div>
    );
};

export default UserLayout;
