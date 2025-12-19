import React, { useState } from 'react'
import Footer from '../components/Footer';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const primaryColor = "#ff4d2d";
  const hoverColor = "#e64323";
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";

  const [showPassword,setShowPassword] = useState(true);

  return (
    <>
    <div className='min-h-screen w-full flex items-center justify-center p-4 mt-16'
      style={{ backgroundColor: bgColor }}>
      <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-$[1px]`}
        style={{ border: `1px solid ${borderColor}` }} >
        <h1 className={`text-3xl font-bold mb-2 text-center`} style={{ color: primaryColor }}>Vingo</h1>
        <p className='text-gray-700 mb-8 text-'>Welcome back! Please signin to continue enjoying delicious food deliveries.</p>

        <label htmlFor='email' className='block text-gray-700 font-semibold mb-1'>Email</label>
        <input type="email" placeholder="Email"
          className="w-full p-3 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1"
        />

        <label htmlFor='password' className='block text-gray-700 font-semibold mb-1'>Password</label>
        <div className='relative'>
        <input type={`${!showPassword? 'text' : 'password'}`} placeholder='Password'
          className="w-full p-3 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-offset-1" />
        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3">
          {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
        </button>
        </div>

       <div>
        <label className="flex justify-end mb-4">
          <a href='/forgot-password' className='text-sm text-red-600 text-bold'>
            Forgot Password?
          </a>
        </label>
       </div>
        <button className={`w-full p-3 rounded text-white font-semibold hover:opacity-90 transition cursor-pointer`}
          style={{ backgroundColor: primaryColor }}
        >
          Login
        </button>

        <div className='flex items-center my-4'>
          <button  className='w-full flex item-center justify-center gap-3 border border-gray-300 rounded-lg py-3 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition shadow-sm cursor-pointer'>
              <FcGoogle className='text-2xl' />
              <span>Sign in with Google</span>
            </button>
        </div>
        <a href='/signup' className='block text-center mt-4 text-sm text-gray-600'>
         If you have no account then?<span className='text-blue-600 font-medium'>SignUp</span>
        </a>
      </div>
    </div>
    <div className='mt-2'>
      <Footer/>
    </div>
    </>
  )
}

export default SignIn
