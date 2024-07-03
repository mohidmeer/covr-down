import React from 'react'
import ServicesLayout from '../../layouts/ServicesLayout'
import Input from '../../components/ui/Input'

const Passwords = () => {
  return (
    <ServicesLayout title={'Passwords'}>
      <div className='mt-5'>
        <form className='max-w-4xl flex flex-col gap-10'>
          <Input placeholder={''} name={'Current Password'} value='sadasdasdasd' type='password' />
          <Input placeholder={''} name={'Password'} value='sadasdasdasd' type='password' />
          <Input placeholder={''} name={'Repeat Password'} value='sadasdasdasd' type='password' />
        </form>
        <ul className='mt-5 ml-5'>
          <li>Minimum 8 characters</li>
          <li>At least 1 uppercase letter</li>
          <li>At least 1 lowercase letter</li>
          <li>At least 1 number</li>
          <li>At least 1 special character</li>
        </ul>

      </div>

    </ServicesLayout>
  )
}

export default Passwords