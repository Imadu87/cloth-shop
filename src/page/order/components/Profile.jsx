import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  // dummy user (baad me Redux / API se aayega)
  const user = {
    name: "Ali Khan",
    phone: "+92 300 1234567",
    address: "123 Street",
    city: "Lahore",
  };

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white shadow rounded-xl p-6">
        
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
          My Profile
        </h2>

        {/* Profile Info */}
        <div className="space-y-4 text-gray-700">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium">{user.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{user.phone}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium">{user.address}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">City</p>
            <p className="font-medium">{user.city}</p>
          </div>
        </div>

        {/* Button */}
        <Link to="/settings">
        <button className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
          Edit Profile
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Profile;