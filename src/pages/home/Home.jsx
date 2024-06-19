import React from 'react'
import CTA from '../../component/cta/CTA'
import HomeService from '../../component/homeService/HomeService'
import Testimonials from '../../component/testimonials/Testimonials'
import Newsletter from '../../component/newsletter/Newsletter'
import Clients from '../../component/clients/Clients'
import '../../component/flyingFairy/FlyingFairy.css'; // Make sure to import the CSS file


const Home = () => {
  return (
    <div className=' bg-black'>
        <CTA/>
        <HomeService/>
        <Testimonials/>
        <Newsletter/>
        <Clients/>
    </div>
  )
}

export default Home