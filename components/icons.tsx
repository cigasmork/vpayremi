
import React from 'react';

interface IconProps {
  className?: string;
}

export const VPayLogo: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 3a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12m15 0a2.25 2.25 0 012.25 2.25v3.75a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-3.75a2.25 2.25 0 012.25-2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75V15m0 0l-1.125-1.125M12 15l1.125-1.125" />
    </svg>
);


export const OnboardingIllustration: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="120" fill="transparent"/>
        {/* Phone 1 */}
        <rect x="30" y="20" width="50" height="90" rx="5" fill="#1E1E1E" stroke="#FBBF24" strokeWidth="1"/>
        <circle cx="55" cy="35" r="8" fill="#FBBF24"/>
        <path d="M51 33h8v2h-8z M51 37h8v2h-8z" fill="#121212"/>
        <rect x="35" y="50" width="40" height="4" rx="1" fill="#4B5563"/>
        <rect x="35" y="60" width="40" height="4" rx="1" fill="#4B5563"/>
        <rect x="35" y="70" width="40" height="4" rx="1" fill="#4B5563"/>
        {/* Phone 2 */}
        <rect x="120" y="10" width="50" height="90" rx="5" fill="#1E1E1E" stroke="#FBBF24" strokeWidth="1"/>
        <circle cx="145" cy="60" r="15" fill="#FBBF24"/>
        <text x="145" y="65" textAnchor="middle" fill="#121212" fontSize="12" fontWeight="bold">$</text>
        <path d="M135 30 l-5 -5 h20 l-5 5" stroke="#FBBF24" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M140 25 v15" stroke="#FBBF24" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        {/* Connection arrows */}
        <path d="M85 40 Q 100 25, 115 40" stroke="#FBBF24" strokeWidth="1.5" fill="none" strokeDasharray="3 2"/>
        <path d="M115 40 l-4 -3 m 4 3 l-3 4" stroke="#FBBF24" strokeWidth="1.5" fill="none"/>
        <path d="M115 70 Q 100 85, 85 70" stroke="#FBBF24" strokeWidth="1.5" fill="none" strokeDasharray="3 2"/>
        <path d="M85 70 l4 -3 m -4 3 l3 4" stroke="#FBBF24" strokeWidth="1.5" fill="none"/>
    </svg>
);


export const SendIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);
export const HistoryIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

export const SupportIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export const ProfileIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

export const BackIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

export const SettingsIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const FlagWrapper: React.FC<{className?: string; children: React.ReactNode}> = ({ className, children }) => (
    <div className={`${className} overflow-hidden rounded-full flex-shrink-0 bg-gray-700`}>{children}</div>
);

export const SouthKoreaFlag: React.FC<IconProps> = ({ className }) => (
    <FlagWrapper className={className}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
      <path fill="#fff" d="M0 0h900v600H0z"/>
      <circle cx="450" cy="300" r="150" fill="#cd2e3a"/>
      <path d="M450 300a150 150 0 0 0 0-300c-64.44 0-120.31 40.58-141.2 97.47A150.32 150.32 0 0 1 450 300z" fill="#0047a0"/>
    </svg></FlagWrapper>
);

export const VietnamFlag: React.FC<IconProps> = ({ className }) => (
    <FlagWrapper className={className}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
        <path fill="#da251d" d="M0 0h900v600H0z"/>
        <path fill="#ff0" d="M450 185.7l69.1 212.6-180.9-131.4h223.6L380.9 398.3z"/>
    </svg></FlagWrapper>
);

export const UsdFlag: React.FC<IconProps> = ({ className }) => (
    <FlagWrapper className={className}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900">
      <path fill="#b22234" d="M0 0h7410v3900H0z"/>
      <path fill="#fff" d="M0 750h7410v300H0zm0 600h7410v300H0zm0 600h7410v300H0zm0 600h7410v300H0z"/>
      <path fill="#3c3b6e" d="M0 0h3960v2100H0z"/>
    </svg></FlagWrapper>
);

export const JpyFlag: React.FC<IconProps> = ({ className }) => (
    <FlagWrapper className={className}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
        <path fill="#fff" d="M0 0h900v600H0z"/>
        <circle cx="450" cy="300" r="180" fill="#bc002d"/>
    </svg></FlagWrapper>
);

export const PhpFlag: React.FC<IconProps> = ({ className }) => (
    <FlagWrapper className={className}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600">
        <path fill="#0038a8" d="M0 0h1200v300H0z"/>
        <path fill="#ce1126" d="M0 300h1200v300H0z"/>
        <path fill="#fff" d="M0 0l600 300L0 600z"/>
    </svg></FlagWrapper>
);


export const DownArrowIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

export const SwapIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
);

export const EditIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L16.732 3.732z" />
    </svg>
);

export const StarIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const InfoIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const GoogleIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.657-3.344-11.303-8H4.694v6.919C8.238,40.518,15.555,44,24,44z"/>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.99,36.566,44,30.861,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
    </svg>
);

export const AppleIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.381 12.392c0 3.51-2.022 5.232-3.832 5.232-1.278 0-2.032-.782-3.421-.782s-2.247.782-3.487.782c-1.81 0-4.038-1.788-4.038-5.358 0-3.282 2.277-5.487 4.131-5.487 1.343 0 2.155.781 3.545.781s2.172-.781 3.487-.781c1.978 0 3.615 2.109 3.615 5.613zm-7.685-3.935c.105-1.528.947-2.694 2.145-2.694.135 0 .811.459.771 1.624-.093 1.488-.947 2.694-2.125 2.694-.216 0-.841-.531-.791-1.624z"/>
    </svg>
);
