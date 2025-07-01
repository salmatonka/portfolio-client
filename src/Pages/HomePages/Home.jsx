import React, { useEffect } from 'react'
import useTitle from '../../MyHook/useTitle'
import HomeBanner from '../HomeBanner/HomeBanner'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import AboutUs from '../AboutUs/AboutUs'
import ContactUs from '../ContactUs/ContactUs'
import AutoMessage from '../../Shares/AutoMessage/AutoMessage'
import AOS from "aos";
const Home = () => {
    useTitle('Home');
     useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);
    return (
        <div>
            <AutoMessage />
            <HomeBanner />
            <Projects />
            <Skills />
            <AboutUs />
            <ContactUs />
        </div>
  )
}

export default Home
