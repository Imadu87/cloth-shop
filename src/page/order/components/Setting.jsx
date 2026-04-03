import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    name: "Ali Khan",
    phone: "+92 300 1234567",
    address: "123 Street",
    city: "Lahore",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Data:", formData);

    // yahan Redux / API call kar sakte ho
  };

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
          Profile Settings
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>
          <Link to="/profile">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              Save Changes
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default ProfileSettings;
