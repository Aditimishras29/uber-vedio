import React, { useState } from 'react'
import { Link } from 'react-router-dom' 

const CaptainSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')  
    const [lastName, setLastName] = useState('')  
    const [userData , setUserData] = useState({})
  
  
  
    const submitHandler = (e) =>{
      e.preventDefault()
      setUserData({
        fullName:{
          firstName: firstName,
          lastName: lastName  
        },
        email: email,
        password: password
  
      })
  

        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
    }
  return (
   <div className="p-5 px-5 h-screen flex flex-col justify-center items-center bg-[#f9f9f9]">
         <div>
           <img
             className=" w-16 ml-10"
             src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1248x702.v1623372852.jpg"
           ></img>
   
           <form  onSubmit={(e)=>{
             submitHandler(e)
           }}>
             <h3 className="text-lg w-1/2  font-medium mb-2">What's our Captain's Name</h3>
             <div className='flex gap-4 mb-7'>
             <input
               required
   
               className="bg-[#eeeeee]  w-full  rounded px-2 py-2 border  text-base placeholder:text-sm"
               type="text"
               placeholder="First name"
               value={firstName}
               onChange={(e)=>{
                 setFirstName(e.target.value)
               }}
             />
               <input
               required
   
               className="bg-[#eeeeee] w=1/2 rounded px-4 py-2 border  text-base placeholder:text-sm"
               type="text"
               placeholder="Last name"
               value={lastName}
               onChange={(e)=>{
                 setlastName(e.target.value)
               }}
             />
   
             </div>
             <h3 className="text-lg  font-medium mb-2">What's our Captain's email</h3>
             <input
               required
               value={email}
               onChange={(e)=>{
                 setemail(e.target.value)
               }}
   
               className="bg-[#eeeeee] mb-6 rounded px-2 py-2 border w- full text-lg placeholder:text-lg"
               type="email"
               placeholder="email@example.com"
             />
   
             <h3 className="text-lg  font-medium">Enter Password</h3>
   
             <input
             required
             value={password}
             onChange={(e)=>{
               setPassword(e.target.value)
             }}
   
               className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w- full text-lg placeholder:text-lg"
                type="password"
               placeholder="password"
             />
             <button className="bg-[#111] text-white font-semibold mb-7 rounded px-2 py-2  w- full text-lg placeholder:text-lg">
               Login
             </button>
             </form>
             <p className=" text-center">
               Alraeady have a account? <Link to='/captain-login'  className="text-blue-600">Login here</Link>
             </p>
           
         </div>
         <div>
           <p className='text-[10px] leading-tight'> This site is protected by reCAPTCHA and the<span> Google Privacy Policy</span> and<span className='undeline'>Terms of Service apply</span>.  </p>
         </div>
       </div>
  )
}

export default CaptainSignup
