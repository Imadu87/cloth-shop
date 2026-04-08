import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const AdminLogoutPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear auth (localStorage / redux etc)
    localStorage.removeItem("admin");

    // redirect to login
    navigate("/auth");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow rounded-2xl p-8 max-w-md w-full text-center border">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-2xl">
            <FaSignOutAlt />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">
          Logout
        </h2>

        <p className="text-gray-500 mb-6">
          Are you sure you want to logout from admin panel?
        </p>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg border hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminLogoutPage;