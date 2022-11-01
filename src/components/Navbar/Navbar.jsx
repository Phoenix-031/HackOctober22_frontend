import { useEffect } from 'react'
import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../../api/api.user'
import Dropdown from '../Dropdown/Dropdown'

const Navbar = () => {

  const [open,setOpen] =useState(false)
  const [profileurl,setProfileurl] = useState("")

    const handleClick = () => {
      setOpen(!open)
    }

  useEffect(() => {
    const getuser = async () => {
      if(localStorage.getItem("user") !== null) {
      const response = await getUser()
      // console.log(response)
      setProfileurl(response.data.userinfo.profilePic)
      }
    }

    getuser()
  },[])
    
  
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="nav-logo"> QBank</a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/#courses" className="nav-link">Courses</a>
          </li>
          <li className="nav-item">
            <a href="/#footer" className="nav-link">Contact Us</a>
          </li>
          {/* <div> */}
            {
              localStorage.getItem("user") ? 
              (
                <div className='flex gap-4 justify-center items-center text-2xl font-normal ml-16 text-white'>
                <button>
                   <Link to='/upload' className='hover:text-yellow-500'>Upload</Link>
                 </button>
                {/* <Link to={`/profile/${localStorage.getItem('user')}`}> */}
                  <div>
                    <img className="topImg w-20 h-20 object-cover border-black rounded-full ml-4 cursor-pointer" src={profileurl} alt="profile" onClick={handleClick}/>
                    {
                      open && <Dropdown />
                    }
                  </div>
                {/* </Link> */}
                </div>
             ) : (
          <li className='dynamic-section'>
            <button className="nav-btn">
              <Link to='/login'>LogIn</Link>
            </button>

            <button className="nav-btn">
              <Link to='/register'>Register</Link>
            </button>
          </li>
              )
            }
          {/* </div> */}
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar