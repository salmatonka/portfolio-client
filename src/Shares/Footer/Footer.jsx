import React from 'react'
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='text-gray-400 bg-[#111827] '>
      <div data-aos="fade-up"
        data-aos-duration="3000" className="footer footer-center py-8 ">
        <div>
          <img className="h-8 w-8 bg-emerald-500" src="https://swipekit.app/logo.png" alt="" />
          <h2 className="font-bold text-xl pb-1">
            Portfolio
          </h2>
          <p >Copyright © 2023 - All right reserved by <span className='text-emerald-500  font-bold'>Salma Akter</span></p>
        </div>


        <div>
          <div className="grid grid-flow-col gap-2">

            <a className='btnHover p-2 mx-1 rounded-full hover:text-emerald-500' target='blank' href="https://github.com/salmatonka"> <FaGithub className='text-xl'></FaGithub> </a>
            <a className='btnHover p-2 mx-1 rounded-full hover:text-emerald-500' target='blank' href="https://www.facebook.com/"> <FaFacebook className='text-xl'></FaFacebook> </a>
            <a className='btnHover p-2 mx-1 rounded-full hover:text-emerald-500' target='blank' href="https://www.linkedin.com/in/omme-salma-46708625b/?originalSubdomain=bd"> <FaLinkedin className='text-xl'></FaLinkedin> </a>
             <a className='btnHover p-2 mx-1 rounded-full hover:text-emerald-500' target='blank' href="https://discord.com/users/1074021076104925217"> <FaDiscord className='text-2xl' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
