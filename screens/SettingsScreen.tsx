
import React, { useState } from 'react';
import { Screen } from '../types';
import Header from '../components/Header';
import { ChevronRightIcon, InfoIcon } from '../components/icons';

const Toggle: React.FC<{ isEnabled: boolean; onToggle: () => void }> = ({ isEnabled, onToggle }) => (
    <button onClick={onToggle} className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${isEnabled ? 'bg-vpay-gold' : 'bg-gray-600'}`}>
        <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
    </button>
);


const SettingsScreen: React.FC<{ setScreen: (screen: Screen) => void }> = ({ setScreen }) => {
    const [appPush, setAppPush] = useState(true);
    const [email, setEmail] = useState(false);
    const [sms, setSms] = useState(false);
    const [biometrics, setBiometrics] = useState(true);

    return (
        <div className="bg-vpay-dark text-white min-h-screen">
            <Header title="Settings" onBack={() => setScreen(Screen.Profile)} />

            <div className="p-4 space-y-8">
                <div className="bg-vpay-dark-2 p-3 rounded-lg flex items-start space-x-2 text-sm">
                    <InfoIcon className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">Important notices about account security, transfer status, and terms changes will be sent via email and text.</p>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">App Push</span>
                        <Toggle isEnabled={appPush} onToggle={() => setAppPush(p => !p)} />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Email</span>
                        <Toggle isEnabled={email} onToggle={() => setEmail(p => !p)} />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Text Message</span>
                        <Toggle isEnabled={sms} onToggle={() => setSms(p => !p)} />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Use Biometrics</span>
                        <Toggle isEnabled={biometrics} onToggle={() => setBiometrics(p => !p)} />
                    </div>
                </div>

                <div className="border-t border-gray-800 my-4"></div>

                <div className="space-y-4">
                    <h3 className="text-gray-400 font-bold text-sm">TERMS & LICENSES</h3>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">All Terms</span>
                        <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Open Source Licenses</span>
                        <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                    </div>
                </div>

                <div className="border-t border-gray-800 my-4"></div>

                <div className="space-y-4">
                    <h3 className="text-gray-400 font-bold text-sm">APP INFO</h3>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Language</span>
                        <span className="text-gray-400">English</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">App Version</span>
                        <span className="text-gray-400">1.0.0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsScreen;
