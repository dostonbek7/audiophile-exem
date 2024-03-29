import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-bg md:hero-bg-md lg:hero-lg bg-thamar-black">
      <div className="max-container">
        <div className="relative flex flex-col items-center md:flex-row-reverse lg:justify-start gap-0 lg:gap-5">
          <picture className="text-center items-center justify-center hidden lg:flex ">
            <source
              media="(min-width:992px)"
              className="w-full h-full"
              srcSet="/assets/home/desktop/image-hero.jpg"
            />
            <source
              media="(min-width:768px)"
              className="w-full h-full"
              srcSet="/assets/home/tablet/image-header.jpg"
            />
            <img
              src="/assets/home/mobile/image-header.jpg"
              className="w-full h-full"
              alt=""
            />
          </picture>
          <div className="flex flex-col items-center lg:items-start w-[328px] text-center z-20 pt-[108px] pb-[248px]">
            <span className="text-sm uppercase text-white mb-4 lg:mb-6">
              NEW PRODUCT
            </span>
            <h2 className="text-[36px] lg:text-2xl text-white uppercase leading-10 font-blod mb-6">
              XX99 Mark II HeadphoneS
            </h2>
            <p className="text-base text-white mb-7 lg:mb-10">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to={"/headphones"} className="btn btn-first py-3">
              See product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
