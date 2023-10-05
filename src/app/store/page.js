import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Banner from '@/components/Banner'
import Wrapper from '@/components/Wrapper'
import Productcard from '@/components/Productcard'



const page = () => {
  return (
    <div className=''>
        <Navbar />
        <Banner />
        <Wrapper>
          {/* Heading */}
          <div className='text-center max-w-[800px] mx-auto my-[50px] md:my[80px]'>
            <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
            Unleash Your Fitness Potential - Explore FitDock Store Now!
            </div>
            <div className='text-md md:text-xl'>             
            Empower your fitness journey at FitDock Store! Discover top-notch workout gear, trendy activewear, and innovative fitness accessories for an extraordinary exercise experience. Elevate your fitness game with us!
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            </div>            
            </div>
          </div>
        </Wrapper>
        <Footer />
    </div>
  )
}

export default page