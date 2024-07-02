import React from 'react'
import ServicesLayout from '../../layouts/ServicesLayout'
import ProfileImg from '../../assets/img/profilepage.png'
import Input from '../../components/ui/Input'
import TextArea from '../../components/ui/TextArea'

const Profile = () => {

    const profileDetails = {
        name: 'Mohid Meer',
        email: 'mohidfauji@gmail.com',
        timezone: '(GMT)',
        location: 'Muzzaffarabad',
        dateJoined: '10/05/2001',
        bio: 'Lorem ipsum dolor sit amet consectetur. Pretium nec tincidunt lectus ut...',
        socialLinks: {
           linkedIn:  'https://messy-heart-throb.biz', 
           facebook:  'https://messy-heart-throb.biz' ,
           google: 'https://messy-heart-throb.biz' 
        }
      };
  return (
    <ServicesLayout title={'Profile'}>
        <div className='flex w-[300px] border justify-between p-2 bg-white shadow-lg rounded-lg'>
            <img src={ProfileImg} className='w-24 h-24' alt=''  />
            <div className='flex flex-col gap-4 justify-center items-center '>
                <button className='btn-sm w-full'>
                    Edit Profile
                </button>
                <button className='btn-outline-saqure-sm'>
                    Replace Image
                </button>
            </div>
        </div>
        <form className='mt-8'>
                <h6 className='text-xl'>About</h6>
                <div className='grid grid-cols-2 gap-4 mt-10'>
                    <Input name={'Name'} placeholder='mohid' value={profileDetails.name}  />
                    <Input name={'Email'} placeholder='mohid' value={profileDetails.email}  />
                    <Input name={'Location'} placeholder='mohid' value={profileDetails.location}  />
                    <Input name={'Time Zone'} placeholder='mohid' value={profileDetails.timezone}  />
                    <Input name={'Date Joined'} placeholder='mohid' value={profileDetails.dateJoined}  />
                    <TextArea name={'Bio'} className='col-span-2' value={profileDetails.bio} />
                    <Input name={'Linkden'} placeholder='mohid' value={profileDetails.socialLinks.linkedIn}  />
                    <Input name={'Facebook'} placeholder='mohid' value={profileDetails.socialLinks.facebook}  />
                    <Input name={'Google'} placeholder='mohid' value={profileDetails.socialLinks.google}  />
                </div>


            </form>

    </ServicesLayout>
  )
}

export default Profile