import React from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  return (
    <div>
       <div className="p-7 h-screen flex flex-col justify-center items-center bg-[#f9f9f9]">
      <div>
        <img
          className=" w-16 ml-10"
          src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1248x702.v1623372852.jpg"
        ></img>

        <form  onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h3 className="text-lg  font-medium mb-2">What's your Name</h3>
          <div className='flex gap-4'>
          <input
            required

            className="bg-[#eeeeee]  w-1/2 mb-7 rounded px-2 py-2 border  text-lg placeholder:text-base"
            type="text"
            placeholder="First name"
          />
            <input
            required

            className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border  text-lg placeholder:text-base"
            type="text"
            placeholder="Last name"
          />

          </div>
          <h3 className="text-lg  font-medium mb-2">What's your email</h3>
          <input
            required

            className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w- full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg  font-medium">Enter Password</h3>

          <input
          required

            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w- full text-lg placeholder:text-base"
             type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-2 py-2  w- full text-lg placeholder:text-base">
            Login
          </button>
          </form>
          <p className=" text-center">
            New here?<Link to='/signup'  className="text-blue-600">Create new Account</Link>
          </p>
        
      </div>
      <div>
        <Link to='/captain-login'
        className="bg-[#10b461] flex items-center text-white font-semibold mb-7 rounded px-2 py-2  w- full text-lg placeholder:text-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
    </div>
  )
}

export default UserSignup
