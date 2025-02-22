'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import Image from 'next/image';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic
  };


  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center space-y-6 w-96">
        <div className="w-full p-10 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center">
          <Image src="/instagram-logo.png" alt="Instagram" width={175} height={50} />
          <form className="w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-all">
              Sign Up
            </button>
          </form>
          <div className="flex items-center w-full my-4">
            <div className="flex-1 border-b border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-b border-gray-300"></div>
          </div>
          <div className="w-full space-y-3">
            <button className="flex items-center justify-center w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-all">
              <FaFacebook className="mr-2" /> Sign Up with Facebook
            </button>
            <button className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition-all">
              <FaGoogle className="mr-2" /> Sign Up with Google
            </button>
          </div>
        </div>
        <div className="text-center text-sm bg-white border border-gray-300 p-4 w-full rounded-lg shadow-md">
          Already have an account?{' '}
          <Link href="/pages/login" className="text-blue-500 font-semibold hover:underline">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
