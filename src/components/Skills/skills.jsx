import React from 'react'
import Html from "../../icons/html.svg"
import Css from "../../icons/css.svg"
import Js from "../../icons/Js.svg"
import react from '../../icons/reactjs.svg'
import Tailwind from '../../icons/tailwind-css.svg'
import Nodejs from '../../icons/nodejs.svg'


function Skills() {
  return (
    <div className='mt-[950px]  w-[80%] m-auto text-center'>
      <h1 className='heroheader font-bold text-6xl leading-snug'>Skills</h1>
      <div className=" h-[4px]   w-[100px] m-auto bg-brandyellow rounded-full" />
      <div className='flex justify-center mt-20 gap-10 m-auto w-[90%] md:w-[70%]'>
        <div className='flex flex-wrap gap-16'>
          <div>
            <p className='skilltxt font-semibold'>Html</p>
         <img className='h-24 w-24 ' src={Html} alt="" /> 
          </div>

          <div>
          <p className='skilltxt font-semibold'>Css</p>
         <img className='h-24 w-24 ' src={Css} alt="" />
          </div>
        </div>



        <div className='flex flex-wrap gap-16'>
          <div>
            <p className='skilltxt font-semibold'>Javascript</p>
         <img className='h-24 w-24 ' src={Js} alt="" />
          </div>

          <div>
            <p className='skilltxt font-semibold'>React</p>
         <img className='h-24 w-24 animate-spin-slow' src={react} alt="" />
          </div>
        </div>

        <div className='flex flex-wrap gap-16'>
          <div>
          <p className='skilltxt font-semibold'>Tailwindcss</p>
         <img className='h-24 w-24 ' src={Tailwind} alt="" />
          </div>

          <div>
            <p className='skilltxt font-semibold'>Nodejs</p>
         <img className='h-24 w-24 ' src={Nodejs} alt="" />
          </div>
        </div>

      </div>
    
    </div>
  )
}

export default Skills
