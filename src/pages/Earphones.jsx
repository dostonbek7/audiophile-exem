import React from "react";
import Articles from "../components/Articles";
import { Link } from "react-router-dom";

function Earphones() {
  return (
    <>
      <div className="py-8 px-[84px] md:px-[276px] lg:py-[98px] lg:px-[578px] flex justify-center items-center bg-black">
        <h1 className="text-2xl text-white text-center uppercase">Earphones</h1>
      </div>
      <div className="max-container">
        <div className="pt-14 pb-[120px] flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-[52px] lg:gap-[125px]">
          <div className="rounded-lg md:px-[172px] lg:px-[60px] lg:pt-[70px] md:pb-[50px] lg:pb-[109px]">
            <picture>
              <source
                media="(min-width:992px )"
                srcSet="/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
              />
              <source
                media="(min-width:768px )"
                srcSet="/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg"
              />
              <img
                className="object-cover rounded-lg w-[345px] h-[312px] lg:w-421px lg:h-[381px]"
                src="/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"
                alt=""
              />
            </picture>
          </div>
          <div className="flex flex-col items-center text-center gap-6 md:gap-0 lg:py-[109px]">
            <span className="text-sepia text-sm md:mb-4">NEW PRODUCT</span>
            <h2 className="text-2xl md:text-4xl md:mb-8">
              YX1 WIRELESS EARPHONES
            </h2>
            <p className="text-base w-[327px] md:mb-6">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <Link to={`/product/${"yx1-earphones"}`} className="btn btn-first py-3">See product</Link>
          </div>
        </div>
      </div>
      <Articles />
    </>
  );
}

export default Earphones;
