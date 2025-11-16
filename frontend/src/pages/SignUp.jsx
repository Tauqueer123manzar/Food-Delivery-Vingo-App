import React from 'react'
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const primaryColor = "#ff4d2d";
  const hoverColor = "#e64323";
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";

  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4'
      style={{ backgroundColor: bgColor }}>
      <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-$[1px]`}
        style={{ border: `1px solid ${borderColor}` }} >
        <h1 className={`text-3xl font-bold mb-2 text-center`} style={{ color: primaryColor }}>Vingo</h1>

        <p className='text-gray-600 mb-8'>Create your account to get started with delicious food deliveries</p>

        <div className='mb-2'>
          <label htmlFor="fullName" className='block text-gray-700 font-semibold mb-1'>Full Name</label>
          <input type='text' placeholder='Enter your full name' id="fullName"
            className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1"
            style={{ border: `1px solid ${borderColor}` }} />
        </div>

        <div className='mb-2'>
          <label htmlFor="email" className='block text-gray-700 font-semibold mb-1'>Email</label>
          <input type="email" placeholder="Email"
            className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1"
            style={{ border: `1px solid ${borderColor}` }} />
        </div>

        <div className='mb-2'>
          <label htmlFor="mobile" className='block text-gray-700 font-semibold mb-1'>Mobile Number</label>
          <input type='text' placeholder='Enter your mobile number' id="mobile"
            className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1"
            style={{ border: `1px solid ${borderColor}` }}>
          </input>
        </div>

        <div className='mb-2'>
          <label htmlFor="password" className='block text-gray-700 font-semibold mb-1'>Password</label>
          <div className='relative'>
            <input type={`${!showPassword ? 'text' : 'password'}`} placeholder='Password'
              className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1" />
            <button className='absolute right-3 top-2.5 text-gray-500' onClick={() => setShowPassword(prev => !prev)}>{!showPassword ? <FaEye /> : <FaEyeSlash />}</button>
          </div>
        </div>

        <button className={`w-full p-2 rounded text-white font-semibold cursor-pointer hover:opacity-90 transition`}
          style={{ backgroundColor: primaryColor }}
        >
          Register
        </button>

        <a href='/signin' className='block text-center mt-4 text-sm text-gray-600'>
          Already have an account? Sign In
        </a>
      </div>
    </div>
  )
}

export default SignUp
