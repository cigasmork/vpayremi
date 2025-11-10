
import React from 'react';
import { Screen } from '../types';
import { SendIcon, HistoryIcon, SupportIcon, ProfileIcon } from './icons';

interface BottomNavProps {
  activeScreen: Screen;
  setActiveScreen: (screen: Screen) => void;
}

const NavItem: React.FC<{
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon: Icon, label, isActive, onClick }) => {
  const activeClass = isActive ? 'text-vpay-gold' : 'text-gray-400';
  return (
    <button onClick={onClick} className="flex flex-col items-center justify-center w-full pt-2 pb-1 focus:outline-none">
      <Icon className={`w-6 h-6 mb-1 ${activeClass}`} />
      <span className={`text-xs ${activeClass}`}>{label}</span>
    </button>
  );
};

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setActiveScreen }) => {
  const mainScreens = [Screen.Home, Screen.History, Screen.Support, Screen.Profile];
  if (!mainScreens.includes(activeScreen)) {
    return null;
  }
  
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-vpay-dark-2 border-t border-gray-700 shadow-lg">
      <div className="flex justify-around items-center h-full max-w-md mx-auto">
        <NavItem
          icon={SendIcon}
          label="Send"
          isActive={activeScreen === Screen.Home}
          onClick={() => setActiveScreen(Screen.Home)}
        />
        <NavItem
          icon={HistoryIcon}
          label="History"
          isActive={activeScreen === Screen.History}
          onClick={() => setActiveScreen(Screen.History)}
        />
        <NavItem
          icon={SupportIcon}
          label="Support"
          isActive={activeScreen === Screen.Support}
          onClick={() => setActiveScreen(Screen.Support)}
        />
        <NavItem
          icon={ProfileIcon}
          label="My"
          isActive={activeScreen === Screen.Profile}
          onClick={() => setActiveScreen(Screen.Profile)}
        />
      </div>
    </div>
  );
};

export default BottomNav;
