import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './common/logo'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaChevronDown } from "react-icons/fa6";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiListChecksThin } from "react-icons/pi";
import { PiUsersFourThin } from "react-icons/pi";
import { MdOutlineDashboardCustomize } from "react-icons/md";




const SideBar = () => {


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
        {
          name: 'Content management',
          icon: PiListChecksThin,
          href: '/manager/content-management'
        },
        {
          name: 'User management',
          icon: PiUsersFourThin,
          href: '/manager/user/management'
        }
      ]

    } ,
    {
      name: 'Profile',
      href: '/manager/services',
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

    }
    
    


  ]

  return (
    <aside className='rounded-xl min-w-[300px] h-full border p-2 sticky top-4 self-start '>
      <div className='flex justify-center items-center w-full'>
        <Logo />
      </div>

      <ul className='mt-10 w-full'>
        {
          Menu.map((i, z) => (
            <li className='' key={z}>
              <ParentMenu name={i.name} href={i.href} icon={i.icon} subMenu={i.subMenu} />
            </li>
          ))
        }

      </ul>

    </aside>
  )
}

export default SideBar



function ParentMenu({ name, subMenu, href, icon: Icon }) {


  const location = useLocation();

  const isActive = location.pathname === href;


  return (
    <Disclosure >
      <DisclosureButton className=" group flex justify-between items-center w-full rounded-md font-semibold ">
        <p className={` p-2 flex justify-between items-center w-full rounded-md font-semibold  group-data-[open]:bg-primary group-data-[open]:text-white `}>
          <div className='flex items-center gap-2' >
            <Icon size={32} />
            {name}
          </div>
          <FaChevronDown className='group-data-[open]:rotate-180 transition-all duration-300' />
        </p>
      </DisclosureButton>

      <div className='ml-4 my-4'>

        <ChildMenu subMenu={subMenu} />

      </div>



    </Disclosure>
  )
}



function ChildMenu({ subMenu }) {

  return (
    <DisclosurePanel className=" flex flex-col gap-4 font-light border-l">

      {
        subMenu.map((i, z) => (

          <p  key={z} className={`mt-2 pl-2 flex justify-between items-center w-full rounded-md   `}>
            <NavLink to={i.href} className='flex items-center gap-2 whitespace-nowrap' >
              <i.icon size={32} />
                {i.name}
            </NavLink>

          </p>


        ))
      }

      {/* <p className={`mt-2 pl-2 flex justify-between items-center w-full rounded-md   `}>
        <div className='flex items-center gap-2 whitespace-nowrap' >
          <PiListChecksThin size={32} />
          Content Management
        </div>

      </p>
      <p className={`mt-2 pl-2 flex justify-between items-center w-full rounded-md   `}>
        <div className='flex items-center gap-2 whitespace-nowrap' >
          <PiUsersFourThin size={32} />
          User Management
        </div>

      </p> */}




    </DisclosurePanel>


  )
}