import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function YouMayAlso({ prod }) {
  return (
    <div className="max-container py-[100px]">
      <h1 className="uppercase text-3xl text-center mb-16">
        You may also like
      </h1>
      <ul className="flex flex-col gap-[66px] md:flex-row md:gap-8 items-center justify-center md:justify-between">
        <li className="relative category_also cursor-pointer rounded-lg  flex flex-col items-center justify-center pb-[30px] mb-14  pt-[100px]">
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <div className="px-[100px] py-[62px] bg-belgua rounded-lg mb-10">
              <img
                className="w-[140px] h-[124px]"
                src={prod.others[0].image.tablet.slice(1)}
                alt=""
              />
            </div>

            <h1 className="text-xl font-bold md:text-lg mb-8">
              {prod.others[0].name}
            </h1>
            <Link to={`/headphones`} className="btn btn-first py-3">
              See product
            </Link>
          </div>
        </li>
        <li className="relative category_also cursor-pointer  rounded-lg  flex flex-col items-center justify-center pb-[30px] mb-14  pt-[100px]">
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <div className="px-[100px] py-[62px] bg-belgua rounded-lg mb-10">
              <img
                className="w-[140px] h-[124px] "
                src={prod.others[1].image.tablet.slice(1)}
                alt=""
              />
            </div>

            <h1 className="text-xl font-bold md:text-lg mb-8">
              {prod.others[1].name}
            </h1>
            <Link to={"/speakers"} className="btn btn-first py-3">
              See product
            </Link>
          </div>
        </li>
        <li className=" relative category_also cursor-pointer  rounded-lg  flex flex-col items-center justify-center pb-[30px] mb-14  pt-[100px]">
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <div className="px-[100px] py-[62px] bg-belgua rounded-lg mb-10">
              <img
                className="w-[140px] h-[124px] "
                src={prod.others[2].image.tablet.slice(1)}
                alt=""
              />
            </div>

            <h1 className="text-xl font-bold md:text-lg mb-8">
              {prod.others[2].name}
            </h1>
            <Link to={"/earphones"} className="btn btn-first py-3">
              See product
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default YouMayAlso;
