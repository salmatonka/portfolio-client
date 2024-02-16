import React from 'react'
import BlogCards from './BlogCards'
import useTitle from '../../MyHook/useTitle'
import './Blog.css';

const Blog = () => {
    useTitle('Blog')
    const blogCards = [
        {
            "id": "1",
            "name": "Hello Bank",
            "blg": "Coming",
            "img": "https://i.ibb.co/d5NRbRt/screencapture-localhost-3000-2023-08-04-19-42-56.png",
            "link": "",
        },
        {
            "id": "2",
            "name": "new Portfolio",
            "img": "https://i.ibb.co/S0DN2RH/screencapture-localhost-3000-2023-08-04-18-24-41.png",
            "link": ""
        },
        {
            "id": "3",
            "name": "Old Portfolio",
            "img": "https://i.ibb.co/PFdgCBN/screencapture-stellular-marshmallow-1230e6-netlify-app-2023-08-03-17-10-17-1.png",
            "link": "https://stellular-marshmallow-1230e6.netlify.app",
            // "details": ""
        },

        // {
        //     "id": "3",
        //     "name": "new Portfolio",
        //     "img": "https://i.ibb.co/S0DN2RH/screencapture-localhost-3000-2023-08-04-18-24-41.png",
        //     "link": ""
        // },
    ]
    return (
        <div className='py-24 px-10'>
            <h2 className='text-gray-400 font-bold text-2xl text-center'> Coming Soon....</h2>
            <div className="blogMap ">
                {
                    blogCards?.map(blogCard => <BlogCards
                        key={blogCard?.id}
                        blogCard={blogCard}
                    ></BlogCards>)
                }
            </div>
        </div >
  )
}

export default Blog
