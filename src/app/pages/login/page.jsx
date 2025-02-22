'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center space-y-6 w-96">
        <div className="w-full p-10 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center">
          <Image src="/instagram-logo.png" alt="Instagram" width={175} height={50} />
          <form className="w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Phone number, username, or email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-all">
              Log In
            </button>
          </form>
          <div className="flex items-center w-full my-4">
            <div className="flex-1 border-b border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-b border-gray-300"></div>
          </div>
          <div className="w-full space-y-3">
            <button className="flex items-center justify-center w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-all">
              <FaFacebook className="mr-2" /> Login with Facebook
            </button>
            <button className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition-all">
              <FaGoogle className="mr-2" /> Login with Google
            </button>
          </div>
          <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline mt-3">
            Forgot password?
          </Link>
        </div>
        <div className="text-center text-sm bg-white border border-gray-300 p-4 w-full rounded-lg shadow-md">
          Don't have an account?{' '}
          <Link href="/pages/signup" className="text-blue-500 font-semibold hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
