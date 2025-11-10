
export enum Screen {
  Splash,
  Onboarding,
  SignIn,
  SignUp,
  Home,
  History,
  Support,
  Profile,
  SendAmount,
  SendRecipient,
  SendMethod,
  SendConfirm,
  Settings,
  ManageInfo
}

export type CurrencyCode = 'KRW' | 'VND' | 'USD' | 'JPY' | 'PHP';

export interface Transaction {
  id: string;
  recipientName: string;
  recipientCountry: 'VN' | 'PH' | 'US' | 'JP';
  sentAmount: number;
  sentCurrency: CurrencyCode;
  receivedAmount: number;
  receivedCurrency: CurrencyCode;
  date: string;
  status: 'Completed' | 'Pending' | 'Failed';
}

export interface Recipient {
    id: string;
    name: string;
    phone: string;
    bank: string;
    accountNumber: string;
    isFavorite: boolean;
}
