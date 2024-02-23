import React from "react";
import Articles from "../components/Articles";
import SpeakersMenu from "../components/SpeakersMenu";

function Speakers() {
  return (
    <>
      <div className="py-8 px-[84px] md:px-[276px] lg:py-[98px] lg:px-[578px] bg-black flex justify-center items-center">
        <h1 className="text-2xl text-white text-center uppercase">Speakers</h1>
      </div>
      <SpeakersMenu/>
      <Articles />
    </>
  );
}

export default Speakers;
