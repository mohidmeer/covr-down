import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './common/logo'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaChevronDown } from "react-icons/fa6";
import { MdClose, MdMenu } from 'react-icons/md';




const SideBar = ({ Menu }) => {
  const [activeMenu, setActiveMenu] = useState(null); // State to track active menu item


  const handleMenuItemClick = (index) => {
    setActiveMenu(index === activeMenu ? null : index); // Toggle active menu state
  };


  const mobileMenuRoutes = Menu.flatMap(item => item.subMenu);

  return (
    <>
      <MobileScreens menu={mobileMenuRoutes} />
      <aside className='hidden lg:block rounded-xl md:min-h-[280px] lg:min-w-[300px] h-full border p-2 sticky top-4 self-start'>
        <div className='flex justify-center items-center  sm:w-full w-[150px]'>
          <Logo />
        </div>

        <ul className='mt-10 w-full'>
          {Menu.map((item, index) => (
            <li key={index} onClick={() => handleMenuItemClick(index)} className=''>
              <ParentMenu
                name={item.name}
                href={item.href}
                icon={item.icon}
                subMenu={item.subMenu}
                isActive={index === activeMenu} // Pass isActive prop based on active state
              />
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default SideBar;



function ParentMenu({ name, subMenu, href, icon: Icon }) {
  const [isOpen, setIsOpen] = useState(false); // State to manage open/close state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton
            onClick={toggleMenu}
            className={`px-4 py-2 group flex justify-between items-center w-full rounded-md font-semibold ${isOpen ? 'bg-primary text-white' : ''}`}
          >
            <div className='flex items-center gap-2'>
              <Icon size={32} />
              {name}
            </div>
            <FaChevronDown className={`transform ${isOpen ? 'rotate-180' : ''} transition-all duration-300`} />
          </DisclosureButton>

          {/* {isOpen && ( */}
          <div className='ml-4 my-4'>
            <ChildMenu subMenu={subMenu} />
          </div>
          {/* )} */}
        </>
      )}
    </Disclosure>
  );
}


function ChildMenu({ subMenu }) {


  return (
    <DisclosurePanel className=" flex flex-col gap-4 font-light border-l">

      {
        subMenu.map((i, z) => (

          <p key={z} className={`mt-2  flex justify-between items-center w-full rounded-md   `}>
            <NavLink to={i.href}
              className={({ isActive }) =>
                `flex items-center gap-2 whitespace-nowrap border-l border-transparent  pl-2 ${isActive ? '!border-primary text-primary' : ''}`
              }

            >
              <i.icon size={32} />
              {i.name}
            </NavLink>

          </p>
        ))
      }




    </DisclosurePanel>
  )
}



function MobileScreens({ menu }) {

  // const [open, setOpen] = useState(false);

  return (


    <>




      <aside className='block lg:hidden rounded-xl px-4  border p-2 sticky top-30 self-start overflow-hidden bg-white z-10'>
        {/* <div>

          {

            open ?

              <MdClose size={28} className="" onClick={() => { setOpen(!open) }} />
              :
              <MdMenu size={28} className="" onClick={() => { setOpen(!open) }} />

          }
        </div> */}

        <ul className={`flex flex-col gap-4 h-full overflow-hidden transition-all`}>
          {
            menu.map((i) => (
              <li key={i.href}>
                <NavLink to={i.href}
                  className={({ isActive }) =>
                    `flex items-center gap-2 whitespace-nowrap rounded-md  p-2 ${isActive ? '!bg-primary text-white' : ''}`
                  }

                >
                  <i.icon size={32} />
                </NavLink>

              </li>
            ))
          }
        </ul>

      </aside></>



  )


}