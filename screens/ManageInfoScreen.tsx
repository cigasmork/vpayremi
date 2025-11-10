
import React, { useState } from 'react';
import { Screen } from '../types';
import Header from '../components/Header';
import { ChevronRightIcon, InfoIcon, SouthKoreaFlag, DownArrowIcon } from '../components/icons';

const ProfileTab: React.FC = () => (
    <div className="space-y-6">
        <div>
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-gray-300">This Year's Transfer Info <InfoIcon className="inline w-4 h-4" /></h3>
                <button className="text-sm bg-vpay-dark-2 px-3 py-1 rounded-md">Change Country</button>
            </div>
            <div className="bg-vpay-dark-2 p-4 rounded-xl mt-2">
                <div className="flex items-center space-x-2">
                    <SouthKoreaFlag className="w-6 h-6"/>
                    <span className="font-semibold">South Korea</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 my-4">
                    <div className="bg-vpay-gold h-2.5 rounded-full" style={{width: '22%'}}></div>
                </div>
                <div className="text-sm space-y-2">
                    <div className="flex justify-between"><span className="text-gray-400">Amount Sent</span><span>16,342,629 KRW</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">Amount Remaining</span><span>56,977,041 KRW</span></div>
                </div>
            </div>
        </div>
        <div>
            <h3 className="font-semibold text-lg text-gray-300 mb-2">Account Info</h3>
            <div className="bg-vpay-dark-2 rounded-xl">
                <div className="flex justify-between items-center p-4 border-b border-gray-700"><span>+82 1026070293</span><ChevronRightIcon className="w-5 h-5 text-gray-400"/></div>
                <div className="flex justify-between items-center p-4 border-b border-gray-700"><span>johndoe@email.com</span><ChevronRightIcon className="w-5 h-5 text-gray-400"/></div>
                <div className="flex justify-between items-center p-4"><span>Change Password</span><ChevronRightIcon className="w-5 h-5 text-gray-400"/></div>
            </div>
        </div>
    </div>
);

const VerificationTab: React.FC = () => (
    <div className="space-y-6">
        <div className="bg-vpay-dark-2 p-3 rounded-lg flex items-start space-x-2 text-sm">
            <InfoIcon className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
            <p className="text-gray-300">Customer verification is required for overseas transfers. If you transfer from another country, you must update your terms and verification.</p>
        </div>
        <div className="bg-vpay-dark-2 p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <SouthKoreaFlag className="w-6 h-6"/>
                <span className="font-semibold">Sending Country: South Korea</span>
            </div>
            <DownArrowIcon className="w-5 h-5 text-gray-400"/>
        </div>
        <div>
            <h3 className="font-semibold text-lg text-gray-300 mb-2">ID Info</h3>
             <div className="bg-vpay-dark-2 p-4 rounded-xl space-y-3 text-sm">
                <p className="text-xs text-gray-400 pb-2 border-b border-gray-700">Contact customer center to change information.</p>
                <div className="flex justify-between"><span>ID Type</span><span className="font-semibold">Passport</span></div>
                <div className="flex justify-between"><span>Full Name</span><span>John Doe</span></div>
                <div className="flex justify-between"><span>Gender</span><span>Male</span></div>
                <div className="flex justify-between"><span>Date of Birth</span><span>1986/10/10</span></div>
                <div className="flex justify-between"><span>Nationality</span><span>USA</span></div>
            </div>
        </div>
         <div>
            <h3 className="font-semibold text-lg text-gray-300 mb-2">Customer Info</h3>
             <div className="bg-vpay-dark-2 rounded-xl p-4 space-y-3 text-sm">
                <div className="flex justify-between"><span>Job</span><DownArrowIcon className="w-4 h-4"/></div>
                <div className="flex justify-between"><span>Purpose</span><DownArrowIcon className="w-4 h-4"/></div>
                <div className="flex justify-between"><span>Source of Funds</span><DownArrowIcon className="w-4 h-4"/></div>
            </div>
        </div>
    </div>
);

interface ManageInfoScreenProps {
    setScreen: (screen: Screen) => void;
    initialTab: 'profile' | 'verification' | 'account';
}

const ManageInfoScreen: React.FC<ManageInfoScreenProps> = ({ setScreen, initialTab }) => {
    const [activeTab, setActiveTab] = useState(initialTab);

    return (
        <div className="bg-vpay-dark text-white min-h-screen">
            <Header title="Manage My Info" onBack={() => setScreen(Screen.Profile)} />

            <div className="px-4 mt-4 border-b border-gray-700">
                <div className="flex space-x-4">
                    <button 
                        onClick={() => setActiveTab('profile')} 
                        className={`py-2 text-sm font-semibold ${activeTab === 'profile' ? 'text-vpay-gold border-b-2 border-vpay-gold' : 'text-gray-400'}`}
                    >
                        Profile
                    </button>
                    <button 
                        onClick={() => setActiveTab('verification')} 
                        className={`py-2 text-sm font-semibold ${activeTab === 'verification' ? 'text-vpay-gold border-b-2 border-vpay-gold' : 'text-gray-400'}`}
                    >
                        Verification Info
                    </button>
                     <button 
                        onClick={() => setActiveTab('account')} 
                        className={`py-2 text-sm font-semibold ${activeTab === 'account' ? 'text-vpay-gold border-b-2 border-vpay-gold' : 'text-gray-400'}`}
                    >
                        My Account
                    </button>
                </div>
            </div>
            
            <div className="p-4">
                {activeTab === 'profile' && <ProfileTab />}
                {activeTab === 'verification' && <VerificationTab />}
                {activeTab === 'account' && <div className="text-center text-gray-400 py-10">My Account details would be here.</div>}
            </div>
        </div>
    );
};

export default ManageInfoScreen;
