import {React,useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { forgotpassword } from '../../api/api.auth';
import LOGO from '../../assets/HGDRY.png'

const Forgot = () => {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await forgotpassword(email);

    if (res.data.success) {
      alert(res.data.data);
      navigate("/login");
    }
  };
    
  return (
    <div className="container flex justify-center items-center flex-col">
        <div>
            <img src={LOGO} alt="weblogo" className='object-cover w-70 h-60 -mt-10 -mb-10' />
        </div>
      <form action="#" onSubmit={handleSubmit}>
        <div className="title">Forgot Password?</div>
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
            className='pl-2 font-normal rounded-xl'
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
  )
}

export default Forgot