import React, { useState } from 'react';
import { FaLockOpen } from 'react-icons/fa';
import { HiLockClosed } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import ScrollToTop from '../../MyHook/ScrollToTop';
import './Navbar.css';
const Navbar = () => {
    const [open, setOpen] = useState(false)
    // const navItems = [
    //     { id: '1', name: 'Home', path: '/' },
    //     { id: '2', name: 'Projects', path: '/projects' },
    //     { id: '3', name: 'Skills', path: '/skills' },
    //     { id: '4', name: 'About', path: '/about' },
    //     { id: '5', name: 'Blog', path: '/blog' },
    //     { id: '6', name: 'Contact', path: '/contact' },
    // ]
    const [isMenuOpen, setIsMenuOpen] = useState(false);

const navItems = <ScrollToTop  className={(isActive) => isActive ? 'active' : undefined}>
    <li className='text-gray-400 text-xl font-semibold '><NavLink to='/' >Home</NavLink></li>
    <li className='text-gray-400 text-xl font-semibold '><NavLink to='/projects'>Projects</NavLink></li>
    <li className='text-gray-400 text-xl font-semibold '><NavLink to='/skills'>Skills</NavLink></li>
    <li className='text-gray-400 text-xl font-semibold '><NavLink to='/aboutUs' >About Us</NavLink></li>
    <li className='text-gray-400 text-xl font-semibold '><NavLink to='/blog' >Blog</NavLink></li>
    <li className='text-gray-400 text-xl font-semibold '><NavLink to='/contactUs' >Contact Us</NavLink></li>
    <li className='text-gray-400 text-xl font-semibold '><NavLink to='/allProjects' >All Projects</NavLink></li>
    
</ScrollToTop>


    return (
    //     <div style={{
    //         backgroundColor: '#8f8f8f38',
    //        backdropFilter: 'blur(10px)',
    //        zIndex: '100'
    //    }} className='fixed z-10 bg-gray-800  w-full'  >
    //         <div >
    //             <div onClick={() => setOpen(!open)} className='text-gray-400 lg:hidden pl-4 pt-4  '>
    //                 {
    //                     open ? < FaLockOpen className='w-6 h-6' /> : < HiLockClosed className='w-6 h-6' />
    //                 }
    //             </div>
    //             <div className='lg:flex justify-between text-gray-400 py-6 px-10 '>
    //                 <div className='font-extrabold text-2xl '>
    //                     <Link to='/'>Po<span className='p-text'>rtfo</span>lio</Link>
    //                 </div>
    //                 <ul className={`absolute md:static duration-500 ease-in ${open ? 'top-12' : 'top-[-200px] '} md:flex gap-6`}>
    //                     {
    //                         navItems.map(navItem =>

    //                             <NavLink to={navItem.path} className='text-xl font-semibold ' ><li className={(isActive) => isActive ? 'active' : undefined}>{navItem.name}</li> </NavLink>

    //                         )

    //                     }
    //                 </ul>

    //             </div>
    //         </div>
    //     </div> 
    
    <div style={{
                backgroundColor: '#8f8f8f38',
              backdropFilter: 'blur(10px)',
                zIndex: '100'
      }} class="fixed z-10 w-full bg-gray-800 ">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            <img className="h-5 w-5 bg-emerald-500" src="https://swipekit.app/logo.png" alt="" />


            <span class="ml-2 text-xl font-bold tracking-wide text-gray-400 uppercase">
            <Link to='/'>Po<span className='p-text'>rtfo</span>lio</Link>
            </span>
          </a>
          <ul class="flex items-center hidden space-x-8 lg:flex">
           {navItems}
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                      >
                        <svg
                          class="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-400 uppercase">
                        <Link to='/'>Po<span className='p-text'>rtfo</span>lio</Link>
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                    {navItems}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar
