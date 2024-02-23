import { Link } from "react-router-dom";

function HeadphonesMenu() {
  return (
    <div className="max-container">
      <div className="pt-14 pb-[172px] flex flex-col items-center gap-[120px] lg:gap-[120px]">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-[52px] lg:gap-[125px]">
          <div className="bg-belgua px-[54px] md:px-[235px] lg:px-[95px] pt-10 lg:pt-[65px] pb-[68px] lg:pb-[108px] rounded-lg">
            <picture>
              <source media="(min-width:992px )" srcSet="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg" />
              <source media="(min-width:768px )" srcSet="/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg" />
              <img
              className="object-cover w-[223px] h-[243px] lg:w-[349px] lg:h-[386px]"
              src="/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
              alt=""
            />
            </picture>

          </div>

          <div className="flex flex-col gap-6 md:gap-0 items-center lg:items-start text-center lg:text-left lg:py-[108px]">
            <span className="text-sm text-sepia md:mb-4">NEW PRODUCT</span>
            <h2 className="text-2xl md:text-4xl md:mb-8">
              XX99 Mark II Headphones
            </h2>
            <p className="text-base md:mb-6 lg:mb-10 lg:w-[445px]">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <Link to={`/product/${"xx99-mark-two-headphones"}`} className="btn btn-first py-3">See product</Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-[52px] lg:gap-[125px]">
          <div className="bg-belgua px-[76px] md:px-[257px] lg:px-[122px] pt-10 lg:pt-[66px] pb-[86px] lg:pb-[109px] rounded-lg">
            <img
              className="object-cover w-[173px] h-[225px] lg:w-[296px] lg:h-[386px]"
              src="/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-6 md:gap-0 items-center lg:items-start text-center lg:text-left lg:py-[126px]">
            <h2 className="text-2xl md:text-4xl md:mb-8">
              XX99 Mark I Headphones
            </h2>
            <p className="text-base md:mb-6 lg:mb-10 lg:w-[445px]">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <Link
              to={`/product/${"xx99-mark-one-headphones"}`}
              className="btn btn-first py-4"
            >
              See product
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-[52px] lg:gap-[125px]">
          <div className="bg-belgua px-[55px] md:px-[236px] lg:px-[84px] pt-10 lg:pt-[83px] pb-[86px] lg:pb-[88px] rounded-lg">
            <picture>
              <source media="(min-width:992px )" srcSet="/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg" />
              <source media="(min-width:768px )" srcSet="/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg" />
              <img
                className="object-cover w-[215px] h-[225px] lg:w-[372px] lg:h-[389px]"
                src="/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"
                alt=""
              />
            </picture>
          </div>

          <div className="flex flex-col gap-6 md:gap-0 items-center lg:items-start text-center lg:text-left lg:py-[126px]">
            <h2 className="text-2xl md:text-4xl md:mb-8">XX59 Headphones</h2>
            <p className="text-base md:mb-6 lg:mb-10 lg:w-[445px]">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <Link
              to={`/product/${"xx59-headphones"}`}
              className="btn btn-first py-4"
            >
              See product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadphonesMenu;
