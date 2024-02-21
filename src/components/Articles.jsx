function Articles() {
  return (
    <div className="flex flex-col items-center lg:flex-row-reverse lg:items-center gap-10 pb-[120px] md:pb-24 pt-10">
      <picture>
        <source
          className="rounded-lg"
          srcSet="/assets/image-lg.jpg"
          alt="article-img"
          width={540}
          height={588}
          media="(min-width: 992px)"
        />
        <source
          className="rounded-lg"
          srcSet="/assets/image-md.jpg"
          alt="article-img"
          width={689}
          height={300}
          media="(min-width: 640px)"
        />
        <img
          className="rounded-lg min-w-[327px] min-h-[300px]"
          src="/assets/image-sm.jpg"
          alt="article-img"
        />
      </picture>
      <img src="" alt="" />
      <div className="flex flex-col gap-8 md:gap-8 items-center">
        <h1 className="text-2xl uppercase md:max-w-[573px] lg:max-w-[445px]">
          Bringing you the <span className="text-sepia">best</span> audio gear
        </h1>
        <p className="text-base md:max-w-[573px] lg:max-w-[445px] ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default Articles;
