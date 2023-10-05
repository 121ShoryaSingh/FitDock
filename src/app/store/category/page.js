import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Productcard from "@/components/Productcard";
import Wrapper from "@/components/Wrapper";
import React from "react";

const category = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full md:py-20">
        <Wrapper>
          <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
            <div className="text-[20px] md:text-[34px] mb-5 font-semibold leading-tight">
              T-Shirt
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
              <Productcard />
              <Productcard />
              <Productcard />
              <Productcard />
              <Productcard />
              <Productcard />
              <Productcard />
              <Productcard />
              <Productcard />
            </div>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </div>
  );
};

export default category;
