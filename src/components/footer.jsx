// import React from 'react'
import Footerimg from "../assets/footer.png"
import Instagram from "../icons/Instagram.svg"
import LinkedIn from "../icons/LinkedIn.svg"
import Mail from "../icons/Mail.svg"
import Twitter from "../icons/twitter (1).svg"
function Footer() {
  return (
    <>
   

      <div className=''>
        
          <div className='flex gap-10  m-auto items-center justify-center  mt-60  '>
<a href="https://www.instagram.com/viki__west/" target='_blank'><img src={Instagram} alt="" /></a>
<a href="https://www.linkedin.com/in/victory-olorunda-aa615030a/" target='_blank'><img src={LinkedIn} alt="" /></a>
<a href="https://x.com/VOlorunda" target='_blank'><img className="w-10" src={Twitter}/></a>
<a href="mailto:chidiolorunda@gmail.com" target='_blank'><img src={Mail} alt="" /></a>
      </div>
      <p className='mt-5 text-center text-grey'>&copy;Olorunda Victory 2024</p>
      <img className='w-full -mt- ' src={Footerimg} alt="" />
    </div>
    </>
  )
}

export default Footer
