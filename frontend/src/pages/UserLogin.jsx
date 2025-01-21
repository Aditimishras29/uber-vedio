import React from 'react'

const UserLogin = () => {
  return (
    <div className='p-7'>
      <form>
      <h3 className='text-xl mb-2'>What's your email</h3>
      <input required 
      className='bg-[#eeeee] rounded px-2 py-2 border w- full text-lg placeholder:text-base'
      type="email" 
      placeholder ='email@example.com'
      />

      <h3>Enter Password</h3>

      <input required type="password" placeholder ='password'/>
      <button>Login</button>
      </form>
    </div>
  )
}

export default UserLogin
