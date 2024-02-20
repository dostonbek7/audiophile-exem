import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-chaos-black pt-[52px] md:pt-[60px] pb-10 md:pb-[46px] lg:pb-12 relative">
      <div className="max-container">
        <span className="absolute top-0 left-[37%] md:left-[39px] lg:left-[165px] right-[37%] w-[101px] h-1 bg-sepia"></span>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center md:items-start gap-12 mb-12 md:gap-8 md:mb-8 lg:mb-9">
          <h1 className="text-white text-xl cursor-pointer">audiophile</h1>
          <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-[34px] text-white text-xs tracking-[2px]">
            <Link className="text" to={"/"}>
              HOME
            </Link>
            <Link className="text" to={"/headphones"}>
              HEADPHONES
            </Link>
            <Link className="text" to={"/speakers"}>
              SPEAKERS
            </Link>
            <Link className="text" to={"/earphones"}>
              EARPHONES
            </Link>
          </nav>
        </div>
        <div className="lg:flex items-center justify-between mb-12 md:mb-20 lg:mb-[56px]">
          <p className="text-white md:w-[689px] lg:w-[540px]">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>
          <div className="hidden lg:flex items-center gap-4">
            <button>
              <FaFacebookSquare className="text-2xl text-white" />
            </button>
            <button>
              <FaTwitterSquare className="text-2xl text-white" />
            </button>
            <button>
              <FaInstagram className="text-2xl text-white" />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-[50px]">
          <p className="text-white text-base font-bold">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex items-center gap-4 lg:hidden">
            <button>
              <FaFacebookSquare className="text-2xl text-white" />
            </button>
            <button>
              <FaTwitterSquare className="text-2xl text-white" />
            </button>
            <button>
              <FaInstagram className="text-2xl text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
