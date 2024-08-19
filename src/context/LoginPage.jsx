import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../context/user'; 

const LoginPage = ({ userType }) => {
  console.log("userType:", userType); // Should log the correct userType
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userGroup = users[userType];
    console.log("UserGroup:", userGroup); // Should log the user group array

    const user = userGroup?.find(u => u.username === username && u.password === password);
    console.log("Found User:", user); // Should log the user object if found

    if (user) {
      navigate(`/dashboard/${userType}`);
    } else {
      setError('Invalid username or password');
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white">Log in to your {userType} account</h2>
        </div>

        {error && (
          <div className="mb-4 text-red-500 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-20 text-white placeholder-gray-400"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-20 text-white placeholder-gray-400"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
