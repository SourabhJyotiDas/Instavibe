'use client';

import { useState } from 'react';
import { FiLogOut, FiCheckCircle, FiUser, FiLock, FiBell } from 'react-icons/fi';

const Settings = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleLogout = () => {
    // Handle logout logic here
    console.log('User logged out');
  };

  const toggleVerification = () => {
    setIsVerified(!isVerified);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-96 p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        <ul className="space-y-4">
          <li className="flex items-center justify-between cursor-pointer hover:bg-gray-200 p-2 rounded-md">
            <FiUser className="text-lg" /> <span>Update Profile</span>
          </li>
          <li className="flex items-center justify-between cursor-pointer hover:bg-gray-200 p-2 rounded-md">
            <FiLock className="text-lg" /> <span>Change Password</span>
          </li>
          <li className="flex items-center justify-between cursor-pointer hover:bg-gray-200 p-2 rounded-md">
            <FiBell className="text-lg" /> <span>Notifications</span>
          </li>
          <li 
            className="flex items-center justify-between cursor-pointer hover:bg-gray-200 p-2 rounded-md"
            onClick={toggleVerification}
          >
            <FiCheckCircle className={`text-lg ${isVerified ? 'text-blue-500' : 'text-gray-500'}`} />
            <span>{isVerified ? 'Verified' : 'Get Verified'}</span>
          </li>
          <li 
            className="flex items-center justify-between cursor-pointer hover:bg-red-100 p-2 rounded-md text-red-500"
            onClick={handleLogout}
          >
            <FiLogOut className="text-lg" /> <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
