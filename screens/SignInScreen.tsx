
import React from 'react';
import { Screen } from '../types';
import { BackIcon, VPayLogo, GoogleIcon, AppleIcon } from '../components/icons';

interface SignInScreenProps {
  setScreen: (screen: Screen) => void;
}

const SignInScreen: React.FC<SignInScreenProps> = ({ setScreen }) => {
  return (
    <div className="min-h-screen bg-vpay-dark text-white p-6 flex flex-col">
      <header className="absolute top-4 left-4">
        <button onClick={() => setScreen(Screen.Onboarding)} className="p-2">
          <BackIcon className="w-6 h-6" />
        </button>
      </header>
      
      <div className="text-center mt-12">
          <VPayLogo className="w-16 h-16 text-vpay-gold mx-auto" />
          <h1 className="text-3xl font-bold mt-2">VPay</h1>
          <p className="text-gray-400 mt-2">Welcome back! Select method to log in.</p>
      </div>

      <div className="flex-grow flex flex-col justify-center space-y-4 mt-8">
        <input 
            type="email" 
            placeholder="Enter Your Email"
            className="w-full bg-vpay-dark-2 p-4 rounded-lg border border-gray-700 focus:border-vpay-gold focus:ring-vpay-gold focus:outline-none"
        />
        <input 
            type="password" 
            placeholder="Enter Your Password"
            className="w-full bg-vpay-dark-2 p-4 rounded-lg border border-gray-700 focus:border-vpay-gold focus:ring-vpay-gold focus:outline-none"
        />
        <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2 text-gray-400">
                <input type="checkbox" className="rounded bg-vpay-dark-2 border-gray-600 text-vpay-gold focus:ring-vpay-gold" />
                <span>Remember me</span>
            </label>
            <button className="font-semibold text-vpay-gold hover:underline">Forgot Password?</button>
        </div>
        <button
          onClick={() => setScreen(Screen.Home)}
          className="w-full bg-vpay-gold text-vpay-dark font-bold py-4 rounded-lg hover:bg-vpay-gold-dark transition-colors"
        >
          Log In
        </button>
        
        <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-sm">Or Continue With</span>
            <div className="flex-grow border-t border-gray-700"></div>
        </div>

        <div className="flex space-x-4">
            <button className="w-1/2 flex items-center justify-center space-x-2 bg-vpay-dark-2 py-3 rounded-lg border border-gray-700 hover:bg-gray-800">
                <GoogleIcon className="w-6 h-6" />
                <span>Google</span>
            </button>
            <button className="w-1/2 flex items-center justify-center space-x-2 bg-vpay-dark-2 py-3 rounded-lg border border-gray-700 hover:bg-gray-800">
                <AppleIcon className="w-6 h-6" />
                <span>Apple</span>
            </button>
        </div>
      </div>
      
      <p className="text-center text-sm text-gray-400 mt-8">
          Don't have an account?{' '}
          <button onClick={() => setScreen(Screen.SignUp)} className="font-semibold text-vpay-gold hover:underline">
            Sign up
          </button>
      </p>
    </div>
  );
};

export default SignInScreen;
