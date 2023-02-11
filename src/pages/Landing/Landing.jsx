import React from "react";
import LandingNav from "../../components/shared/LandingNav";

const Landing = () => {
  return (
    <div className="mt-20 ">
      <LandingNav />
      <section className="h-[100vh] flex flex-row items-center justify-center mt-10">
        <div className="bg-grey-200 grid md:grid-cols-3 place-content-center bg-red-200 h-full w-full md:mx-5 md:gap-2 ">
          <div className="bg-blue-200 h-[50vh] md:h-[60vh] w-[100vw] md:w-full md:col-span-1 flex justify-center items-center">
            <h1 className="font-bold text-3xl">Home</h1>
          </div>
          <div className="bg-blue-200  h-[50vh] md:h-[60vh] w-[100vw] md:w-full md:col-span-2 flex justify-center items-center">
            <h1 className="font-bold text-3xl">images</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
