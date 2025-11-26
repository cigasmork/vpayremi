import React from 'react';
import { motion } from 'framer-motion';
import { Screen } from '../types';
import { OnboardingIllustration } from '../components/icons';

interface OnboardingScreenProps {
  setScreen: (screen: Screen) => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ setScreen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen bg-vpay-dark text-white p-6"
    >
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <OnboardingIllustration className="w-full max-w-xs h-auto" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-3xl font-bold mt-8"
        >
          Welcome to VPay
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-400 mt-2 max-w-xs"
        >
          Smarter way to send money anytime, anywhere with the best exchange rate.
        </motion.p>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="space-y-4"
      >
        <button
          onClick={() => setScreen(Screen.SignIn)}
          className="w-full bg-vpay-gold text-vpay-dark font-bold py-4 rounded-lg hover:bg-vpay-gold-dark transition-colors transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Sign In
        </button>
        <p className="text-center text-sm text-gray-400">
          New user here?{' '}
          <button 
            onClick={() => setScreen(Screen.SignUp)} 
            className="font-semibold text-vpay-gold hover:underline transition-all"
          >
            Sign up
          </button>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default OnboardingScreen;
