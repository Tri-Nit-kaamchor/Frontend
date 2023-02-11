import React, { useState } from "react";
import DoctorForm from "../../components/DoctorForm/DoctorForm";
import Navbar from "../../components/shared/Navbar";

const Home = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  console.log(`home is logged : ${isLoggedIn}`);
  return (
    <>
      <Navbar
        setToken={setToken}
        setLoggedIn={setLoggedIn}
        isLoggedIn={isLoggedIn}
        authToken={token}
      />


      <DoctorForm
        setToken={setToken}
        setLoggedIn={setLoggedIn}
        isLoggedIn={isLoggedIn}
        authToken={token}
      />
    </>
  );
};

export default Home;
