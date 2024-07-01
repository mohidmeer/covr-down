import React from 'react';
import logo from '../../assets/img/logo.png';
import Input from '../../components/ui/Input';
import { Link } from 'react-router-dom';
import { FaApple, FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center '>
            <div className='min-w-[400px] '>

                <div className="flex justify-center items-center ">
                    <img src={logo} alt="" className="brightness-0 w-60  " />
                </div>

                <form className='mt-6 flex flex-col gap-4  '>
                    <div className='p-2'>
                        <h1 className='text-4xl font-light '>Login</h1>
                        <p className='mt-2'>Login to access your Golobe account</p>
                    </div>
                    <Input name='Role' placeholder='Manager' />
                    <Input name='Email' placeholder='mohidfauji@gmail.com' />
                    <Input name='password' placeholder='●●●●●●●' />
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center  justify-center'>
                            <div className="flex items-center gap-2 mb-4">
                                <input id="default-checkbox" type="checkbox" value=""
                                    className="w-4 h-4 text-primary bg-gray-100 border-primary/50 rounded focus:ring-primary  focus:ring-2  accent-primary " />
                                <label htmlFor="default-checkbox" className="">Remember Me</label>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 ">
                            <Link to='/forgot-password'>Forgot Password?</Link>
                        </p>
                    </div>

                    <button className='btn'>
                        LOGIN
                    </button>



                    <p className="mt-4"> Don't have an account? <Link to='/register'>Signup</Link> </p>

                    <button className='btn-outline flex justify-center items-center gap-2 mt-4'>
                        <FaApple size={28} />
                        Continue with Apple
                    </button>
                    <button className='btn-outline flex justify-center items-center gap-2'>
                        <FaGoogle size={24} />
                        Continue with Google
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;