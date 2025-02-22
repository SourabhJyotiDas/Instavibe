'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([
    { id: 1, name: 'John Doe', username: 'johndoe', profilePic: '/user1.jpg' },
    { id: 2, name: 'Jane Smith', username: 'janesmith', profilePic: '/user2.jpg' },
    { id: 3, name: 'Mike Johnson', username: 'mikejohnson', profilePic: '/user3.jpg' },
    { id: 4, name: 'Emily Brown', username: 'emilybrown', profilePic: '/user4.jpg' },
  ]);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Scrollable Suggestions */}
      <div className="mt-6 w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <h2 className="text-lg font-semibold p-3 border-b border-gray-300">Suggested People</h2>
        <div className="max-h-60 overflow-y-auto">
          {suggestions.map((user) => (
            <div key={user.id} className="flex items-center p-3 hover:bg-gray-100 cursor-pointer">
              <Image src={user.profilePic} alt={user.name} width={40} height={40} className="rounded-full" />
              <div className="ml-3">
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
