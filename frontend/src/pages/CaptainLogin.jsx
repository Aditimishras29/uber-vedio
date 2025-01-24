import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
   const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("")
    const [captainData , setcaptainData] = useState("")
  
  
  
    const submitHandler = (e)=>{
      e.preventDefault();
      setcaptainData({
        email: email,
        password: password
      })  
  
      setEmail("")
      setPassword("")
    
      
    }

  return (
    <div className="p-7 h-screen flex flex-col justify-center items-center bg-[#f9f9f9]">
    <div>
      <img
        className=" w-16 ml-10"
        src="https://w7.pngwing.com/pngs/567/356/png-transparent-uber-logo-decal-lyft-business-text-people-logo-thumbnail.png" alt=""
      ></img>

      <form  onSubmit={(e)=>{
        submitHandler(e)

      }}className="flex flex-col">
        <h3 className="text-lg  font-medium mb-2">What's your email</h3>
        <input
          required
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value); 
          }}

          className="bg-[#eeeee] mb-7 rounded px-2 py-2 border w- full text-lg placeholder:text-base"
          type="email"
          placeholder="email@example.com"
        />

        <h3 className="text-lg  font-medium">Enter Password</h3>

        <input
          className="bg-[#eeeee] mb-7 rounded px-2 py-2 border w- full text-lg placeholder:text-base"
          required
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value); 
          }}

          type="password"
          placeholder="password"
        />
        <button className="bg-[#111] text-white font-semibold mb-7 rounded px-2 py-2  w- full text-lg placeholder:text-base">
          Login
        </button>
        </form>
        <p className=" text-center">
          Join as a fleet? <Link to='/captain-signup'  className="text-blue-600">Register as a Captain</Link>
        </p>
      
    </div>
    <div>
      <Link to='/login'
      className="bg-[#d5622d] flex items-center text-white font-semibold mb-7 rounded px-2 py-2  w- full text-lg placeholder:text-base">
        Sign in as User
      </Link>
    </div>
  </div> 
  )
}

export default CaptainLogin
