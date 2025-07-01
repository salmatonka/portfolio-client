import React from 'react'
import Navbar from '../Shares/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shares/Footer/Footer'

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-screen-xl lg:mx-auto px-6'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
