
import React, { useState } from 'react';
import { Transaction } from '../types';
import { VietnamFlag } from '../components/icons';

const mockTransactions: Transaction[] = [
    { id: '1', recipientName: 'Jane Doe', recipientCountry: 'VN', sentAmount: 500000, sentCurrency: 'KRW', receivedAmount: 9026737, receivedCurrency: 'VND', date: '2025/11/09', status: 'Completed' },
    { id: '2', recipientName: 'Jane Doe', recipientCountry: 'VN', sentAmount: 250000, sentCurrency: 'KRW', receivedAmount: 4506047, receivedCurrency: 'VND', date: '2025/11/07', status: 'Completed' },
    { id: '3', recipientName: 'Jane Doe', recipientCountry: 'VN', sentAmount: 100000, sentCurrency: 'KRW', receivedAmount: 1804532, receivedCurrency: 'VND', date: '2025/11/06', status: 'Completed' },
];

const HistoryScreen: React.FC = () => {
    const [activeTab, setActiveTab] = useState('overseas');

    return (
        <div className="bg-vpay-dark text-white min-h-screen pb-20">
            <div className="p-4 pt-8">
                <h1 className="text-2xl font-bold">Transaction History</h1>
            </div>

            <div className="px-4 mt-4 border-b border-gray-700">
                <div className="flex space-x-4">
                    <button 
                        onClick={() => setActiveTab('overseas')} 
                        className={`py-2 text-sm font-semibold ${activeTab === 'overseas' ? 'text-vpay-gold border-b-2 border-vpay-gold' : 'text-gray-400'}`}
                    >
                        Overseas
                    </button>
                    <button 
                        onClick={() => setActiveTab('domestic')} 
                        className={`py-2 text-sm font-semibold ${activeTab === 'domestic' ? 'text-vpay-gold border-b-2 border-vpay-gold' : 'text-gray-400'}`}
                    >
                        Domestic
                    </button>
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-center text-gray-400 mb-4">
                    <button>&lt;</button>
                    <h2 className="font-semibold">November 2025</h2>
                    <button>&gt;</button>
                </div>

                <div className="space-y-4">
                    {mockTransactions.map(tx => (
                        <div key={tx.id} className="bg-vpay-dark-2 p-4 rounded-lg">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-xs text-gray-400">{tx.date}</p>
                                    <div className="flex items-center space-x-2 mt-1">
                                        <VietnamFlag className="w-5 h-5 rounded-full" />
                                        <p className="font-semibold text-white">{tx.recipientName}</p>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-2 text-sm text-gray-300">
                                        <span>{tx.sentAmount.toLocaleString()} {tx.sentCurrency}</span>
                                        <span className="text-gray-500">&gt;</span>
                                        <span className="font-bold text-white">{tx.receivedAmount.toLocaleString()} {tx.receivedCurrency}</span>
                                    </div>
                                </div>
                                <div className={`text-xs font-semibold px-2 py-1 rounded-full ${tx.status === 'Completed' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'}`}>
                                    {tx.status}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HistoryScreen;
