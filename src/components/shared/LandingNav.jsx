import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";
const LandingNav = () => {
  const navBarBackground = "bg-white";
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");

  return (
    <nav className={`${navBarBackground} z-40 w-full fixed top-0 py-[0.6rem] `}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">Certi FY </h4>
        {isAboveSmallScreens ? (
          <div className="flex items-center text-center justify-between gap-16 font-opensans text-sm font-semibold text-white ">
            <Link to="/" className="text-xl text-black">
              Home
            </Link>
            <Link to="/about" className="text-xl text-black">
              About
            </Link>
            <Link to="/login" className="text-xl text-black">
              Login
            </Link>
            <Link to="/certificate" className="text-xl text-black">
              Certify
            </Link>
          </div>
        ) : (
          <>Small screen</>
        )}
      </div>
    </nav>
  );
};

export default LandingNav;
