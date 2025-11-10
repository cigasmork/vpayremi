
import React from 'react';
import { Screen } from '../types';
import { OnboardingIllustration } from '../components/icons';

interface OnboardingScreenProps {
  setScreen: (screen: Screen) => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ setScreen }) => {
  return (
    <div className="flex flex-col min-h-screen bg-vpay-dark text-white p-6">
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        <OnboardingIllustration className="w-full max-w-xs h-auto" />
        <h1 className="text-3xl font-bold mt-8">Welcome to VPay</h1>
        <p className="text-gray-400 mt-2 max-w-xs">
          Smarter way to send money anytime, anywhere with the best exchange rate.
        </p>
      </div>
      <div className="space-y-4">
        <button
          onClick={() => setScreen(Screen.SignIn)}
          className="w-full bg-vpay-gold text-vpay-dark font-bold py-4 rounded-lg hover:bg-vpay-gold-dark transition-colors"
        >
          Sign In
        </button>
        <p className="text-center text-sm text-gray-400">
          New user here?{' '}
          <button onClick={() => setScreen(Screen.SignUp)} className="font-semibold text-vpay-gold hover:underline">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default OnboardingScreen;
