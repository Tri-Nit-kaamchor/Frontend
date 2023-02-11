import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";
const LandingNav = () => {
  const navBarBackground = "bg-pink-700";
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");

  return (
    <nav className={`${navBarBackground} z-40 w-full fixed top-0 py-[0.6rem] `}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">Doctor guys </h4>
        {isAboveSmallScreens ? (
          <div className="flex items-center text-center justify-between gap-16 font-opensans text-sm font-semibold text-white ">
            <Link to="/">Home </Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
          </div>
        ) : (
          <>Small screen</>
        )}
      </div>
    </nav>
  );
};

export default LandingNav;
