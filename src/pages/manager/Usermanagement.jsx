import React from 'react'
import Input from '../../components/ui/Input'
import { MdDelete, MdEdit } from 'react-icons/md';

const Usermanagement = () => {

    const tableData = [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@gmail.com',
          designation: 'Software Engineer',
          status: 'Active',
          actions: 'View/Edit'
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'janesmith@gmail.com',
          designation: 'Product Manager',
          status: 'Inactive',
          actions: 'View/Edit'
        },
        {
          id: 3,
          name: 'Alice Johnson',
          email: 'alicejohnson@gmail.com',
          designation: 'UI/UX Designer',
          status: 'Active',
          actions: 'View/Edit'
        },
        {
          id: 4,
          name: 'Bob Brown',
          email: 'bobbrown@gmail.com',
          designation: 'Marketing Specialist',
          status: 'Active',
          actions: 'View/Edit'
        },
        {
          id: 5,
          name: 'Carol White',
          email: 'carolwhite@gmail.com',
          designation: 'Project Manager',
          status: 'Active',
          actions: 'View/Edit'
        }
      ];
  return (
    <div className='h-screen flex flex-col gap-4 w-full overflow-hidden'>
            <div className='flex sm:flex-row flex-col justify-between  overflow-hidden items-center   '>
                <h5>Staff</h5>
                <div className='md:w-1/3 md:ml-auto w-full'>
                    <Input name={'Search'} placeholder="Search for user or staff" />
                </div>
                <button className='btn w-full md:w-fit  '>
                    Add User
                </button>
            </div>
            <div className='mt-10'>
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full text-sm text-left whitespace-nowrap">
          <thead className="text-xs uppercase bg-gray-100 rounded-md">
            <tr>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Designation</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} shadow-lg rounded-lg`}>
                <td className="px-6 py-4 font-medium">{row.id}</td>
                <td className="px-6 py-4">{row.name}</td>
                <td className="px-6 py-4">{row.email}</td>
                <td className="px-6 py-4">{row.designation}</td>
                <td className="px-6 py-4 "> <p className='bg-success/70 text-center rounded-full  text-white'>{row.status}</p></td>
                <td className="px-6 py-4 flex items-center gap-4">
                  <button className='btn font-light'>View</button>
                  <button className=''>
                    <MdEdit size={20} className='text-secondary' />
                  </button>
                  <button className=''>
                    <MdDelete size={20} className='text-secondary' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Usermanagement