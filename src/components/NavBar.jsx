import { Link, NavLink } from "react-router-dom"
import logo from '../assets/img/logo.png';

const NavBar = () => {
    return (
        <div className='mx-auto container mt-[40px]  ' >
            <nav className='flex justify-between  items-center p-2 '>
                <div className="">
                    <img src={logo} alt="" className="brightness-0 w-40  " />

                </div>
                <div className=''>
                    <ul className='flex gap-8'>
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

                <div className="flex gap-4     items-center justify-center">
                    <Link to={"/login"} className="nav-link">
                        Login
                    </Link>
                    <Link className="btn" to={"/login"}>
                        Register
                    </Link>

                </div>
            </nav>
        </div>
    )
}

export default NavBar