import React from "react";
import LandingNav from "../../components/shared/LandingNav";
import images from "../../assets/images.png";
const Landing = () => {
  return (
    <div className="mt-5 ">
      <LandingNav />
      <section className="h-[100vh] flex flex-row items-center justify-center md:mt-5 mt-20">
        <div className="bg-grey-200 grid md:grid-cols-3 place-content-center bg-gray-100 h-full w-full md:mx-5 md:gap-2 ">
          <div className="  h-[50vh] md:h-[80vh] w-[100vw] md:w-[60vw] md:col-span-1 flex justify-center md:items-start items-center mx-5 px-5 md:px-0 ">
            <div className="mt-10 md:translate-x-20 ">

              <h1 className="font-bold md:text-8xl font-serif text-3xl ">Medical ✨</h1>
              <h1 className="font-bold md:text-8xl font-serif  text-3xl">Certificates, </h1>
              <h1 className="font-bold md:text-8xl font-serif text-3xl underline decoration-green-300 underline-offset-4 decoration-[0.7rem] md:decoration-[1.5rem]">Made Easy </h1>
              <p className="md:w-[50%] w-full mt-10 md:text-xl text-xs font-sans font-semibold">You can prove you own your body but can you prove your Medical Certificates? Ever had a problem to verify if your Medical Reports are Valid of not ? Worry Not with CredleyFi and the power of Blockchain we can get your Reports verified at the Speed of Light 🚀</p>
              <button className="mt-10 hover:border-2 md:scale-[100%] scale-[60%]  hover:border-white border-dashed md:translate-x-4 px-10 py-4 rounded-full bg-black text-white font-medium animate-pulse">Try it for Free</button>
            </div>
          </div>
          <div className=" h-[50vh] md:h-[80vh] w-[100vw] md:w-full md:col-span-2 flex justify-end mt-10 md:mt-0  items-center">
            <img className="scale-[87%]" src={images} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
