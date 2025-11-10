
import React from 'react';
import { CurrencyCode } from '../types';
import { CURRENCIES } from '../App';

interface CurrencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (code: CurrencyCode) => void;
  title: string;
}

const CurrencyModal: React.FC<CurrencyModalProps> = ({ isOpen, onClose, onSelect, title }) => {
  if (!isOpen) return null;

  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-70 flex items-end justify-center z-50"
        onClick={onClose}
    >
      <div 
        className="bg-vpay-dark-2 w-full max-w-md rounded-t-2xl p-4 text-white animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-2xl font-light text-gray-400">&times;</button>
        </div>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {CURRENCIES.map(currency => {
            // FIX: Assign component to a capitalized variable before rendering.
            const Flag = currency.flag;
            return (
              <button
                key={currency.code}
                onClick={() => onSelect(currency.code)}
                className="w-full flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Flag className="w-8 h-8" />
                <div>
                  <p className="font-semibold text-left">{currency.code}</p>
                  <p className="text-sm text-gray-400 text-left">{currency.name}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurrencyModal;
