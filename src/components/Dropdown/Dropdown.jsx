import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Dropdown = () => {

    const navigate = useNavigate()
    
  return (
    <div className='dropdown z-10 absolute top-40 right-24 p-5 bg-blue-700 rounded-xl max-w-w1 px-12'>
        <ul className='flex flex-col gap-6 text-2xl font-semibold'>
            <Link to={`/profile/${localStorage.getItem('user')}`}><li className='flex gap-4 justify-center items-center cursor-pointer hover:opacity-60'>
                <i class="fa-solid fa-user"></i>
                Profile
                </li>
            </Link>
            <li className='flex gap-4 justify-center items-center cursor-pointer hover:opacity-60' onClick={() => {
                localStorage.removeItem("user");
                navigate('/')
            }}>
                <i class="fa-solid fa-right-from-bracket"></i>
                Logout
            </li>
        </ul>
    </div>
  )
}

export default Dropdown