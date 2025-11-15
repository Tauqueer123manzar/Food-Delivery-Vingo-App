import React from 'react'

const SignUp = () => {
  const primaryColor = "#ff4d2d";
  const hoverColor = "#e64323";
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4'
      style={{ backgroundColor: bgColor}}>
     <div className = {`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-$[1px]`}
     style={{border: `1px solid ${borderColor}`}} >
      <h1 className={`text-3xl font-bold mb-2 text-center`} style={{color:primaryColor}}>Vingo</h1>

       <input type='text' placeholder='Username'
        className="w-full p-3 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1"
        />

       <input type="email" placeholder="Email"
        className="w-full p-3 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1"
       />

       <input type='password' placeholder='Password'
        className="w-full p-3 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1"/>

      <button className={`w-full p-3 rounded text-white font-semibold cursor-pointer hover:opacity-90 transition`}
         style={{backgroundColor: primaryColor}}
        >
          Login
        </button>

        <a href='/signin' className='block text-center mt-4 text-sm text-gray-600'>
          Already have an account? Sign In
        </a>  
     </div>
    </div>
  )
}

export default SignUp
