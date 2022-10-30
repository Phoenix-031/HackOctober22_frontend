
import axios from "axios";

const registerUser = async (username, email, password) => {
  const response = await axios.post("http://localhost:6723/api/auth/register", {
    username,
    email,
    password,
  });
  return response;
};

const loginUser = async (author, password) => {
  const response = await axios.post("http://localhost:6723/api/auth/login", {
    author,
    password,
  });
  return response;
};

const forgotpassword = async (email) => {
  const response = await axios.patch("http://localhost:6723/api/auth/forgotpassword", {
    email,
  });

  return response;
};

const resetpassword = async (password, resetToken) => {
  const response = await axios.put(`http://localhost:6723/api/auth/resetpassword/${resetToken}`, {
    password,
  });

  return response;
};

const verify = async (token) => {
  const response = await axios.get(`http://localhost:6723/api/auth/verify/${token}`);

  return response;
};

export { loginUser, registerUser, forgotpassword, resetpassword, verify };
