import {React,useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { registerUser } from '../../api/api.auth';
import LOGO from '../../assets/HGDRY.png'
import swal from 'sweetalert'
import LoaderComponent from '../../components/LoaderComponent';


const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registering,setRegistering] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegistering(true)
    
    const res = await registerUser(username, email, password);
    console.log(res);
    if (res.data.success) {
      setRegistering(false)
      swal("Please verify your email before logging in")
      navigate("/login");
    } else {
      swal(res.data.msg)
      setUsername("")
      setEmail("")
    }
  };

    
    
  return (

    <div className='w-full bg-inherit  h-screen flex justify-center items-center shadow-lg'>
      <div className=' h-3/4 rounded-2xl flex flex-col gap-4 justify-start items-center'>

        <div>
            <img src={LOGO} alt="weblogo" className='' />
        </div>
        
        <form action="#" onSubmit={handleSubmit} className=' px-10 w-w1  h-full flex flex-col gap-6 pt-7'>
        <div className="text-5xl font-nunito text-yellowtheme font-semibold w-full text-center" >SignUp</div>
        <div className="input-box underline">
          <input type="text" placeholder="Username" id="getName" required 
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="pl-4 w-full h-20 text-xl focus:outline-none font-normal rounded-xl font-nunito"
          />
          <div className="underline"></div>
        </div>
        <div className="input-box underline">
          <input type="text" placeholder="Email" id="getName" required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="pl-4 w-full h-20 text-xl focus:outline-none font-normal rounded-xl font-nunito"
          />
          <div className="underline"></div>
        </div>
        <div className="input-box underline">
          <input type="text" placeholder="Password" id="getPassword" required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="pl-4 w-full h-20 text-xl focus:outline-none font-normal rounded-xl font-nunito"
           />
          <div className="underline"></div>
        </div>
       
        <div className="input-box button flex justify-center items-center">
            {
              registering ? (<LoaderComponent />) : (
                <button type='Submit' className='flex justify-center items-center w-full h-max p-4 py-6 bg-yellowtheme font-serif rounded-xl text-xl font-semibold'>Register</button>
              )
            }
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