import React from 'react';
import './HomeBanner.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { HiDocumentText } from 'react-icons/hi';
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import bannerImg from '../../assets/images/profile2.png';
import { FaDiscord } from "react-icons/fa6";

const HomeBanner = () => {
  return (
    <div className="md:flex lg:pt-10 lg:pb-6">
    <div data-aos="fade-right" data-aos-duration="1500" className="px-20">
        <div className="avatar ">
            <div className="imgAnim animate-pulse ease-in-out  w-full md:w-96 rounded-full ">
                <PhotoProvider>
                    <PhotoView src={bannerImg}>
                        <img className="" src={bannerImg} alt='' />
                    </PhotoView>
                </PhotoProvider>

            </div>
        </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1500" className="flex-1 text-gray-400 px-5 md:px-0">
        <h2 className="lg:text-4xl text-2xl uppercase font-bold"> <span>Hi !<br /> I am

            <span className='text-emerald-500 lg:text-4xl text-2xl'>

                <span className=''> Salma  </span>

                <span className='nameAnim-1'>A</span>
                <span className='nameAnim-2'>k</span>
                <span className='nameAnim-3'>t</span>
                <span className='nameAnim-4'>e</span>
                <span className='nameAnim-5'>r</span>

            </span>

        </span> <br /><span className="lg:text-4xl text-2xl">web developer</span></h2>
        <p className="my-5 text-lg">
            I am a passionate full stack Web Developer. I have already created many Project with 1+ years <br /> of experience with modern technologies like React, Tailwind CSS, Node js, Mongo DB, Express JS, Bootstrap etc...

        </p>
        {/* <a href={resume} download={resume}> */}
        <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1ALi-tT7WHibsU3x_iCt31wqVoUQhJ1HK/edit?usp=drive_link&ouid=108078374606304800679&rtpof=true&sd=true">
            <button className='home-btn-anim  btn  bg-emerald-500 hover:bg-emerald-900  hover:btn-outline mt-3 rounded-r-full w-84 md:w-44 capitalize gap-x-1 hover:text-gray-400'><HiDocumentText className="mr-2 text-2xl"></HiDocumentText><span >view Resume</span> </button>
        </a>


        <div className='flex text-2xl text-gray-400 mt-7 justify-between md:justify-start'>
            <a className='btnHover p-2 lg:mx-1 rounded-full hover:text-emerald-500' target='blank' href="https://github.com/salmatonka"> <FaGithub ></FaGithub> </a>
            <a className='btnHover p-2 lg:mx-1 rounded-full hover:text-emerald-500' target='blank' href="https://www.facebook.com/omme.salma.587606"> <FaFacebook ></FaFacebook> </a>
            <a className='btnHover p-2 lg:mx-1 rounded-full hover:text-emerald-500' target='blank' href="https://www.linkedin.com/in/salma-akter-46708625b/"> <FaLinkedin ></FaLinkedin> </a>
            <a className='btnHover p-2 lg:mx-1 rounded-full hover:text-emerald-500' target='blank' href="tel:+8801930053708"> <FaPhoneAlt ></FaPhoneAlt> </a>
            <a className='btnHover p-2 lg:mx-1 rounded-full hover:text-emerald-500' target='blank' href="mailto:ommes918@gmail.com"> <AiTwotoneMail ></AiTwotoneMail> </a>
            <a className='btnHover p-2 lg:mx-1 rounded-full hover:text-emerald-500' target='blank' href="https://discord.com/users/1074021076104925217"> <FaDiscord /></a>

        </div>
    </div>

</div>

  )
}

export default HomeBanner
