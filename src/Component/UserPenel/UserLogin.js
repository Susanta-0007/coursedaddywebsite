import React, { useState, useEffect } from "react";
import UserpenelHead from "./UserpenelHead";
import UserPenel from "./UserPenel"
const UserLogin = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Check if the user is already logged in (using localStorage)
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    
    if (userId.trim() === '123' && password.trim() === '123') {
      // Save the login status to localStorage
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } else {
      alert("Invalid login credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    // Clear the user ID and password fields
    setUserId("");
    setPassword("");
    // Reset the isLoggedIn state to false
    setIsLoggedIn(false);
    // Clear the login status from localStorage
    localStorage.removeItem("isLoggedIn");
  };

  return isLoggedIn ? (
    <div>
      <div className='flex justify-center gap-10 max-sm:gap-4'>
        <UserpenelHead />
        <button
          className="bg-red-500 h-[40px] hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <UserPenel />
    </div>

  ) : (
    <div className="flex justify-center items-center pt-10 bg-gray-100">
      <div className="w-full max-w-xs">
        <h1 className="text-2xl text-center font-bold mb-4">User Login</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="userId"
            >
              User ID:
            </label>
            <input
              required
              className="shadow appearance-none border-2 border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              required
              className="shadow appearance-none border-2 border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default UserLogin;
