import {React,useState} from 'react'
// import '../Login/Login.css'
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from '../../api/api.auth';
import LOGO from '../../assets/HGDRY.png'



const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
  e.preventDefault();

  const res = await loginUser(email, password);
  if (res.data.success) {
    localStorage.setItem("user",res.data.accessToken)
    // console.log(res.data)
    // toast.error("something went wrong")
    navigate("/");
  } else {
    // toast.error("something went wrong")
    alert("something went wrong");
  }

  // try {
  //   if (res.data.success) {
  //   localStorage.setItem("user",res.data.accessToken)
  //   navigate("/");
  // }
  // } catch (err) {
  //   alert(err)
  //   console.log(res.data)
  // }
  };
  
  
  return (
    <div className="container flex justify-center items-center flex-col w-w1">
        <div>
            <img src={LOGO} alt="weblogo" className='object-cover w-70 h-60 -mt-10 -mb-10' />
        </div>
      <form action="#" onSubmit={handleLogin} className='w-full px-10 flex flex-col'>
        <div className="title">Login</div>
        <div className="input-box underline">
          <input
            type="text"
            placeholder="Username or Email"
            value={email}
            onChange={(e) => {
            setEmail(e.target.value);
          }}
            id="getEmail"
            required
            className='pl-2 font-semibold rounded-xl'
          />
          <div className="underline"></div>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
            setPassword(e.target.value);
          }}
            id="getPass"
            required
            className='pl-2 font-semibold rounded-xl'
          />
          <div className="underline"></div>
        </div>
      <div className="text self-end text-lg pl-2">
        <Link to='/forgotpassword' className='self-start'>Forgot Password?</Link>
      </div>
        <div className="input-box">
          <button type='submit' className='flex justify-center items-center w-full h-max p-4 bg-yellowtheme font-serif font-semibold rounded-xl text-xl'>Log In</button>
        </div>
      </form>
      {/* <div className="option">or Connect With Social Media</div>
      <div className="twitter flex justify-center w-max">
        <a href="/"><i className="fab fa-twitter"></i>Sign in With Twitter</a>
      </div>
      <div className="facebook">
        <a href="/"><i className="fab fa-facebook-f"></i>Sign in With Facebook</a>
      </div> */}
      <span className="text-xl font-semibold text-white input-box">
          New here?
          <Link to="/register" className="ml-1 font-semibold text-sky-900 text-xl">
            Create an account
          </Link>
        </span>
    </div>
  )
}

export default Login