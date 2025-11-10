
import React from 'react';
import { BackIcon } from './icons';

interface HeaderProps {
  title: string;
  onBack: () => void;
  rightAction?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, onBack, rightAction }) => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-vpay-dark-2 text-white h-16">
      <button onClick={onBack} className="p-2 -ml-2">
        <BackIcon className="w-6 h-6" />
      </button>
      <h1 className="text-lg font-semibold absolute left-1/2 -translate-x-1/2">{title}</h1>
      <div>{rightAction}</div>
    </header>
  );
};

export default Header;
