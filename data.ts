import { CurrencyCode } from './types';
import { SouthKoreaFlag, VietnamFlag, UsdFlag, JpyFlag, PhpFlag } from './components/icons';

// FIX: Add 'as const' to correctly infer currency codes as literal types, not as a generic string.
export const CURRENCIES = [
  { code: 'KRW', name: 'South Korean Won', flag: SouthKoreaFlag },
  { code: 'VND', name: 'Vietnamese Dong', flag: VietnamFlag },
  { code: 'USD', name: 'US Dollar', flag: UsdFlag },
  { code: 'JPY', name: 'Japanese Yen', flag: JpyFlag },
  { code: 'PHP', name: 'Philippine Peso', flag: PhpFlag },
] as const;

export const EXCHANGE_RATES: Record<CurrencyCode, Record<CurrencyCode, number>> = {
  KRW: { KRW: 1, VND: 18.06, USD: 0.00072, JPY: 0.11, PHP: 0.042 },
  VND: { KRW: 0.055, VND: 1, USD: 0.000039, JPY: 0.0062, PHP: 0.0023 },
  USD: { KRW: 1388.89, VND: 25458.50, USD: 1, JPY: 157.32, PHP: 58.65 },
  JPY: { KRW: 8.83, VND: 161.82, USD: 0.0064, JPY: 1, PHP: 0.37 },
  PHP: { KRW: 23.66, VND: 434.08, USD: 0.017, JPY: 2.68, PHP: 1 },
};
