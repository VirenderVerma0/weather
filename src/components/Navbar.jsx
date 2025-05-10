import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
 <nav> 
    <div className="w-full  bg-slate-800 flex  items-center justify-between  ">
       <img src=" https://cdn-icons-png.flaticon.com/512/414/414927.png " className='h-13 md:w-20 ml-5' alt="cloud" />
       <p className='md:ml-[-67%] md:mt-[-20px] text-slate-200'>WeatherWise</p>
        <div className="mr-10 flex gap-10  text-2xl font-semibold text-slate-300 ">
            <Link to="/"><i className='hover:text-blue-400 hover:bg-gray-700 px-3 py-2 rounded'>Home</i></Link>
            <Link to="about"><i className='hover:text-blue-400 hover:bg-gray-700 px-3 py-2 rounded'>About</i></Link>
           
        </div>
    </div>
 </nav>
  )
}

export default Navbar
