import React from "react";
import Navbar from "../../components/shared/Navbar";
const Dashboard = () => {
  const user = localStorage.getItem("token");
  return (
    <>
      <Navbar />
      <h1>meow</h1>
      {user ? <div className="mt-20 mx-5">DASHBOARD</div> : <div>LOGIN FIRST PA</div>}
    </>
  );
};

export default Dashboard;
