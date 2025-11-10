
import React, { useState } from 'react';
import { SupportIcon, ChevronRightIcon, BackIcon } from '../components/icons';

const languages = [
    { code: 'ko', name: '한국어', flag: '🇰🇷' }, { code: 'en', name: 'English', flag: '🇬🇧' }, { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'th', name: 'ภาษาไทย', flag: '🇹🇭' }, { code: 'km', name: 'ភាសាខ្មែរ', flag: '🇰🇭' }, { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'uz', name: 'O\'zbek', flag: '🇺🇿' }, { code: 'zh', name: '中文', flag: '🇨🇳' }, { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'tl', name: 'Tagalog', flag: '🇵🇭' }, { code: 'bn', name: 'বাংলা', flag: '🇧🇩' }, { code: 'ur', name: 'اردو', flag: '🇵🇰' },
];

const SupportDetailModal: React.FC<{onClose: () => void}> = ({ onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end">
        <div className="w-full bg-vpay-dark-2 rounded-t-2xl p-4 text-white animate-slide-up">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">한국어</h2>
                <button onClick={onClose} className="text-2xl">&times;</button>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <p className="font-bold text-amber-400">[Based on KST]</p>
                <p className="mt-2">Monday ~ Sunday 10:00 AM ~ 7:00 PM (KST)</p>
                <p className="text-sm text-gray-400">(Lunch Time: 1:00 PM ~ 2:00 PM)</p>
            </div>
            <div className="space-y-2">
                <button className="w-full flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                    <span>💬 Live Chat</span>
                    <ChevronRightIcon className="w-5 h-5 text-gray-400"/>
                </button>
                 <button className="w-full flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                    <span>📞 1877-4014</span>
                    <ChevronRightIcon className="w-5 h-5 text-gray-400"/>
                </button>
                 <button className="w-full flex justify-between items-center bg-gray-800 p-4 rounded-lg">
                    <span>📧 support@vpay.com</span>
                    <ChevronRightIcon className="w-5 h-5 text-gray-400"/>
                </button>
            </div>
        </div>
    </div>
);

const SupportScreen: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="bg-vpay-dark text-white min-h-screen pb-20">
            <div className="p-4 pt-8">
                <h1 className="text-2xl font-bold">Customer Center</h1>
            </div>

            <div className="p-4">
                <div className="bg-vpay-dark-2 p-4 rounded-xl flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="bg-vpay-gold p-2 rounded-full">
                            <SupportIcon className="w-6 h-6 text-vpay-dark" />
                        </div>
                        <div>
                            <p className="font-semibold">Frequently Asked Questions</p>
                            <p className="text-sm text-gray-400">Find answers quickly.</p>
                        </div>
                    </div>
                    <ChevronRightIcon className="w-6 h-6 text-gray-400" />
                </div>
            </div>

            <div className="p-4 grid grid-cols-3 gap-4">
                {languages.map(lang => (
                    <button key={lang.code} onClick={() => setShowModal(true)} className="bg-vpay-dark-2 p-4 rounded-xl flex flex-col items-center justify-center aspect-square hover:bg-gray-800 transition-colors">
                        <span className="text-3xl">{lang.flag}</span>
                        <span className="text-sm mt-2 font-semibold text-center">{lang.name}</span>
                    </button>
                ))}
            </div>
            {showModal && <SupportDetailModal onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default SupportScreen;
