import Cartitem from "@/components/Cartitem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full md:py-20">
        <Wrapper>
          <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-8">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Shopping Cart
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 py-10">
            <div className="flex-[2]">
              <div className="text-lg font-bold">Cart Item</div>
              <Cartitem/>
              <Cartitem/>
              <Cartitem/>
            </div>
            <div className="flex-[1]">
              <div className="text-lg font-bold">Summery</div>
                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      MRP: ₹2400.00
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                      The Subtotal reflects the total price of your order,
                      including duties and taxes, before any applicable discounts.
                      It does not include delivery and international transaction 
                      fees.
                  </div>
                </div>
                <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                  Checkout
                </button>
              </div>
            </div>
            {/* <div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-14">
              <Image src="/empty-cart.jpg" alt=""  width={300} height={300} className="w-[300px] md:[400px]"/>
            </div> */}
        </Wrapper>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
