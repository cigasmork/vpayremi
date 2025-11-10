
import React, { useEffect } from 'react';
import { Screen } from '../types';
import { VPayLogo } from '../components/icons';

interface SplashScreenProps {
  setScreen: (screen: Screen) => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ setScreen }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen(Screen.Onboarding);
    }, 2000); // 2-second delay

    return () => clearTimeout(timer);
  }, [setScreen]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-vpay-dark text-white animate-fade-in">
      <VPayLogo className="w-24 h-24 text-vpay-gold" />
      <h1 className="text-4xl font-bold mt-4">VPay</h1>
      <p className="mt-8 text-gray-400">Please wait...</p>
    </div>
  );
};

export default SplashScreen;
