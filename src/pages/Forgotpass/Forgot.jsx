import {React,useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { forgotpassword } from '../../api/api.auth';
import LOGO from '../../assets/HGDRY.png'
import swal from 'sweetalert';

const Forgot = () => {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await forgotpassword(email);

    if (res.data.success) {
      swal(res.data.data);
      navigate("/login");
    }
  };
    
  return (
    <div className='w-full bg-inherit  h-screen flex justify-center items-center shadow-lg'>
      <div className=' h-3/4 rounded-2xl flex flex-col gap-4 justify-start items-center'>
        <div>
            <img src={LOGO} alt="weblogo" className='' />
        </div>
      <form action="#" onSubmit={handleSubmit} className=' px-10 w-w1  h-full flex flex-col gap-6 pt-7'>
        <div className="text-5xl font-nunito text-yellowtheme font-semibold w-full text-center">Forgot Password?</div>
        <div className="input-box underline">
          <input
            type="text"
            placeholder="Enter Your Email"
            id="getEmail"
            value={email}
            onChange={(e) => {
            setEmail(e.target.value);
          }}
            required
            className="pl-4 w-full h-20 text-xl focus:outline-none font-normal rounded-xl font-nunito"
          />
          <div className="underline"></div>
        </div>

        <div className="input-box button">
            <button type='submit' className='p-4 rounded-lg bg-green-600 font-bold text-white text-serif w-full tracking-widest flex justify-center items-center text-xl py-6'>Send Email</button>
        </div>
        <span className="font-semibold text-xl text-white">
          Remember Your Password?
          <Link to="/login" className="text-2xl pl-2 font-bold text-blue-800 ml-1">
            Login
          </Link>
        </span>
      </form>
    </div>
    </div>
  )
}

export default Forgot