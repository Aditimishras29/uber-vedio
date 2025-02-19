import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-cover bg-centre bg-[url(/luke-stackpoole-YNQgPXShu7g-unsplash.jpg)] h-screen pt-8 flex justify-between flex-col  w-full bg-red-400'>
        <img className=' w-16 ml-8' src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1248x702.v1623372852.jpg"></img>
        <div className='w-full bg-white pb-7  py-4 px-4'>
            <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
            <Link to ='/login' className=' flex items-center just w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>


        </div>
    

      
    </div>
  )
}

export default Home
