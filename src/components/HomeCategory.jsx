import { Link } from "react-router-dom";

function HomeCategory() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[138px] rounded-lg max-w-[327px] max-h-[600px] md:max-w-[689px] lg:max-w-[1025px] md:max-h-[720px] px-6 py-14 md:px-[170px] md:pb-14 md:pt-[52px] lg:pt-[169px] lg:pb-[124px] lg:pl-[118px] lg:pr-24 bg-sepia">
        <picture>
          <source
            className="object-cover"
            media="(min-width: 992px)"
            srcSet="/assets/home/desktop/image-speaker-zx9.png"
            alt="speaker-zx9"
            width={410}
            height={493}
          />
          <source
            className="object-cover"
            media="(min-width:768px)"
            srcSet="/assets/home/tablet/image-speaker-zx9.png"
            alt="speaker-zx9"
            // width={198}
            // height={237}
          />
          <img
            className="object-cover"
            width={172}
            height={207}
            src="/assets/home/mobile/image-speaker-zx9.png"
            alt="speaker-zx9"
          />
        </picture>
        <div className="flex flex-col items-center lg:items-start gap-8 md:gap-0 text-white">
          <h2 className="text-[36px] md:text-5xl text-center font-bold leading-10 tracking-[1.29px] md:mb-6">
            ZX9 SPEAKER
          </h2>
          <p className="text-base text-center opacity-75 md:opacity-100 md:mb-10">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to={`/product/${"zx9-speaker"}`} className="btn btn-dark py-3">See product</Link>
        </div>
      </div>
      <div className="py-[101px] pr-[99px] md:pr-[497px] lg:pr-[917px] pl-6 md:pl-[62px] lg:pl-[126px] rounded-lg max-w-[327px] max-h-[600px] md:max-w-[689px] md:max-h-[720px] bg-sm md:bg-md lg:bg-lg flex flex-col items-start gap-8">
        <h2 className="text-2xl uppercase">ZX7 SPEAKER</h2>
        <Link to={`/product/${'zx7-speaker'}`} className="btn btn-border">
        See product
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-3">
        <picture>
          <source
            className="rounded-lg object-cover"
            media="(min-width: 992px )"
            srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="earphones image"
            width={540}
            height={320}
          />
          <source
            className="rounded-lg object-cover"
            media="(min-width: 768px )"
            srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
            alt="earphones image"
            width={339}
            height={320}
          />
          <img
            className="rounded-lg object-cover"
            src="/assets/home/mobile/image-earphones-yx1.jpg"
            alt="earphones image"
          />
        </picture>
        <div className="min-w-[327px] min-h-[200px] md:max-w-[339px] md:max-h-[320px] lg:max-w-[540px] lg:max-h-[320px] pl-6 md:pl-10 lg:pl-[95px] pr-[58px] md:pr-[51px] lg:pr-[198px] py-10 md:py-[101px] flex flex-col items-start gap-8 bg-belgua rounded-lg">
          <h2 className="text-2xl">YX1 EARPHONES</h2>
          <Link to={`/product/${'yx1-earphones'}`} className="btn btn-two btn-border">See product</Link>
        </div>
      </div>
    </div>
  );
}

export default HomeCategory;
