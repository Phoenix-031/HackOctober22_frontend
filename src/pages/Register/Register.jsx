import {React,useState} from 'react'
// import './Register.css'
import { useNavigate,Link } from 'react-router-dom';
import { registerUser } from '../../api/api.auth';
import LOGO from '../../assets/HGDRY.png'


const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser(username, email, password);
    console.log(res);
    if (res.data.success) {
      alert("Please verify your email before logging in")
      navigate("/login");
    } else {
      alert(res.data.msg)
      setUsername("")
      setEmail("")
    }
  };

    
    
  return (
    <div className='flex justify-center items-center'>
      <div className="container flex justify-center items-center flex-col">
        <div>
            <img src={LOGO} alt="weblogo" className='object-cover w-70 h-60 -mt-10 -mb-10' />
        </div>
       <form action="#" onSubmit={handleSubmit} className=' px-10 w-w1'>
        <div className="title">SignUp</div>
        <div className="input-box underline">
          <input type="text" placeholder="Username" id="getName" required 
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="pl-4 font-normal rounded-xl font-nunito"
          />
          <div className="underline"></div>
        </div>
        <div className="input-box underline">
          <input type="text" placeholder="Email" id="getName" required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="pl-4 font-normal rounded-xl font-nunito"
          />
          <div className="underline"></div>
        </div>
        <div className="input-box underline">
          <input type="text" placeholder="Password" id="getPassword" required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="pl-4 font-normal rounded-xl font-nunito"
           />
          <div className="underline"></div>
        </div>
       
        <div className="input-box button">
            <button type='Submit' className='flex justify-center items-center w-full h-max p-4 bg-yellowtheme font-serif rounded-xl text-xl font-semibold'>Register</button>
        </div>
       </form>
       <div className="text">
        <span className='text-xl font-semibold text-white'>Already have an account? <Link to='/login' className='log font-semibold text-xl'>Log in</Link></span>
      </div>
     </div>
    </div>
  )
}

export default Register