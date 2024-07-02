import React from 'react'

import logoImg from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom'

const Logo = () => {
    return (
        <NavLink>
            <img src={logoImg} alt='' className='w-[200px] brightness-0 grayscale-0' />
        </NavLink>
    )
}

export default Logo