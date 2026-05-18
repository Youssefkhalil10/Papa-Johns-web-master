import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../src/firebase';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen bg-gray-100">
  <form
    onSubmit={handleLogin}
    className="w-[90%] sm:w-[70%] bg-white shadow-md rounded-lg p-6"
  >
    <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
      Login
    </h2>

    <div className="mb-4">
      <label className="block text-gray-700 mb-1">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 mb-1">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    <button
      type="submit"
      className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-800 transition duration-300"
    >
      Login
    </button>
  </form>
</div>

  );
}
