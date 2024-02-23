import HeadphonesMenu from "../components/HeadphonesMenu";
import Articles from "../components/Articles";

function Headphones() {
  return (
    <>
      <div className="py-8 px-[84px] md:px-[276px] lg:py-[98px] lg:px-[578px] flex justify-center items-center bg-black">
        <h1 className="text-2xl text-white text-center uppercase">
          HEADPHONES
        </h1>
      </div>
      <HeadphonesMenu />
      <Articles />
    </>
  );
}

export default Headphones;
