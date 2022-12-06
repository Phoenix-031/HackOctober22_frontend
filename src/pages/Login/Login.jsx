import {React,useState} from 'react'
// import '../Login/Login.css'
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from '../../api/api.auth';
import LOGO from '../../assets/HGDRY.png'
import swal from 'sweetalert'
import LoaderComponent from '../../components/LoaderComponent';



const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [login,setLogin] = useState(false);
  const navigate = useNavigate();


  const handleLogin = async (e) => {
  e.preventDefault();
  setLogin(true)

  const res = await loginUser(email, password);
  if (res.data.success) {
    setLogin(false)
    localStorage.setItem("user",res.data.accessToken)
    navigate("/");
  } else {
    // toast.error("something went wrong")
    // console.log(res.data);
    swal(res.data.error);
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

  <div className='w-full bg-inherit  h-screen flex justify-center items-center shadow-lg'>
      <div className=' h-3/4 rounded-2xl flex flex-col gap-4 justify-start items-center'>

       <div>
            <img src={LOGO} alt="weblogo" className='' />
        </div>
      <form action="#" onSubmit={handleLogin} className=' px-10 w-w1  h-full flex flex-col gap-6 pt-7'>
        <div className="text-5xl font-nunito text-yellowtheme font-semibold w-full text-center">Login</div>
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
            className="pl-4 w-full h-20 text-xl focus:outline-none font-normal rounded-xl font-nunito"
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
            className="pl-4 w-full h-20 text-xl focus:outline-none font-normal rounded-xl font-nunito"
          />
          <div className="underline"></div>
        </div>
      <div className="text self-end text-lg pl-2">
        <Link to='/forgotpassword' className='self-start'>Forgot Password?</Link>
      </div>
        <div className="input-box flex justify-center items-center ">
         {
          login ? (<LoaderComponent />) : (
             <button type='submit' className='flex justify-center items-center w-full h-max p-4 py-6 bg-yellowtheme font-serif font-semibold rounded-xl text-xl'>Log In</button>
          )
         }
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
    </div>
    
    // <div className='flex justify-center items-center'>
    //   <div className="container flex justify-center items-center flex-col w-full">
 
    // </div>
    // </div>
  )
}

export default Login