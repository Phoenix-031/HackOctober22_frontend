import React from 'react'
import pImg from '../../assets/img1.jpg'

const Profile = () => {
  return (
    <div className='max-w-xl w-w1 shadow-profileshadow rounded-lg'>
      <form className='flex flex-col gap-6 justify-center items-center border-white p-10 w-full'>
        <img src={pImg} alt="profile" className='w-profile h-profile object-cover rounded-full mb-20'/>
        <label htmlFor="username" className='self-start text-xl font-semibold text-white font-nunito'>Change Username</label>
        <div className='flex gap-3 justify-center items-center w-full'>
          <input type="text" id="username" className='h-16 w-full rounded-xl text-xl font-semibold font-nunito pl-3 text-black focus:outline-none'/>
          <button className='bg-green-500 p-5 rounded-xl font-medium text-xl hover:opacity-80'>Update</button>
        </div>
        <label htmlFor="email" className='self-start text-xl font-semibold text-white'>Change Email</label>
        <div className='flex gap-3 justify-center items-center w-full'>
          <input type="text" id="email" className='h-16 w-full rounded-xl text-xl font-semibold font-nunito pl-3 text-black focus:outline-none'/>
          <button className='bg-green-500 p-5 rounded-xl font-medium text-xl hover:opacity-80'>Update</button>
        </div>
        <hr/>
        <div className='flex justify-center items-center flex-col w-full gap-4'>
        <label htmlFor="password" className='self-start text-xl font-semibold text-white'>Change Password</label>
        <input type="text" id="password" className='h-16 w-full rounded-xl text-xl font-semibold font-nunito pl-3 text-black focus:outline-none'/>
        <label htmlFor="confirmpassword" className='self-start text-xl font-semibold text-white'>Confirm password</label>
        <input type="text" id="confirmpassword" className='h-16 w-full rounded-xl text-xl font-semibold font-nunito pl-3 text-black focus:outline-none'/>
        <button className='bg-green-500 p-5 rounded-xl font-medium text-xl px-12 hover:opacity-80'>Update</button>
        </div>
      </form>
    </div>
  )
}

export default Profile