import {React,useState} from 'react'
import { useNavigate ,useParams} from 'react-router-dom';
import { resetpassword } from '../../api/api.auth';
import LOGO from '../../assets/HGDRY.png'

const Reset = () => {

  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const urlparams = useParams();
  const navigate = useNavigate();

  // console.log(JSON.stringify(urlparams));

  const handleReset = async (e) => {
    e.preventDefault();

    const response = await resetpassword(password, urlparams.resetToken);
    if (response.data.success) {
      // alert(response.data.msg);
      navigate("/login");
    }
  };
    
  return (
    <div class="container flex justify-center items-center flex-col">
        <div>
            <img src={LOGO} alt="weblogo" className='object-cover w-40 h-40 -mt-10 -mb-10' />
        </div>
      <form action="#" onSubmit={handleReset}>
        <div class="title">Reset Password</div>
        <div class="input-box underline">
          <input
            type="text"
            placeholder="Enter Your New Password"
            id="getPass"
            value={password}
            onChange={(e) => {
            setPassword(e.target.value);
          }}
            required
          />
          <div class="underline"></div>
        </div>
        <div class="input-box">
          <input
            type="password"
            placeholder="Confirm Your Password"
            id="getPass"
            value={confirmpass}
            onChange={(e) => {
            setConfirmpass(e.target.value);
          }}
            required
          />
          <div class="underline"></div>
        </div>
        <div class="input-box button">
            <button type='submit' className='flex justify-center items-center w-full h-max p-4 bg-yellowtheme font-serif font-semibold rounded-xl text-xl'>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default Reset