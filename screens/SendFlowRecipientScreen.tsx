
import React from 'react';
import { Screen, Recipient } from '../types';
import Header from '../components/Header';
import { EditIcon, StarIcon } from '../components/icons';

const mockRecipients: Recipient[] = [
    { id: '1', name: 'Jane Doe', phone: '+84 387051841', bank: 'Shinhan Bank Vietnam (SHBVN)', accountNumber: '700031381868', isFavorite: true },
    { id: '2', name: 'John Smith', phone: '+84 987654321', bank: 'Vietcombank (VCB)', accountNumber: '123456789012', isFavorite: false },
];

interface SendFlowRecipientScreenProps {
  setScreen: (screen: Screen) => void;
}

const SendFlowRecipientScreen: React.FC<SendFlowRecipientScreenProps> = ({ setScreen }) => {
  return (
    <div className="bg-vpay-dark text-white min-h-screen">
      <Header 
        title="Select Recipient" 
        onBack={() => setScreen(Screen.SendAmount)} 
        rightAction={<button><EditIcon className="w-6 h-6 text-gray-300"/></button>}
      />
      <div className="p-4">
        <div className="bg-blue-900 border border-blue-500 text-center p-3 rounded-xl text-blue-300 font-semibold mb-4">
          You can edit recipient information!
        </div>

        <button className="w-full bg-vpay-dark-2 text-white font-semibold py-4 mb-4 rounded-lg hover:bg-gray-800 transition-colors">
          Send to a new person
        </button>

        <div className="space-y-4">
          {mockRecipients.map(recipient => (
            <div 
                key={recipient.id} 
                onClick={() => setScreen(Screen.SendMethod)} 
                className="bg-vpay-dark-2 p-4 rounded-lg cursor-pointer hover:bg-gray-800"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{recipient.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">{recipient.phone}</p>
                  <p className="text-sm text-gray-400">{recipient.bank}</p>
                  <p className="text-sm text-gray-400">{recipient.accountNumber}</p>
                </div>
                {recipient.isFavorite && <StarIcon className="w-6 h-6 text-vpay-gold"/>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SendFlowRecipientScreen;
