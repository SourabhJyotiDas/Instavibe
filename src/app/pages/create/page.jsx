'use client';

import { useState } from 'react';
import { FaImage, FaMapMarkerAlt } from 'react-icons/fa';

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post submission logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {image && <img src={image} alt="Preview" className="w-full rounded-lg" />}
          <label className="block bg-gray-200 p-3 rounded-lg cursor-pointer text-center text-gray-700 flex items-center justify-center space-x-2">
            <FaImage />
            <span>Upload Image</span>
            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
          </label>
          <textarea
            placeholder="Write a description..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Add location"
              className="w-full focus:outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
