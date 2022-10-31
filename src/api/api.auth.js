
import axios from "axios";

const registerUser = async (username, email, password) => {
  const response = await axios.post("https://spooky-alien-35919.herokuapp.com/api/auth/register", {
    username,
    email,
    password,
  });
  return response;
};

const loginUser = async (author, password) => {
  const response = await axios.post("https://spooky-alien-35919.herokuapp.com/api/auth/login", {
    author,
    password,
  });
  return response;
};

const forgotpassword = async (email) => {
  const response = await axios.patch("https://spooky-alien-35919.herokuapp.com/api/auth/forgotpassword", {
    email,
  });

  return response;
};

const resetpassword = async (password, resetToken) => {
  const response = await axios.put(`https://spooky-alien-35919.herokuapp.com/api/auth/resetpassword/${resetToken}`, {
    password,
  });

  return response;
};

const verify = async (token) => {
  const response = await axios.get(`https://spooky-alien-35919.herokuapp.com/api/auth/verify/${token}`);

  return response;
};

export { loginUser, registerUser, forgotpassword, resetpassword, verify };
