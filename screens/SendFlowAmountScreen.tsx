
import React, { useState } from 'react';
import { Screen, CurrencyCode } from '../types';
import { SwapIcon, DownArrowIcon } from '../components/icons';
import Header from '../components/Header';
import { CURRENCIES, EXCHANGE_RATES } from '../data';
import CurrencyModal from '../components/CurrencyModal';

interface SendFlowAmountScreenProps {
  setScreen: (screen: Screen) => void;
  fromCurrency: CurrencyCode;
  setFromCurrency: (code: CurrencyCode) => void;
  toCurrency: CurrencyCode;
  setToCurrency: (code: CurrencyCode) => void;
}

const NumberPad: React.FC<{onInput: (val: string) => void, onDelete: () => void}> = ({ onInput, onDelete }) => {
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '00', '0'];
    return (
        <div className="grid grid-cols-3 gap-1 p-1">
            {keys.map(key => (
                <button key={key} onClick={() => onInput(key)} className="py-5 text-2xl rounded-lg bg-vpay-dark-2 hover:bg-gray-800 active:bg-gray-700">
                    {key}
                </button>
            ))}
             <button onClick={onDelete} className="py-5 text-2xl rounded-lg bg-vpay-dark-2 hover:bg-gray-800 active:bg-gray-700">
                &larr;
            </button>
        </div>
    );
};

const SendFlowAmountScreen: React.FC<SendFlowAmountScreenProps> = ({ setScreen, fromCurrency, setFromCurrency, toCurrency, setToCurrency }) => {
    const [sendAmount, setSendAmount] = useState('0');
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState<'from' | 'to'>('from');

    const fromCurrencyData = CURRENCIES.find(c => c.code === fromCurrency)!;
    const toCurrencyData = CURRENCIES.find(c => c.code === toCurrency)!;
    // FIX: Assign component to a capitalized variable before rendering.
    const FromFlag = fromCurrencyData.flag;
    const ToFlag = toCurrencyData.flag;
    const exchangeRate = EXCHANGE_RATES[fromCurrency][toCurrency];

    const openModal = (type: 'from' | 'to') => {
        setModalType(type);
        setModalOpen(true);
    };
  
    const handleCurrencySelect = (code: CurrencyCode) => {
        if (modalType === 'from') {
          if (code === toCurrency) setToCurrency(fromCurrency);
          setFromCurrency(code);
        } else {
          if (code === fromCurrency) setFromCurrency(toCurrency);
          setToCurrency(code);
        }
        setModalOpen(false);
    };

    const handleInput = (val: string) => {
        if (sendAmount === '0' && val !== '0' && val !== '00') {
            setSendAmount(val);
        } else if (sendAmount !== '0') {
             if ((sendAmount + val).length < 15) setSendAmount(prev => prev + val);
        }
    };
    
    const handleDelete = () => {
        if (sendAmount.length > 1) {
            setSendAmount(prev => prev.slice(0, -1));
        } else {
            setSendAmount('0');
        }
    };
    
    const receivedAmount = parseFloat(sendAmount.replace(/,/g, '')) * exchangeRate;

    return (
        <div className="bg-vpay-dark text-white min-h-screen flex flex-col">
            <Header title="" onBack={() => setScreen(Screen.Home)} />
            <div className="flex-grow p-4">
                <div className="text-center text-sm text-gray-400 mb-4">1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}</div>
                <div className="bg-vpay-dark-2 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                        <button onClick={() => openModal('from')} className="flex items-center space-x-2">
                            {/* FIX: Use capitalized variable for dynamic component rendering. */}
                            <FromFlag className="w-8 h-8"/>
                            <span className="font-semibold">{fromCurrencyData.code}</span>
                            <DownArrowIcon className="w-4 h-4 text-gray-400"/>
                        </button>
                        <div className="text-right">
                            <div className="text-xs text-gray-400">Amount to send</div>
                            <div className="text-3xl font-bold text-vpay-gold">{parseInt(sendAmount).toLocaleString()}</div>
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
                            <div className="text-3xl font-bold">{Math.floor(receivedAmount).toLocaleString()}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticky bottom-0 left-0 right-0 bg-vpay-dark">
                 <div className="p-4">
                    <button 
                        onClick={() => setScreen(Screen.SendRecipient)} 
                        className="w-full bg-vpay-gold text-vpay-dark font-bold py-3 rounded-lg hover:bg-vpay-gold-dark disabled:bg-gray-600 transition-colors"
                        disabled={sendAmount === '0'}
                    >
                        Next
                    </button>
                </div>
                <NumberPad onInput={handleInput} onDelete={handleDelete} />
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

export default SendFlowAmountScreen;