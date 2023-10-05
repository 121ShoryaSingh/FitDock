import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductDetailSlider from "@/components/ProductDetailSlider";
import RelatedProduct from "@/components/RelatedProduct";
import Wrapper from "@/components/Wrapper";
import React from "react";

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full md:py-20">
        <Wrapper>
          <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/* Left Column start */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              <ProductDetailSlider />
            </div>
            {/* Right Column Start */}
            <div className="flex-[1] py-3">
              {/* Product Title */}
              <div className="text-[34px] font-semibold mb-2">
                Raw Men Oversized Tee - Olive Green
              </div>
              <div className="text-lg font-semibold">MRP: ₹800.00</div>
              <div className="text-md font-medium text-black/[0.5]">
                incl. of taxes
              </div>
              <div className="text-md font-medium text-black/[0.5] mb-20">
                {`(Also Include all applicable duties)`}
              </div>
              {/* Product Size */}
              <div className="mb-10">
                <div className="flex justify-between mb-2">
                  {/* Heading Start */}
                  <div className="text-md font-semibold">Select Size</div>
                  <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                    Select Guide
                  </div>
                </div>
                {/* Heading End */}
                {/* Size Start */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    M
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    L
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    XL
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium  border-black/[0.5] cursor-not-allowed opacity-50">
                    XXL
                  </div>
                </div>
                {/* Size End */}
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
              </div>
              {/* Add to cart */}
              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                Add to Cart
              </button>
              {/* Add to WishList */}
              <button className="border w-full py-4 rounded-full border-black text-lg font-medium transition-transform active:scale-95 hover:opacity-75 mb-10">
                WishList
              </button>
              {/* ProductDetails */}
              <div className="text-lg font-bold mb-5">
                <ul className="list-disc">
                  <li>
                    Real. Raw. Authentic, Build your own unique legacy by
                    rocking the latest Olive Green oversized Tee
                  </li>
                  <li>Shirt Style: Comfortable and relaxed fit</li>
                  <li>Male Model Featured (5'9"): Wearing XL</li>
                  <li>
                    RAW APPAREL - We take pride in our premium apparel and
                    limited edition designs, all created in-house for the
                    ultimate quality control.
                  </li>
                  <li>
                    Fit & Wash Instructions - Our oversized shirts are made from
                    100% cotton fabric for ultimate comfort, and to ensure they
                    stay soft, we recommend cold washing and hanging to dry.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <RelatedProduct />
        </Wrapper>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
