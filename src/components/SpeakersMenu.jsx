import React from "react";
import { Link } from "react-router-dom";

function SpeakersMenu() {
  return (
    <div className="max-container">
      <div className="pt-14 py-[172px] flex flex-col items-center gap-[120px] lg:gap-160px">
        <div className="flex flex-col lg:flex-row items-center gap-[52px] lg:gap-[125px]">
          <div className="rounded-lg bg-belgua px-[62px] md:px-[243px] lg:px-[124px] pt-10 lg:pt-24 pb-[68px] lg:pb-[113px] ">
            <picture>
              <source media="(min-width:992px )" srcSet="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg" />
              <source media="(min-width:768px )" srcSet="/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg" />
              <img
                className="object-cover w-[202px] h-[243px] lg:w-[291px] lg:h-[350px]"
                src="/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
                alt=""
              />
            </picture>
          </div>
          <div
            className="flex flex-col items-center lg:items-start gap-6 md:gap-0
          lg:py-[109px]"
          >
            <span className="text-sepia text-sm md:mb-4">NEW PRODUCT</span>
            <h2 className="text-2xl md:text-4xl md:mb-8">ZX9 speaker</h2>
            <p className="text-base md:-w-[572px] lg:w-[445px] md:mb-6 lg:pb-10">
              Upgrade your sound system with the all new ZX9 active speaker.
              It's a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <Link to={`/product/${"zx9-speaker"}`} className="btn btn-first py-3">See product</Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-[52px] lg:gap-[125px]">
          <div className="rounded-lg bg-belgua px-[80px] md:px-[260px] lg:px-[136px] pt-10 lg:pt-20 pb-[68px] lg:pb-24">
            <picture>
              <source media="(min-width:992px )" srcSet="/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg" />
              <source media="(min-width:768px )" srcSet="/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg" />
              <img
              className="object-cover w-[202px] h-[243px] md:w-[170px] lg:w-[268px] lg:h-[385px]"
              src="/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"
              alt=""
            />
            </picture>

          </div>
          <div
            className="flex flex-col items-center lg:items-start gap-6 md:gap-0
          lg:pt-[144px] lg:pb-[108px]"
          >
            <h2 className="text-2xl md:text-4xl md:mb-8">ZX7 speaker</h2>
            <p className="text-base md:-w-[572px] lg:w-[445px] md:mb-6 lg:pb-10">
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </p>
            <Link to={`/product/${"zx7-speaker"}`} className="btn btn-first py-3">
              See product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeakersMenu;
