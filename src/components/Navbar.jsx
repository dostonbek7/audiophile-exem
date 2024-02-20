import { TiThMenu } from "react-icons/ti";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-black relative">
      <div className="max-container">
        <div className="flex justify-between items-center py-8">
          <div className="flex items-center gap-[76px] md:gap-[50px]">
            <button className="md:hidden">
              <TiThMenu className="text-xl text-white" />
            </button>
            <h1 className="text-xl text-white cursor-pointer">audiophile</h1>
          </div>
          <nav className="hidden text-white md:flex items-center gap-10">
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
          <button>
            <BsCart2 className="text-xl text-white" />
          </button>
          {/* <hr  className="absolute bottom-[-2px] left-0 right-0 h-1 w-full text-white"/> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
