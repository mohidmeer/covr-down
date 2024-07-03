import React from 'react'
import ServicesLayout from '../../layouts/ServicesLayout'
import Input from '../../components/ui/Input'
import { MdSearch } from 'react-icons/md'

const RegionalAwarness = () => {
  return (
    <ServicesLayout title={'Regional Awareness'} >

      <div className='max-w-3xl flex flex-col gap-8'>
        <p className='text-xl p-2'>Note: Simply enter the region of your office</p>

        <form className='relative'>
          <Input name='Search' placeholder={'Enter Region'} />
          <MdSearch size={28} className='text-gray-400 absolute right-5 top-6  ' />
        </form>

        <div className='w-2/3'>
          <p className='text-gray-500'>Regional Awareness allows you insight of online chatter regarding your customized keyword attribution</p>
          <button className='btn !rounded-full w-1/2 mt-5'>
            Save
          </button>
        </div>

      </div>

    </ServicesLayout>
  )
}

export default RegionalAwarness