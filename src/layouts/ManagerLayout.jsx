import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiGlobeThin, PiListChecksThin, PiMapPinAreaThin, PiUserThin } from "react-icons/pi";
import { PiUsersFourThin } from "react-icons/pi";
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
    PiCurrencyDollarSimpleThin
  } from 'react-icons/pi';
import { IoIosNotificationsOutline } from "react-icons/io";



const ManagerLayout = () => {

    const Menu = [

        {
          name: 'Dashboard',
          href: '/manager',
          icon: MdOutlineSpaceDashboard,
          subMenu: [
            {
              name: 'Content management',
              icon: PiListChecksThin,
              href: '/manager/content-management'
            },
            {
              name: 'User management',
              icon: PiUsersFourThin,
              href: '/manager/user-management'
            }
          ]
    
        },
        {
          name: 'Services',
          href: '/manager/services',
          icon: MdOutlineDashboardCustomize,
          subMenu: [
            { name: 'Feed', href: '/manager/feed', icon: PiNewspaperThin },
            { name: 'Weather', href: '/manager/weather', icon: PiCloudThin },
            { name: 'Traffic', href: '/manager/traffic', icon: PiWindThin },
            { name: 'GeoFencing', href: '/manager/geo-fencing', icon: PiMapPinThin },
            
            { name: 'Alerts', href: '/manager/alerts', icon: PiBellThin },
            { name: 'Events', href: '/manager/events', icon: PiCalendarThin },
            { name: 'News', href: '/manager/news', icon: PiNewspaperThin },
            { name: 'Notifications', href: '/manager/notifications', icon: IoIosNotificationsOutline },
           
            
          ]
    
        } ,
        {
          name: 'Profile',
          href: '/manager/services',
          icon: MdOutlineSpaceDashboard,
          subMenu: [
            
            { name: 'My Profile', href: '/manager/profile', icon: PiUserThin },
            { name: 'Social Media Awareness', href: '/manager/socialmedia-awareness', icon: PiGlobeThin },
            { name: 'Regional Awareness', href: '/manager/regional-awareness', icon: PiMapPinAreaThin },
            { name: 'Passwords', href: '/manager/passwords', icon: PiLockThin },
            { name: 'Payment Methods', href: '/manager/payment-methods', icon: PiCreditCardThin },
            { name: 'Subscription', href: '/manager/payment-plan', icon: PiCurrencyDollarSimpleThin },
            { name: 'Delete Account', href: '/manager/delete-account', icon: PiTrashThin },
           
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

export default ManagerLayout;
