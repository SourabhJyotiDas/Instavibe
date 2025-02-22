'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';

const messagesData = [
  { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?' },
  { id: 2, name: 'Jane Smith', lastMessage: 'Let’s catch up soon!' },
  { id: 3, name: 'Mike Johnson', lastMessage: 'Check out this link!' },
];

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const openChat = (user) => {
    setSelectedChat(user);
    setMessages([
      { sender: 'them', text: user.lastMessage },
      { sender: 'me', text: 'Sure, sounds good!' },
    ]);
  };

  const sendMessage = () => {
    if (messageInput.trim() === '') return;
    setMessages([...messages, { sender: 'me', text: messageInput }]);
    setMessageInput('');
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/3 bg-gray-100 p-4 border-r">
        <div className="relative mb-4">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div>
          {messagesData.map((user) => (
            <div
              key={user.id}
              className="p-3 border-b cursor-pointer hover:bg-gray-200"
              onClick={() => openChat(user)}
            >
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.lastMessage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="w-2/3 flex flex-col">
        {selectedChat ? (
          <>
            <div className="bg-gray-200 p-4 font-semibold border-b">
              {selectedChat.name}
            </div>
            <div className="flex-grow p-4 space-y-2 overflow-y-auto bg-white">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-xs p-2 rounded-md ${
                    msg.sender === 'me' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="p-4 border-t flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full p-2 border rounded-md focus:outline-none"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <button
                className="ml-2 bg-blue-500 text-white p-2 rounded-md"
                onClick={sendMessage}
              >
                <IoSend />
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
