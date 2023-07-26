import React from 'react'
import Carousel from "./Carousel"
import TrustedCompany from './TrustedCompany'
import TopCourses from './TopCourses'
import TopCatagories from './TopCatagories'
import Instructor from './Instructor'
const Home = () => {
  return (
    <div className='w-[100%]'>
      <Carousel />
      <TrustedCompany />
      <TopCourses />
      <TopCatagories />
      <Instructor/>
    </div>
  )
}

export default Home;