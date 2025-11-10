
import React from 'react';
import { Screen } from '../types';
import Header from '../components/Header';
import { SouthKoreaFlag, VietnamFlag, InfoIcon } from '../components/icons';

const SendFlowConfirmScreen: React.FC<{ setScreen: (screen: Screen) => void }> = ({ setScreen }) => {
    return (
        <div className="bg-vpay-dark text-white min-h-screen flex flex-col">
            <Header title="Confirm Transfer Info" onBack={() => setScreen(Screen.SendMethod)} />
            
            <div className="flex-grow p-4 space-y-6">
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="font-semibold text-lg text-gray-300">Sending Info</h2>
                        <button className="text-sm text-vpay-gold font-semibold">Edit</button>
                    </div>
                    <div className="bg-vpay-dark-2 p-4 rounded-xl">
                        <div className="text-center text-sm text-gray-400 mb-4">1 KRW = 18.06 VND</div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <SouthKoreaFlag className="w-7 h-7 rounded-full"/>
                                <span className="font-semibold">KRW</span>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-gray-400">Amount to send</p>
                                <p className="text-xl font-bold">10,000</p>
                            </div>
                        </div>
                        <div className="my-3 border-t border-dashed border-gray-700"></div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <VietnamFlag className="w-7 h-7 rounded-full"/>
                                <span className="font-semibold">VND</span>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-gray-400">Amount to receive</p>
                                <p className="text-xl font-bold">180,629</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                     <h2 className="font-semibold text-lg text-gray-300 mb-2">Delivery Method</h2>
                     <div className="bg-vpay-dark-2 p-4 rounded-xl">
                        <p className="font-semibold">Bank / Express</p>
                        <p className="text-sm text-gray-400 mt-2">Expected Arrival Date</p>
                        <p className="font-semibold">2025/11/10</p>
                        <div className="flex items-start space-x-2 bg-gray-800 p-3 rounded-lg mt-3">
                            <InfoIcon className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5"/>
                            <p className="text-xs text-gray-300">
                                This is an estimated arrival date. Delays may occur depending on the receiving/sending country's circumstances.
                            </p>
                        </div>
                     </div>
                </div>

                 <div>
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="font-semibold text-lg text-gray-300">Recipient Info</h2>
                        <button className="text-sm text-vpay-gold font-semibold">Edit</button>
                    </div>
                    <div className="bg-vpay-dark-2 p-4 rounded-xl space-y-3 text-sm">
                        <div className="flex justify-between"><span className="text-gray-400">Nationality</span><span>Others</span></div>
                        <div className="flex justify-between"><span className="text-gray-400">Method</span><span>Bank, Shinhan Bank Vietnam (SHBVN)</span></div>
                        <div className="flex justify-between"><span className="text-gray-400">Account No.</span><span>700031381868</span></div>
                        <div className="flex justify-between"><span className="text-gray-400">Last Name</span><span>Doe</span></div>
                        <div className="flex justify-between"><span className="text-gray-400">First Name</span><span>Jane</span></div>
                        <div className="flex justify-between"><span className="text-gray-400">Phone</span><span>+84 387051841</span></div>
                    </div>
                </div>
            </div>

            <div className="sticky bottom-0 left-0 right-0 bg-vpay-dark-2 p-4 border-t border-gray-800">
                <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-lg">Total Amount</span>
                    <span className="font-bold text-xl text-vpay-gold">15,000 KRW</span>
                </div>
                <button 
                    onClick={() => { alert('Transfer initiated!'); setScreen(Screen.Home); }}
                    className="w-full bg-vpay-gold text-vpay-dark font-bold py-4 rounded-lg text-lg hover:bg-vpay-gold-dark"
                >
                    Slide to Send
                </button>
            </div>
        </div>
    );
};

export default SendFlowConfirmScreen;
