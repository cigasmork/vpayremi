
import React from 'react';
import { Screen } from '../types';
import { ChevronRightIcon, SettingsIcon } from '../components/icons';

interface ProfileScreenProps {
  setScreen: (screen: Screen) => void;
  navigateToManageInfo: (tab: 'profile' | 'verification' | 'account') => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ setScreen, navigateToManageInfo }) => {
  return (
    <div className="bg-vpay-dark text-white min-h-screen pb-20">
      <div className="p-4 pt-8 flex justify-between items-center">
        <div></div>
        <h1 className="text-lg font-semibold">MY</h1>
        <button onClick={() => setScreen(Screen.Settings)}>
          <SettingsIcon className="w-6 h-6 text-gray-300"/>
        </button>
      </div>

      <div className="p-4">
        <div className="bg-vpay-dark-2 p-4 rounded-xl">
          <p className="text-sm text-gray-400">Available to send this year is 56,977,041 KRW.</p>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-xl font-bold">John Doe</p>
              <p className="text-sm text-gray-400">+82 1026070293</p>
            </div>
            <span className="bg-vpay-gold text-vpay-dark text-sm font-bold px-4 py-1 rounded-full">Basic</span>
          </div>
          <div className="mt-4 flex space-x-2">
            <button onClick={() => navigateToManageInfo('profile')} className="w-1/2 bg-gray-700 py-2 rounded-lg text-sm font-semibold">Profile</button>
            <button onClick={() => navigateToManageInfo('verification')} className="w-1/2 bg-gray-700 py-2 rounded-lg text-sm font-semibold">Verification Info</button>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="bg-vpay-dark-2 p-4 rounded-xl flex justify-between items-center">
          <div>
            <p className="font-semibold">Invite a friend</p>
            <p className="text-vpay-gold font-bold">Get a 5,000 KRW coupon.</p>
          </div>
          <ChevronRightIcon className="w-6 h-6 text-gray-400"/>
        </div>
      </div>

      <div className="p-4 grid grid-cols-4 gap-4 text-center text-sm">
        <div className="flex flex-col items-center space-y-2">
            <div className="w-14 h-14 bg-vpay-dark-2 rounded-full flex items-center justify-center text-2xl">🎟️</div>
            <span className="text-gray-300">Coupons</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
            <div className="w-14 h-14 bg-vpay-dark-2 rounded-full flex items-center justify-center text-2xl">🎁</div>
            <span className="text-gray-300">Lucky Box</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
            <div className="w-14 h-14 bg-vpay-dark-2 rounded-full flex items-center justify-center text-2xl">⭐</div>
            <span className="text-gray-300">Events</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
            <div className="w-14 h-14 bg-vpay-dark-2 rounded-full flex items-center justify-center text-2xl">💰</div>
            <span className="text-gray-300">Credits</span>
        </div>
      </div>

      <div className="px-4">
        <div className="bg-blue-900 border border-blue-500 text-center p-3 rounded-xl">
          <p className="text-blue-300 font-bold">Send 4,027,000 KRW more to become Silver!</p>
        </div>
      </div>
      
    </div>
  );
};

export default ProfileScreen;
