"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaUserCircle } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import Diet from "@/components/diet";


const page = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Header />
      <div className=" flex flex-col px-60 care-img max-h-max bg-cover bg-center py-28 ">
        <div className="mb-16 p-2">
          <h1 className="text-xl font-bold text-white underline">Lab Tests</h1>
          <p className="font-semibold text-gray-300 mb-3">
            Monitor your health with comfort on your comfy days
          </p>
          <div className="flex flex-col justify-between">
            <div className=" flex flex-row justify-between">
              <div className="w-36 h-44 border-2 hover:animate-pulse hover:cursor-pointer hover:shadow-2xl">
                <Image
                  src="/FitCheck_Magazine-02.webp"
                  alt=""
                  width={144}
                  height={144}
                />
                <p>Price: ₹9999</p>
              </div>
              <div className="w-36 h-44 border-2 hover:animate-pulse hover:cursor-pointer hover:shadow-2xl">
                <Image src="/img3.webp" alt="" width={144} height={144}></Image>
                <p>Price: ₹9999</p>
              </div>
              <div className="w-36 h-44 border-2 hover:animate-pulse hover:cursor-pointer hover:shadow-2xl">
                <Image src="/img4.webp" alt="" width={144} height={144}></Image>
                <p>Price: ₹9999</p>
              </div>
              <div className="w-36 h-44 border-2 hover:animate-pulse hover:cursor-pointer hover:shadow-2xl">
                <Image src="/img2.webp" alt="" width={144} height={144}></Image>
                <p>Price: ₹9999</p>
              </div>
              <div className="w-36 h-44 border-2 hover:animate-pulse hover:cursor-pointer hover:shadow-2xl">
                <Image src="/img5.webp" alt="" width={144} height={144}></Image>
                <p>Price: ₹9999</p>
              </div>
            </div>
            <div className="flex flex-col justify-between mt-10">
              <div className=" flex flex-row justify-between">
                <div className="w-36 h-44 border-2 hover:animate-pulse hover:cursor-pointer hover:shadow-2xl">
                  <Image
                    src="/img6.webp"
                    alt=""
                    width={144}
                    height={144}
                  ></Image>
                  <p>Price: ₹9999</p>
                </div>
                <div className="w-36 h-44 border-2 hover:animate-pulse hover:cursor-pointer hover:shadow-2xl">
                  <Image
                    src="/img7.webp"
                    alt=""
                    width={144}
                    height={144}
                  ></Image>
                  <p>Price: ₹9999</p>
                </div>
                <div className="w-36 h-44 border-2 hover:animate-pulse hover:cursor-pointer hover:shadow-2xl">
                  <Image
                    src="/img8.webp"
                    alt=""
                    width={144}
                    height={144}
                  ></Image>
                  <p>Price: ₹9999</p>
                </div>
                <div className="w-36 h-44 border-2 hover:animate-pulse hover:cursor-pointer hover:shadow-2xl">
                  <Image
                    src="/img9.webp"
                    alt=""
                    width={144}
                    height={144}
                  ></Image>
                  <p>Price: ₹9999</p>
                </div>
                <div className="w-36 h-44 border-2 hover:animate-pulse hover:cursor-pointer hover:shadow-2xl">
                  <Image
                    src="/img10.webp"
                    alt=""
                    width={144}
                    height={144}
                  ></Image>
                  <p>Price: ₹9999</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Carousel
          className="backdrop-blur h-min mt-16" responsive={responsive} autoPlay={true} autoPlaySpeed={2000} infinite={true}
>
          <Diet />
          <Diet />
          <Diet />
          <Diet />
        </Carousel>
        <h2 className=" justify-center text-white text-2xl font-bold flex flex-row underline mt-10">
          Personal Trainers
        </h2>
        <Carousel
          className="backdrop-blur h-min mt-16"
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
        >
          <div className="h-fit flex flex-col items-center center justify-center">
            <div className="py-2 ">
              <Image
                src="/profile1.png"
                alt=""
                width={300}
                height={300}
              ></Image>
              <h2 className="font-semibold text-xl mb-2 flex flex-col items-center py-4">
                Shivani
              </h2>
            </div>
          </div>
          <div className="h-fit flex flex-col items-center center justify-center">
            <div className="py-2 ">
              <Image
                src="/profile1.png"
                alt=""
                width={300}
                height={300}
              ></Image>
              <h2 className="font-semibold text-xl mb-2 flex flex-col items-center py-4">
                Sachin
              </h2>
            </div>
          </div>
          <div className="h-fit flex flex-col items-center center justify-center">
            <div className="py-2 ">
              <Image
                src="/profile1.png"
                alt=""
                width={300}
                height={300}
              ></Image>
              <h2 className="font-semibold text-xl mb-2 flex flex-col items-center py-4">
                Vansh
              </h2>
            </div>
          </div>
        </Carousel>
        <div className="flex flex-col w-fit">
          <h2 className="text-3xl text-white font-bold mb-4 underline mt-10 py-5">
            FitDock Articles
          </h2>
          <Link href="/care/article1">
            <li className="text-xl text-white font-semibold hover:underline hover:cursor-pointer mb-2">
              The Workouts
            </li>
          </Link>
          <Link href="/care/article2">
            <li className="text-xl text-white font-semibold hover:underline hover:cursor-pointer mb-2">
              The Yoga
            </li>
          </Link>
          <Link href="/article2">
            <li className="text-xl text-white font-semibold hover:underline hover:cursor-pointer mb-2">
              The Best Fat Burning Excercises
            </li>
          </Link>
          <Link href="/article2">
            <li className="text-xl text-white font-semibold hover:underline hover:cursor-pointer mb-2">
              Health Risks of Steroid/Drug
            </li>
          </Link>
          <Link href="/article2">
            <li className="text-xl text-white font-semibold hover:underline hover:cursor-pointer mb-10">
              Fascinating Facts About Body
            </li>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default page;
