import React from 'react'
import { FaGlobe } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
const BlogCards = ({ blogCard }) => {
  return (
    <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className=' py-8  '>
            <div className="blogCardContainer blog-project-card-shadow border-y-4  border-emerald-500 rounded-xl py-4">
                <div className="blogLeftSide ">
                    <PhotoProvider>
                        <PhotoView src={blogCard.img} >
                            <img className='h-80  w-full rounded-xl' src={blogCard.img} alt="" />
                        </PhotoView>
                    </PhotoProvider>


                </div>
                <div className="blogRightSide ">
                    <p className="text-2xl pt-4 text-emerald-500 font-bold leading-5">{blogCard.name}</p>

                    <div className="blogLink w-40 pt-6">
                        <a href={blogCard.link} target="_blank" className='rounded-xl shadow-xl '><p type="button" className="flex items-center justify-center w-full px-6 py-2  font-semibold tracking-wide rounded-xl  hover:bg-emerald-400 border border-emerald-400 text-emerald-400 hover:text-gray-100 hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}><FaGlobe className='text-xl hover:animate-spin hover:duration-75' /><span className='text-lg pl-2'>Live</span> </p></a>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default BlogCards
