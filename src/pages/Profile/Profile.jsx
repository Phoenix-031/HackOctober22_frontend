import {React,useEffect,useState} from 'react'
import { changeEmail, changeProfilePassword, changeUsername, getUser, updateProfilePic } from '../../api/api.user'
import swal from 'sweetalert'

const Profile = () => {

  const [pass,setPass] = useState("")
  const [cpass,setCpass] = useState("")
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [profileurl,setProfileurl] = useState("")
  // const [image,setImage] = useState("")

  useEffect(() => {
    const getprofile = async () => {
      const profile = await getUser()
      setProfileurl(profile.data.userinfo.profilePic)
    }
    getprofile()
  },[])

  const handleimageUpload = (e) => {
    e.preventDefault()
    document.getElementById('imageupload').click()
  }

  const defaultimgupload = async (e) => {
    const file =e.target.files[0]
    console.log(file)
    const render = new FileReader()
    render.readAsDataURL(file)
    render.onloadend = async() => {
      // setImage(render.result)
      // console.log(render.result)

       const response = await updateProfilePic(render.result)
       console.log(response)

       if(response.data.success) {
        setProfileurl(response.data.profileimg)
       }
    }

  }

  const handlePasswordChange = async (e) => {
    e.preventDefault()
    
    // if(!pass)
    if(pass !== cpass) {
      swal("Passwords don't match")
      setPass("")
      setCpass("")
    } else {
      const response = await changeProfilePassword(pass)

      if(response.data.success) {
        swal("Password changed successfully")
        setPass("")
        setCpass("")
      } else {
        swal("Password changed failed")
        setPass("")
        setCpass("")
      }
    }
  }
  

  const handleUsernameChange = async (e) => {
    e.preventDefault()

    const response = await changeUsername(username)
    console.log(response)

      if(response.data.success) {
        swal("Username changed successfully")
        setUsername("")
      } else {
        swal(response.data.msg)
        setUsername("")
      }
    }

  const handleEmailChange = async (e) => {
    e.preventDefault()

    const response = await changeEmail(email)

      if(response.data.success) {
        swal("Email changed successfully")
        setEmail("")
      } else {
        swal("Email changed failed")
        setEmail("")
      }
    }
  return (
    <div className='w-full flex justify-center items-center'>
       <div className='max-w-xl w-w1 shadow-profileshadow rounded-lg'>
      <form className='flex flex-col gap-6 justify-center items-center border-white p-10 w-full'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <img src={profileurl} alt="profile" className='w-profile h-profile object-cover rounded-full mb-5'/>
          <input type="file" hidden id='imageupload'
          onChange={defaultimgupload}
          />
          
          <button className='text-2xl text-gray-900 font-medium font-nunito bg-green-500 px-10 py-3 capitalize rounded-lg flex gap-4' onClick={handleimageUpload}><i className="fa-solid fa-upload text-2xl"></i>upload</button>
        </div>
        <label htmlFor="username" className='self-start text-xl font-semibold text-white font-nunito'>Change Username</label>
        <div className='flex gap-3 justify-center items-center w-full'>
          <input type="text" id="username" className='h-16 w-full rounded-xl text-xl font-semibold font-nunito pl-3 text-black focus:outline-none'
          value={username}
          onChange = {(e) => {
            setUsername(e.target.value)
          }}
          />
          <button className='bg-green-500 p-5 rounded-xl font-medium text-xl hover:opacity-80'
          onClick={handleUsernameChange}
          >Update</button>
        </div>
        <label htmlFor="email" className='self-start text-xl font-semibold text-white'>Change Email</label>
        <div className='flex gap-3 justify-center items-center w-full'>
          <input type="text" id="email" className='h-16 w-full rounded-xl text-xl font-semibold font-nunito pl-3 text-black focus:outline-none'
          value={email}
          onChange = {(e) => {
            setEmail(e.target.value)
          }}
          />
          <button className='bg-green-500 p-5 rounded-xl font-medium text-xl hover:opacity-80'
          onClick={handleEmailChange}>Update</button>
        </div>
        <hr/>
        <div className='flex justify-center items-center flex-col w-full gap-4'>
        <label htmlFor="password" className='self-start text-xl font-semibold text-white'>Change Password</label>
        <input type="text" id="password" className='h-16 w-full rounded-xl text-xl font-semibold font-nunito pl-3 text-black focus:outline-none' 
        value={cpass}
        onChange={e => setCpass(e.target.value)}
        />
        <label htmlFor="confirmpassword" className='self-start text-xl font-semibold text-white'>Confirm password</label>
        <input type="text" id="confirmpassword" className='h-16 w-full rounded-xl text-xl font-semibold font-nunito pl-3 text-black focus:outline-none' 
        value={pass}
        onChange = {(e) => {
          setPass(e.target.value)
        }}
        />
        <button className='bg-green-500 p-5 rounded-xl font-medium text-xl px-12 hover:opacity-80' onClick={handlePasswordChange}>Update</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Profile