// src/components/UserProfile.jsx
import React from "react";

const UserProfile = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex flex-col items-center">
        {/* Profile Image with Hover Scale */}
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="w-32 h-32 sm:w-24 sm:h-24 rounded-full object-cover mb-4 
                     transition-transform duration-300 ease-in-out hover:scale-110"
        />

        {/* Name with Hover Text Effect */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300 ease-in-out hover:text-blue-500">
          John Doe
        </h2>

        {/* User Description */}
        <p className="text-gray-600 text-center">
          Frontend Developer | Tech Enthusiast | Lifelong Learner
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
