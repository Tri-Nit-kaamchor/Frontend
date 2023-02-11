import React, { useState } from "react";
import { defaultPath, ethers } from "ethers";
import MetaMaskOnboarding from "@metamask/onboarding";
import { useEffect } from "react";

const DoctorForm = ({ authToken, isLoggedIn, setToken, setLoggedIn }) => {
  const forwarderOrigin = "http://localhost:5173";
  const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

  const handleChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          localStorage.setItem("token", result[0]);
          setToken(result[0]);
          setLoggedIn(!isLoggedIn);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Need to install MetaMask");
      onboarding.startOnboarding();
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    licNo: "",
    hospital: "",
  });

  const handleSubmit = async (e) => {
    handleLogin()
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {});
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">DoctorForm</h1>
      <form
        className="flex flex-col items-center justify-center gap-5 p-10 h-[50%] w-[40%] bg-gray-100 border-2  rounded-xl shadow-lg mt-10 "
        onSubmit={handleSubmit}
      >
        <input
          className="p-2 rounded-lg w-full border-2 border-blue-400 "
          type="text"
          name="name"
          placeholder="Doctor's Name"
          required
          onChange={handleChange}
        />
        <input
          className="p-2 rounded-lg w-full border-2  border-blue-400"
          type="text"
          name="licNo"
          placeholder="License Number"
          required
          onChange={handleChange}
        />
        <input
          className="p-2 rounded-lg w-full border-2 border-blue-400"
          name="hospital"
          type="hospital"
          placeholder="Hospital / Place of Practice"
          required
          onChange={handleChange}
        />
        <button
          
          type="submit"
          className="px-6 py-3 bg-orange-400 rounded-lg hover:bg-orange-600 text-black font-semibold"
        >
          Connect wallet
        </button>
      </form>
      {isLoggedIn ? (
        <h1 className="text-2xl mt-10 font-bold text-purple-500">
          Hi{" "}
          <span className="underline  decoration-8  underline-offset-4 decoration-fuchsia-600 text-black">
            {authToken}
          </span>
          😍
        </h1>
      ) : (
        <h1 className="  text-red-500 font-bold animate-pulse text-3xl mt-5">
          Please Connect with MetaMask 
        </h1>
      )}
    </div>
  );
};

export default DoctorForm;
