import { TiThMenu } from "react-icons/ti";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import useLogout from "../hooks/useLogout";
import { useSelector } from "react-redux";
import { MdLogout } from "react-icons/md";

function Navbar() {
  const [show, setShow] = useState(false);
  const { logout, error } = useLogout();
  const { user } = useSelector((state) => state.user);

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
          <button onClick={() => setShow(!show)}>
            <BsCart2 className="text-xl text-white" />
          </button>
          <div className="flex items-center gap-4">
            <p className="text-lg text-sepia">{user.displayName}</p>
            <button onClick={logout} className="px-4 py-3 bg-sepia rounded-lg">
              <MdLogout className="text-xl text-white"/>
            </button>
          </div>
          {/* {show && <Cart/>} */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
