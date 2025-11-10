
import React, { useState } from 'react';
import { Screen } from '../types';
import Header from '../components/Header';
import { CheckCircleIcon } from '../components/icons';
import { SouthKoreaFlag, VietnamFlag } from '../components/icons';

const deliveryMethods = [
    { id: 'bank_express', name: 'Bank', fee: 5000, type: 'Express - Arrives today', speedIcon: '⚡️' },
    { id: 'visa', name: 'Visa Card', fee: 5000, type: 'Express - Arrives today', speedIcon: '⚡️' },
    { id: 'atm', name: 'ATM Card', fee: 5000, type: 'Express - Arrives today', speedIcon: '⚡️' },
    { id: 'bank_standard', name: 'Bank', fee: 2500, type: 'Standard - 2-3 business days', speedIcon: '🐢' },
];

const SendFlowMethodScreen: React.FC<{ setScreen: (screen: Screen) => void }> = ({ setScreen }) => {
    const [selectedMethod, setSelectedMethod] = useState('bank_express');

    return (
        <div className="bg-vpay-dark text-white min-h-screen flex flex-col">
            <Header title="Select Delivery Method" onBack={() => setScreen(Screen.SendRecipient)} />
            
            <div className="p-4 flex-grow">
                <div className="bg-vpay-dark-2 p-3 rounded-xl flex justify-center items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                        <SouthKoreaFlag className="w-6 h-6 rounded-full"/>
                        <span className="font-semibold">10,000</span>
                    </div>
                    <span className="text-gray-400">→</span>
                    <div className="flex items-center space-x-2">
                        <VietnamFlag className="w-6 h-6 rounded-full"/>
                        <span className="font-semibold text-vpay-gold">180,629</span>
                    </div>
                </div>

                <div className="space-y-3">
                    {deliveryMethods.map(method => (
                        <div 
                            key={method.id} 
                            onClick={() => setSelectedMethod(method.id)}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-colors ${selectedMethod === method.id ? 'bg-vpay-dark-2 border-vpay-gold' : 'bg-vpay-dark-2 border-transparent'}`}
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-lg">{method.name}</h3>
                                    <p className="text-sm text-gray-400">Fee: {method.fee.toLocaleString()} KRW</p>
                                    <div className="mt-2 text-xs bg-blue-900 text-blue-300 font-semibold px-2 py-1 rounded-full inline-block">
                                        {method.speedIcon} {method.type}
                                    </div>
                                </div>
                                {selectedMethod === method.id && <CheckCircleIcon className="w-7 h-7 text-vpay-gold"/>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="sticky bottom-0 left-0 right-0 bg-vpay-dark p-4 border-t border-gray-800">
                <div className="flex space-x-3">
                    <button className="w-1/3 bg-vpay-dark-2 text-white font-semibold py-3 rounded-lg hover:bg-gray-800">Details</button>
                    <button onClick={() => setScreen(Screen.SendConfirm)} className="w-2/3 bg-vpay-gold text-vpay-dark font-bold py-3 rounded-lg hover:bg-vpay-gold-dark">Next</button>
                </div>
            </div>
        </div>
    );
};

export default SendFlowMethodScreen;
