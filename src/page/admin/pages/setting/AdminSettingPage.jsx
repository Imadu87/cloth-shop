import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AdminSettingsPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [admin, setAdmin] = useState({
    name: "Admin User",
    email: "admin@email.com",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    darkMode: false,
  });

  const handleChange = (key, value) => {
    setAdmin((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="p-6 md:ml-64 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Admin Settings</h2>

      <div className="max-w-4xl mx-auto space-y-6">

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="font-semibold mb-4">Profile Information</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="border rounded-lg px-3 py-2"
              placeholder="Admin Name"
              value={admin.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />

            <input
              className="border rounded-lg px-3 py-2"
              placeholder="Email"
              value={admin.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            <input
              className="border rounded-lg px-3 py-2"
              placeholder="Phone"
              value={admin.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />

            <input type="file" className="border rounded-lg px-3 py-2" />
          </div>
        </div>

        {/* Password Card */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="font-semibold mb-4">Change Password</h3>

          <div className="space-y-4">

            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Current Password"
              value={admin.currentPassword}
              onChange={(e) =>
                handleChange("currentPassword", e.target.value)
              }
            />

            {/* New Password with eye */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border rounded-lg px-3 py-2 pr-10"
                placeholder="New Password"
                value={admin.newPassword}
                onChange={(e) =>
                  handleChange("newPassword", e.target.value)
                }
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <input
              type="password"
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Confirm Password"
              value={admin.confirmPassword}
              onChange={(e) =>
                handleChange("confirmPassword", e.target.value)
              }
            />

          </div>
        </div>

        {/* Theme Card */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="font-semibold mb-4">Appearance</h3>

          <div className="flex items-center justify-between">
            <span>Dark Mode</span>

            <button
              onClick={() =>
                handleChange("darkMode", !admin.darkMode)
              }
              className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
                admin.darkMode ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow transform transition ${
                  admin.darkMode ? "translate-x-7" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Save */}
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminSettingsPage;