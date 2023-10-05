/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Productcard = () => {
  return (
    <Link href="/store/Product" className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
      <img className="w-full" src="/p1.webp" alt="" />
      <div>
        <h2 className="text-lg font-medium">Product Name</h2>
        <div className="flex items-center text-gray/[0.5]">
          <p className="mr-2 text-gray-800 text-lg font-semibold">$10.00</p>
          <p className="text-base text-gray-400 font-medium line-through">$18.00</p>
          <p className="ml-auto text-base font-medium text-green-500">20% off</p>
        </div>
      </div>
    </Link>
  );
};

export default Productcard;
