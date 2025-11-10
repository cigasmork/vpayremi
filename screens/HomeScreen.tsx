
import React, { useState } from 'react';
import { Screen, Transaction, CurrencyCode } from '../types';
import { SwapIcon, DownArrowIcon, ChevronRightIcon } from '../components/icons';
import { CURRENCIES, EXCHANGE_RATES } from '../App';
import CurrencyModal from '../components/CurrencyModal';

const mockTransactions: Transaction[] = [
    { id: '1', recipientName: 'Jane Doe', recipientCountry: 'VN', sentAmount: 500000, sentCurrency: 'KRW', receivedAmount: 9026737, receivedCurrency: 'VND', date: '2025/11/09', status: 'Completed' },
    { id: '2', recipientName: 'Jane Doe', recipientCountry: 'VN', sentAmount: 250000, sentCurrency: 'KRW', receivedAmount: 4506047, receivedCurrency: 'VND', date: '2025/11/07', status: 'Completed' },
];

interface HomeScreenProps {
  setScreen: (screen: Screen) => void;
  fromCurrency: CurrencyCode;
  setFromCurrency: (code: CurrencyCode) => void;
  toCurrency: CurrencyCode;
  setToCurrency: (code: CurrencyCode) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ setScreen, fromCurrency, setFromCurrency, toCurrency, setToCurrency }) => {
  const [activeTab, setActiveTab] = useState('overseas');
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'from' | 'to'>('from');

  const fromCurrencyData = CURRENCIES.find(c => c.code === fromCurrency)!;
  const toCurrencyData = CURRENCIES.find(c => c.code === toCurrency)!;
  // FIX: Assign component to a capitalized variable before rendering.
  const FromFlag = fromCurrencyData.flag;
  const ToFlag = toCurrencyData.flag;
  const exchangeRate = EXCHANGE_RATES[fromCurrency][toCurrency];
  const amountToSend = 1000000;
  const amountToReceive = amountToSend * exchangeRate;
  
  const openModal = (type: 'from' | 'to') => {
    setModalType(type);
    setModalOpen(true);
  };
  
  const handleCurrencySelect = (code: CurrencyCode) => {
    if (modalType === 'from') {
      if (code === toCurrency) { // swap currencies
        setToCurrency(fromCurrency);
      }
      setFromCurrency(code);
    } else {
       if (code === fromCurrency) { // swap currencies
        setFromCurrency(toCurrency);
      }
      setToCurrency(code);
    }
    setModalOpen(false);
  };

  return (
    <div className="bg-vpay-dark text-white min-h-screen pb-20">
      <div className="p-4 pt-8">
        <h1 className="text-2xl font-bold">Recent transfer arrived safely.</h1>
      </div>
      
      <div className="px-4 mt-4">
        <div className="flex bg-vpay-dark-2 p-1 rounded-lg">
          <button onClick={() => setActiveTab('overseas')} className={`w-1/2 py-2 rounded-md text-sm font-semibold ${activeTab === 'overseas' ? 'bg-vpay-dark text-vpay-gold' : 'text-gray-400'}`}>
            Overseas
          </button>
          <button onClick={() => setActiveTab('domestic')} className={`w-1/2 py-2 rounded-md text-sm font-semibold ${activeTab === 'domestic' ? 'bg-vpay-dark text-vpay-gold' : 'text-gray-400'}`}>
            Domestic
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="bg-vpay-dark-2 rounded-xl p-4">
            <div className="text-center text-sm text-gray-400 mb-4">1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}</div>
            <div className="flex items-center justify-between">
                <button onClick={() => openModal('from')} className="flex items-center space-x-2">
                    {/* FIX: Use capitalized variable for dynamic component rendering. */}
                    <FromFlag className="w-8 h-8"/>
                    <span className="font-semibold">{fromCurrencyData.code}</span>
                    <DownArrowIcon className="w-4 h-4 text-gray-400"/>
                </button>
                <div className="text-right">
                    <div className="text-xs text-gray-400">Amount to send</div>
                    <div className="text-2xl font-bold">{amountToSend.toLocaleString()}</div>
                </div>
            </div>
            <div className="relative my-2">
                <div className="border-t border-dashed border-gray-600"></div>
                <SwapIcon className="absolute right-4 -top-3.5 bg-vpay-dark-2 p-1 rounded-full text-gray-400 w-7 h-7"/>
            </div>
             <div className="flex items-center justify-between">
                <button onClick={() => openModal('to')} className="flex items-center space-x-2">
                    {/* FIX: Use capitalized variable for dynamic component rendering. */}
                    <ToFlag className="w-8 h-8"/>
                    <span className="font-semibold">{toCurrencyData.code}</span>
                    <DownArrowIcon className="w-4 h-4 text-gray-400"/>
                </button>
                <div className="text-right">
                    <div className="text-xs text-gray-400">Amount to receive</div>
                    <div className="text-2xl font-bold">{amountToReceive.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
                </div>
            </div>
            <button onClick={() => setScreen(Screen.SendAmount)} className="w-full bg-vpay-gold text-vpay-dark font-bold py-3 mt-6 rounded-lg hover:bg-vpay-gold-dark transition-colors">
                Send Money
            </button>
        </div>
      </div>
      
      <div className="px-4 mt-6">
        <h2 className="text-lg font-semibold">Recent Transfers</h2>
        <div className="flex space-x-4 overflow-x-auto py-4 -mx-4 px-4">
            {mockTransactions.map(tx => {
                // FIX: Assign component to a capitalized variable before rendering to fix invalid JSX syntax. This resolves the TypeScript error.
                const Flag = CURRENCIES.find(c => c.code === tx.receivedCurrency)?.flag;
                return (
                    <div key={tx.id} className="bg-vpay-dark-2 rounded-xl p-4 w-48 flex-shrink-0">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-white">{tx.recipientName}</p>
                            {Flag && <Flag className="w-5 h-5"/>}
                        </div>
                        <p className="text-lg font-bold text-white mt-2">{tx.receivedAmount.toLocaleString()} {tx.receivedCurrency}</p>
                        <p className="text-xs text-gray-400">{tx.date}</p>
                        <button className="w-full bg-gray-700 text-white font-semibold py-2 mt-4 rounded-lg text-sm hover:bg-gray-600 transition-colors">
                            Send Again
                        </button>
                    </div>
                );
            })}
        </div>
      </div>
      
      <div className="px-4 mt-6 space-y-4">
          <div className="bg-vpay-dark-2 p-4 rounded-xl flex justify-between items-center">
              <div>
                  <p className="text-sm text-gray-400">User Guide</p>
                  <p className="font-semibold text-white">VPay transfers, now easier!</p>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-gray-400"/>
          </div>
           <div className="bg-gradient-to-r from-amber-500 to-yellow-300 p-4 rounded-xl">
              <p className="text-xs text-black font-bold">2025/11/06 ~ 2025/11/30</p>
              <p className="text-lg font-bold text-black mt-1">Complete the VPay quiz and get VIP benefits!</p>
          </div>
      </div>
      {isModalOpen && (
        <CurrencyModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSelect={handleCurrencySelect}
          title={`Select ${modalType} currency`}
        />
      )}
    </div>
  );
};

export default HomeScreen;
