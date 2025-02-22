'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaCog } from 'react-icons/fa';
import { BsGrid3X3, BsBookmark, BsCameraReels } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { MdVerified } from 'react-icons/md';

const Profile = () => {
  const [tab, setTab] = useState('posts');
  const isVerified = true;

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="flex items-center space-x-10">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
          <Image src="/profile-pic.jpg" alt="Profile" width={128} height={128} />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-semibold">username</h1>
            {isVerified && <MdVerified className="text-blue-500" size={20} />}
            <button className="ml-4 px-4 py-1 border border-gray-300 rounded-md text-sm font-semibold">Edit Profile</button>
            <FaCog className="ml-4 text-xl cursor-pointer" />
          </div>
          <div className="flex space-x-6 mt-4">
            <span><strong>54</strong> posts</span>
            <span><strong>1.2M</strong> followers</span>
            <span><strong>500</strong> following</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">Bio goes here...</p>
        </div>
      </div>

      <div className="flex justify-center space-x-10 border-t border-gray-300 mt-8 pt-4">
        <button onClick={() => setTab('posts')} className={`flex items-center space-x-2 ${tab === 'posts' ? 'text-black' : 'text-gray-400'}`}>
          <BsGrid3X3 size={20} /> <span>Posts</span>
        </button>
        <button onClick={() => setTab('reels')} className={`flex items-center space-x-2 ${tab === 'reels' ? 'text-black' : 'text-gray-400'}`}>
          <BsCameraReels size={20} /> <span>Reels</span>
        </button>
        <button onClick={() => setTab('saved')} className={`flex items-center space-x-2 ${tab === 'saved' ? 'text-black' : 'text-gray-400'}`}>
          <BsBookmark size={20} /> <span>Saved</span>
        </button>
        <button onClick={() => setTab('tagged')} className={`flex items-center space-x-2 ${tab === 'tagged' ? 'text-black' : 'text-gray-400'}`}>
          <AiOutlineUser size={20} /> <span>Tagged</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-1 mt-4">
        {/* Dummy images for posts */}
        {[...Array(9)].map((_, index) => (
          <div key={index} className="w-full h-32 bg-gray-300"></div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
