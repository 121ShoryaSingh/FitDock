"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Productcard from './Productcard';

const RelatedChoice = () => {
    const resposive ={
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1023, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
      },}
  return (
    <div className='mt-[50px] md:mt-[100px] mb-[100px] md:mb-0'>
        <div className='text-2xl font-bold mb-5'>You Might Also Like</div>
        <Carousel responsive={resposive} containerClass='-mx-[10px]' itemClass='px-[10px]'>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
        </Carousel>
    </div>
  )
}

export default RelatedChoice