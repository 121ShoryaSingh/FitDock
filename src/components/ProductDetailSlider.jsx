/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProductDetailSlider = () => {
  return (
    
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
    <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showStatus={false} thumbWidth={60} className='productCarousal' >
    <img src='/p1.webp'/>
    <img src='/p2.webp'/>
    <img src='/p3.webp'/>
    <img src='/p4.webp'/>
    </Carousel>
    </div>
  )
}

export default ProductDetailSlider