import React, { useState } from 'react';
import myBackgroundImage from "./assets/images/background.png"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-full h-full flex flex-col">
        <img src={myBackgroundImage} className="w-full h-full object-cover" />
        <div className="absolute text-white right-0 h-full sm:w-[40%] w-[60%] bg-gray-900 bg-opacity-50">
          <div className="absolute top-[16%] left-[12%] right-[4%] sm:right-[7%]">
            <h1 className="text-5xl font-bold ">Welcome to Lorem</h1>
            <h1 className="mt-[12px] text-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
            <div className="ml-[5%] ">
            <h1 className="text-5xl mt-[8%] font-bold">Sign in</h1>
            <h1 className="mt-[4%]">Don't have an account? <span className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 text-blue-400">Sign up </span></h1>
          </div>
          <form onSubmit={handleSubmit}>
          <input 
          type="email"
          placeholder="Email *"
          className="w-full p-4 my-4 text-white mr-4 bg-transparent border-[1px] border-gray-300 outline-none"
          value={email}
          onChange={handleEmailChange}
          />
          <input 
          type="password"
          placeholder="Password *"
          className="w-full text-white p-4 my-4 mr-4 bg-transparent border-[1px] border-gray-300 outline-none"
          value={password}
          onChange={handlePasswordChange}
          />
          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center ml-2">
              <input type="checkbox" className="w-4 h-4 mr-2 accent-blue-500"/>
              <p className="text-sm ml-[3%]">Remember Me</p>
            </div>
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 text-blue-400">Forgot Password ?</p>
          </div>
          <button 
          type="submit"
          className=" w-full text-black bg-slate-300 my-2 rounded-full p-4 mt-8 text-center flex items-center justify-center">Sign In</button>
          </form>
          <h1 className="text-center mt-6">Or continue with</h1>
          <div className="mt-4 text-center space-x-8">
          <FacebookTwoToneIcon fontSize="large" style={{color:"#5c6bc0"}}/>
          <TwitterIcon fontSize="large" style={{color:"#2196f3", borderRadius: "3px"}}/>
          <GitHubIcon fontSize="large" style={{color:"#3d5afe"}}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

