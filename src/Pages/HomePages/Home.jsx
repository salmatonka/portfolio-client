import React from 'react'
import useTitle from '../../MyHook/useTitle'
import HomeBanner from '../HomeBanner/HomeBanner'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import AboutUs from '../AboutUs/AboutUs'
import ContactUs from '../ContactUs/ContactUs'

const Home = () => {
    useTitle('Home')
    return (
        <div>
            {/* <AutoMessage /> */}
            <HomeBanner />
            <Projects />
            <Skills />
            <AboutUs />
            <ContactUs />
        </div>
  )
}

export default Home
