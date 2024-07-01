import React from 'react';
import logo from '../../assets/img/logo.png';
import Input from '../../components/ui/Input';
import { Link } from 'react-router-dom';
import { FaApple, FaGoogle } from 'react-icons/fa';

const VerifyCode = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center '>
            <div className='min-w-[400px] '>
                <div className="flex justify-center items-center ">
                    <img src={logo} alt="" className="brightness-0 w-60  " />
                </div>

                <form className='mt-6 flex flex-col gap-4  '>
                    <div className='p-2'>
                        <h1 className='text-4xl font-light '>Verify Code</h1>
                        <p className='mt-2'>Enter the verification code sent to your email</p>
                    </div>
                    <Input name='Verification Code' placeholder='Enter your code' />
                    
                    <button className='btn'>
                        VERIFY CODE
                    </button>

                    <p>Didn't receive a code? <Link to='/resend-code'>Resend Code</Link> </p>

                    <button className='btn-outline flex justify-center items-center gap-2'>
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

export default VerifyCode;