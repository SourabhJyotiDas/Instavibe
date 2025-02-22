"use client";

import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BsSearch, BsPlusSquare } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const Sidebar = ({ user }) => {
  const handleLogout = async () => {
    toast.success("Logout Successfully");
  };

  return (
    <nav className="hidden md:flex flex-col h-screen w-20 bg-white text-black items-center py-6 space-y-6 border-r border-gray-300">
      <div className="flex flex-col space-y-6 flex-grow">
        <Link href="/pages/homepage" className="group relative">
          <AiOutlineHome className="text-2xl hover:text-gray-600" />
          <span className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Home
          </span>
        </Link>
        <Link href="/pages/search" className="group relative">
          <BsSearch className="text-2xl hover:text-gray-600" />
          <span className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Search
          </span>
        </Link>
        <Link href="/pages/explore" className="group relative">
          <MdOutlineExplore className="text-2xl hover:text-gray-600" />
          <span className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Explore
          </span>
        </Link>
        <Link href="/pages/messages" className="group relative">
          <RiMessengerLine className="text-2xl hover:text-gray-600" />
          <span className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Messages
          </span>
        </Link>
        <Link href="/pages/create" className="group relative">
          <BsPlusSquare className="text-2xl hover:text-gray-600" />
          <span className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Create
          </span>
        </Link>
      </div>
      <div className="flex flex-col space-y-6 mb-6">
        <Link href="/pages/profile" className="group relative">
          <FaRegUser className="border-black border-2 rounded-full text-2xl hover:text-gray-600" />
          <span className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Profile
          </span>
        </Link>
        <Link href="/pages/settings" className="group relative">
          <FiSettings className="text-2xl hover:text-gray-600" />
          <span className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Settings
          </span>
        </Link>
        <Link href="/pages/login" className="group relative">
          <FaUserPlus className="text-2xl hover:text-gray-600" />
          <span className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Sign Up
          </span>
        </Link>
        <button onClick={handleLogout} className="group relative">
          <FiLogOut className="text-2xl hover:text-gray-600" />
          <span className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Logout
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
