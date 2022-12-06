import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

const Dropdown = () => {

    const navigate = useNavigate()
    
  return (
    <div className='dropdown z-10 absolute top-40 right-24 p-5 bg-popup rounded-xl max-w-w1 px-12'>
        <motion.ul className='flex flex-col gap-6 text-2xl font-semibold'
                    initial={{opacity:0,translateY:-150}}
            animate={{opacity:1,translateY:0}}
            transition={{
                duration:0.4,
                delay:0.2,
                ease:'easeInOut'
            }}
        >
            <Link to={`/profile/${localStorage.getItem('user')}`}>
                <motion.li className='flex gap-4 justify-center items-center cursor-pointer  hover:text-yellow-500'

                >
                <i className="fa-solid fa-user "></i>
                Profile
                </motion.li>
            </Link>
            <motion.li className='flex gap-4 justify-center items-center cursor-pointer  hover:text-yellow-500' onClick={() => {
                localStorage.removeItem("user");
                navigate('/')
            }}

            >
                <i className="fa-solid fa-right-from-bracket"></i>
                Logout
            </motion.li>
        </motion.ul>
    </div>
  )
}

export default Dropdown