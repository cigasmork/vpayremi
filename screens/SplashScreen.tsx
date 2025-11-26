import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Screen } from '../types';
import logo from '../assets/logo.png';

interface SplashScreenProps {
  setScreen: (screen: Screen) => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ setScreen }) => {
  const [bgColor, setBgColor] = useState('#FFFFFF');

  useEffect(() => {
    // Background transitions to black after content fades out
    const timer = setTimeout(() => {
      setBgColor('#000000');
    }, 9000);

    // Navigate to onboarding after black transition
    const completeTimer = setTimeout(() => {
      setScreen(Screen.Onboarding);
    }, 11000);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [setScreen]);

  return (
    <motion.div
      className="relative flex items-center justify-center h-screen w-full"
      style={{ backgroundColor: bgColor }}
      animate={{ backgroundColor: bgColor }}
      transition={{ duration: 1.6, ease: 'easeInOut' }}
    >
      {/* iPhone 15 Pro container */}
      <div className="relative w-full max-w-[393px] h-full flex items-center justify-center px-6">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 9,
              times: [0, 0.15, 0.85, 1],
              ease: 'easeInOut'
            }}
            className="mb-12"
          >
            <img
              src={logo}
              alt="vpay"
              className="w-[280px] h-auto"
            />
          </motion.div>

          {/* Tagline 1 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 9,
              times: [0, 0.2, 0.8, 1],
              ease: 'easeInOut',
              delay: 0.6
            }}
            className="mb-3"
          >
            <p className="text-[#1a1a1a] tracking-wide text-center">
              Fast. Secure. Global Remittance
            </p>
          </motion.div>

          {/* Tagline 2 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 9,
              times: [0, 0.25, 0.75, 1],
              ease: 'easeInOut',
              delay: 1.2
            }}
          >
            <p className="text-[#666666] tracking-wide text-center">
              프론트엔드 플로우 체크용 화면
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
