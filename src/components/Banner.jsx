/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import { BiArrowBack } from 'react-icons/bi'
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <div>

    <div className='relative text-white text-[20px] w-full max-w-[1360px] mx-auto'>
    <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showStatus={false} >
            <div>              
                <img src="/slider1.jpg" alt="" className='aspect-[16/10] md:aspect-auto object-cover' />
                <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white absolute bottom-[25px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
                  Shop now
                  </div>
            </div>
            <div>              
                <img src="/slider2.jpg" alt="" className='aspect-[16/10] md:aspect-auto object-cover' />
                <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white absolute bottom-[25px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
                  Shop now
                  </div>
            </div>     
            <div>              
                <img src="/slider3.jpg" alt="" className='aspect-[16/10] md:aspect-auto object-cover' />
                <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white absolute bottom-[25px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
                  Shop now
                  </div>
            </div>             
            </Carousel>
    </div>
    </div>
  )
};

export default Banner