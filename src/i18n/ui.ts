import en from './en.json';
import es from './es.json';

export const languages = {
  es: 'Español',
  en: 'English',
};
export const defaultLang: keyof typeof languages = 'en';
export const ui = {
  en,
  es,
} as const;
