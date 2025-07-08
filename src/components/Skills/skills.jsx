// import React from 'react'
import Html from "../../icons/html.svg"
import Css from "../../icons/css.svg"
import Js from "../../icons/Js.svg"
import Ts from "../../icons/typescript_5968381.png"
import react from '../../icons/reactjs.svg'
import Next from '../../icons/nextjs-icon-svgrepo-com.svg'
import Tailwind from '../../icons/tailwind-css.svg'
import Bootstrap from '../../icons/bootstrap_5968672.png'
import Nodejs from '../../icons/nodejs.svg'
import Express from '../../icons/express-original.svg'
import Mongodb from '../../icons/mongodb-original.svg'
import Wordpress from '../../icons/wordpress-logo_63737.png'



function Skills() {
  return (
    <div className='mt-[950px]  w-[80%] m-auto text-center'>
      <h1 className='heroheader font-bold text-6xl leading-snug'>Skills</h1>
      <div className=" h-[4px]   w-[100px] m-auto bg-brandyellow rounded-full"  />
      <div className='flex flex-wrap justify-center mt-20 gap-10 m-auto w-[90%] md:w-[70%]'>
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
            <p className='skilltxt font-semibold'>Typescript</p>
         <img className='h-24 w-24 ' src={Ts} alt="" />
          </div>

          <div>
            <p className='skilltxt font-semibold'>ReactJs</p>
         <img className='h-24 w-24 animate-spin-slow' src={react} alt="" />
          </div>
          <div>
            <p className='skilltxt font-semibold'>NextJs</p>
         <img className='h-24 w-24' src={Next} alt="" />
          </div>
        </div>

        <div className='flex flex-wrap gap-16'>
          <div>
          <p className='skilltxt font-semibold'>Tailwindcss</p>
         <img className='h-24 w-24 ' src={Tailwind} alt="" />
          </div>
          <div>
          <p className='skilltxt font-semibold'>Bootstrap</p>
         <img className='h-24 w-24 ' src={Bootstrap} alt="" />
          </div>

          <div>
            <p className='skilltxt font-semibold'>Nodejs</p>
         <img className='h-24 w-24 ' src={Nodejs} alt="" />
          </div>
          
        </div>

        <div className='flex flex-wrap gap-16'>
          <div>
          <p className='skilltxt font-semibold'>Express</p>
         <img className='h-24 w-24 ' src={Express} alt="" />
          </div>

          <div>
            <p className='skilltxt font-semibold'>Mongodb</p>
         <img className='h-24 w-24 ' src={Mongodb} alt="" />
          </div>
          <div>
            <p className='skilltxt font-semibold'>WordPress</p>
         <img className='h-24 w-24 ' src={Wordpress} alt="" />
          </div>

        </div>

      </div>
    
    </div>
  )
}

export default Skills
