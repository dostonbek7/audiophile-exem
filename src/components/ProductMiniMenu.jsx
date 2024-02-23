import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function ProductMiniMenu() {
  return (
    <div className="max-container py-[100px]">
      <ul className="flex flex-col gap-[66px] md:flex-row md:gap-8 items-center justify-center md:justify-between">
        <li className="relative category_menu cursor-pointer rounded-lg bg-belgua flex flex-col items-center justify-center pb-[30px] gap-4 pt-[100px]">
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <img
              className="w-[140px] h-[124px] absolute top-[-40px]"
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt=""
            />

            <h1 className="text-base font-bold md:text-lg mb-4">HEADPHONES</h1>
            <Link to={`/headphones`} className="flex items-center gap-3 text">
              <span className="uppercase">Shop</span>
              <FaChevronRight className="text-sepia" />
            </Link>
          </div>
        </li>
        <li className="relative category_menu cursor-pointer  rounded-lg bg-belgua flex flex-col items-center justify-center pb-[30px] gap-4 pt-[100px]">
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <img
              className="w-[140px] h-[124px] absolute top-[-40px]"
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt=""
            />

            <h1 className="text-base font-bold md:text-lg mb-4">SPEAKERS</h1>
            <Link to={"/speakers"} className="flex items-center gap-3 text">
              <span className="uppercase">Shop</span>
              <FaChevronRight className="text-sepia" />
            </Link>
          </div>
        </li>
        <li className=" relative category_menu cursor-pointer  rounded-lg bg-belgua flex flex-col items-center justify-center pb-[30px] gap-4 pt-[100px]">
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <img
              className="w-[140px] h-[124px] absolute top-[-40px]"
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt=""
            />

            <h1 className="text-base font-bold md:text-lg mb-4">EARPHONES</h1>
            <Link to={"/earphones"} className="flex items-center gap-3 text">
              <span className="uppercase">Shop</span>
              <FaChevronRight className="text-sepia" />
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ProductMiniMenu;
