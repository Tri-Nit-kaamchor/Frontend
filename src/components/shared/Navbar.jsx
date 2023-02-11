import React, { useEffect } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
const Navbar = ({ authToken, isLoggedIn, setToken, setLoggedIn }) => {
  const handleLogout = async () => {
    console.log("Navbar : Logging out...");
    await localStorage.removeItem("token");
    setToken("");
    setLoggedIn(!isLoggedIn);
  };
  useEffect(() => {}, [isLoggedIn]);

  const navBarBackground = "bg-pink-700";
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  return (
    <nav className={`${navBarBackground} z-40 w-full fixed top-0 py-[0.6rem] `}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">Doctor guys </h4>
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <a>Home 1</a>
            <a>Dashboard</a>
            <button>
              {authToken ? <h1>{authToken}</h1> : <div>NotloggedIn</div>}
            </button>
            {isLoggedIn ? (
              <button
                className="text-white  font-bold px-5 py-3 bg-red-500 hover:bg-red-700 transition-colors duration-150 rounded-lg"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <div>NotloggedIn</div>
            )}
          </div>
        ) : (
          <>Small screen</>
        )}
      </div>
    </nav>
  );
};

export default Navbar;