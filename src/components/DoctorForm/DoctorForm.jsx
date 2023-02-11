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
          placeholder="name"
          required
          onChange={handleChange}
        />
        <input
          className="p-2 rounded-lg w-full border-2  border-blue-400"
          type="text"
          name="licNo"
          placeholder="licNo"
          required
          onChange={handleChange}
        />
        <input
          className="p-2 rounded-lg w-full border-2 border-blue-400"
          name="hospital"
          type="hospital"
          placeholder="hospital"
          required
          onChange={handleChange}
        />
        <button
          onClick={handleLogin}
          type="submit"
          className="px-6 py-3 bg-orange-400 rounded-lg hover:bg-orange-600 text-black font-semibold"
        >
          Connect wallet
        </button>
      </form>
      {isLoggedIn ? (
        <h1>{authToken}</h1>
      ) : (
        <h1>please be less "Diverse🦄" and login properly</h1>
      )}
    </div>
  );
};

export default DoctorForm;
