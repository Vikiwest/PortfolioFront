import React from 'react'
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

function Navheading() {
  return (
    <div className='font-bold text-lg '>
       <Link to="/" className=" items-center hover:text-brandyellow transition duration-200 flex gap-2">
      <h1 className=' '>Victory </h1>
      <IoMdHome className='headername animate-color-change hover:animate-none'/>
     </Link>
    </div>
  )
}

export default Navheading
