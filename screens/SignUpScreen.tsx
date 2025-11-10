
import React from 'react';
import { Screen } from '../types';
import { BackIcon, VPayLogo } from '../components/icons';

interface SignUpScreenProps {
  setScreen: (screen: Screen) => void;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ setScreen }) => {
  return (
    <div className="min-h-screen bg-vpay-dark text-white p-6 flex flex-col">
      <header className="absolute top-4 left-4">
        <button onClick={() => setScreen(Screen.Onboarding)} className="p-2">
          <BackIcon className="w-6 h-6" />
        </button>
      </header>
      
      <div className="text-center mt-12">
          <VPayLogo className="w-16 h-16 text-vpay-gold mx-auto" />
          <h1 className="text-3xl font-bold mt-2">Create Account</h1>
          <p className="text-gray-400 mt-2">Join VPay to start sending money easily.</p>
      </div>

      <div className="flex-grow flex flex-col justify-center space-y-4 mt-8">
        <input 
            type="text" 
            placeholder="Full Name"
            className="w-full bg-vpay-dark-2 p-4 rounded-lg border border-gray-700 focus:border-vpay-gold focus:ring-vpay-gold focus:outline-none"
        />
        <input 
            type="email" 
            placeholder="Enter Your Email"
            className="w-full bg-vpay-dark-2 p-4 rounded-lg border border-gray-700 focus:border-vpay-gold focus:ring-vpay-gold focus:outline-none"
        />
        <input 
            type="password" 
            placeholder="Create Password"
            className="w-full bg-vpay-dark-2 p-4 rounded-lg border border-gray-700 focus:border-vpay-gold focus:ring-vpay-gold focus:outline-none"
        />
        
        <button
          onClick={() => setScreen(Screen.Home)}
          className="w-full bg-vpay-gold text-vpay-dark font-bold py-4 rounded-lg hover:bg-vpay-gold-dark transition-colors mt-4"
        >
          Sign Up
        </button>
      </div>
      
      <p className="text-center text-sm text-gray-400 mt-8">
          Already have an account?{' '}
          <button onClick={() => setScreen(Screen.SignIn)} className="font-semibold text-vpay-gold hover:underline">
            Sign In
          </button>
      </p>
    </div>
  );
};

export default SignUpScreen;
