
import React, { useState } from 'react';
import { Screen, CurrencyCode } from './types';

// Screen Imports
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import SupportScreen from './screens/SupportScreen';
import ProfileScreen from './screens/ProfileScreen';
import SendFlowAmountScreen from './screens/SendFlowAmountScreen';
import SendFlowRecipientScreen from './screens/SendFlowRecipientScreen';
import SendFlowMethodScreen from './screens/SendFlowMethodScreen';
import SendFlowConfirmScreen from './screens/SendFlowConfirmScreen';
import SettingsScreen from './screens/SettingsScreen';
import ManageInfoScreen from './screens/ManageInfoScreen';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

// Component Imports
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Splash);
  const [manageInfoInitialTab, setManageInfoInitialTab] = useState<'profile' | 'verification' | 'account'>('profile');
  
  const [fromCurrency, setFromCurrency] = useState<CurrencyCode>('KRW');
  const [toCurrency, setToCurrency] = useState<CurrencyCode>('VND');

  const navigateToManageInfo = (tab: 'profile' | 'verification' | 'account') => {
    setManageInfoInitialTab(tab);
    setActiveScreen(Screen.ManageInfo);
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case Screen.Splash:
        return <SplashScreen setScreen={setActiveScreen} />;
      case Screen.Onboarding:
        return <OnboardingScreen setScreen={setActiveScreen} />;
      case Screen.SignIn:
        return <SignInScreen setScreen={setActiveScreen} />;
      case Screen.SignUp:
        return <SignUpScreen setScreen={setActiveScreen} />;
      case Screen.Home:
        return <HomeScreen setScreen={setActiveScreen} {...{ fromCurrency, setFromCurrency, toCurrency, setToCurrency }} />;
      case Screen.History:
        return <HistoryScreen />;
      case Screen.Support:
        return <SupportScreen />;
      case Screen.Profile:
        return <ProfileScreen setScreen={setActiveScreen} navigateToManageInfo={navigateToManageInfo} />;
      case Screen.SendAmount:
        return <SendFlowAmountScreen setScreen={setActiveScreen} {...{ fromCurrency, setFromCurrency, toCurrency, setToCurrency }} />;
      case Screen.SendRecipient:
        return <SendFlowRecipientScreen setScreen={setActiveScreen} />;
      case Screen.SendMethod:
        return <SendFlowMethodScreen setScreen={setActiveScreen} />;
      case Screen.SendConfirm:
        return <SendFlowConfirmScreen setScreen={setActiveScreen} />;
      case Screen.Settings:
        return <SettingsScreen setScreen={setActiveScreen} />;
      case Screen.ManageInfo:
        return <ManageInfoScreen setScreen={setActiveScreen} initialTab={manageInfoInitialTab} />;
      default:
        return <SplashScreen setScreen={setActiveScreen} />;
    }
  };

  const showBottomNav = [Screen.Home, Screen.History, Screen.Support, Screen.Profile].includes(activeScreen);

  return (
    <div className="max-w-md mx-auto bg-vpay-dark min-h-screen shadow-2xl">
      <main className="relative">
        {renderScreen()}
      </main>
      {showBottomNav && <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />}
    </div>
  );
};

export default App;