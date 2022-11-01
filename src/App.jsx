import React, { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Forgot from './pages/Forgotpass/Forgot';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Reset from './pages/Resetpass/Reset';
import './pages/Login/Login.css'
import './pages/Register/Register.css'
import './components/Navbar/nav.css'
import './components/Footer/footer.css'
// import  './components/Hero/hero.css'
import './components/Courses/course.css'
// import './pages/UploadFile/upload.css'
import './dist/style.css'
// import './components/About/About.css'
import VerifyUser from './pages/Verify/Verifyuser';
import UpoadFile from './pages/UploadFile/UpoadFile';
import { useEffect } from 'react';
import Profile from './pages/Profile/Profile';

function App() {

  const [user,setUser] = useState(null)

  useEffect(() => {
    setUser(localStorage.getItem("user"))
  },[])
  
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/login' element={user? <Home/> :<Login />}/>
      <Route exact path='/register' element={user? <Home/> : <Register />}/>
      <Route exact path='/resetpassword/:resetToken' element={<Reset />}/>
      <Route exact path="/verify/:token" element={<VerifyUser />} />
      <Route exact path='/forgotpassword' element={<Forgot />}/>
      <Route exact path='/profile/:profileId' element={user? <Profile /> : <Home/>} />
      <Route exact path='/upload' element={user? <UpoadFile /> : <Home/>} />
    </Routes>
    </>
  );
}

export default App;
