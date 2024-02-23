import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function ProductMiniMenu() {
  return (
    <div className="max-container">
      <div className="flex flex-col md:flex-row items-center gap-[68px] md:gap-[10px] py-[120px] lg:gap-[30px]">
        <div className="flex flex-col items-center px-[108px] md:px-14 py-[22px] md:py-[22px] bg-belgua rounded-lg md:max-w-[223px] lg:w-[350px] ">
          <img
            className="w-20 lg:min-w-[123px] h-[160px] mt-[-70px] object-cover"
            src="/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
            alt="headphones"
          />
          <h1 className="text-base font-bold md:text-lg mb-4">HEADPHONES</h1>
          <Link to={`/headphones`} className="flex items-center gap-3 text">
            <span className="uppercase">Shop</span>
            <FaChevronRight className="text-sepia" />
          </Link>
        </div>
        <div className="flex flex-col justify-between items-center px-[108px] py-[22px] bg-belgua rounded-lg  md:max-w-[223px] lg:w-[350px]">
          <img
            className="w-20 lg:min-w-[123px] h-[160px]  mt-[-70px] object-cover"
            src="/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
            alt="speakers"
          />
          <h1 className="text-base font-bold md:text-lg mb-4">SPEAKERS</h1>
          <Link to={'/speakers'} className="flex items-center gap-3 text">
            <span className="uppercase">Shop</span>
            <FaChevronRight className="text-sepia" />
          </Link>
        </div>
        <div className="flex flex-col items-center px-[108px] py-[22px] bg-belgua rounded-lg md::max-w-[223px] lg:w-[350px]">
          <img
            className="w-20 lg:min-w-[123px] h-[160px] mt-[-70px] object-cover"
            src="/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"
            alt="earphones"
          />
          <h1 className="text-base font-bold md:text-lg mb-4">EARPHONES</h1>
          <Link to={'/earphones'} className="flex items-center gap-3 text">
            <span className="uppercase">Shop</span>
            <FaChevronRight className="text-sepia" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductMiniMenu;
