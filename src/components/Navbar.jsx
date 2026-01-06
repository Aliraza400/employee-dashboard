import React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth()
  return (
    <div className="bg-blue-600 text-white w-[90%] mx-auto p-4 flex items-center justify-between">
      <h1 className="font-bold w-full">Employee Dashboard</h1>
      <button onClick={logout} className="w-full bg-blue-600 text-white py-2 rounded hover:cursor-pointer">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
