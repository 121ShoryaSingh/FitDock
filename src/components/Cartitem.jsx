/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cartitem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-0 md:w-[120px]">
        <img src="/p1.webp" />
      </div>
      <div className="flex w-full flex-col">
        <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
          Raw Men Oversized Tee - Olive Green
        </div>
        <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
          MRP: ₹800.00
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                <option value="1">M</option>
                <option value="2">L</option>
                <option value="3">XL</option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[15px] md:text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
