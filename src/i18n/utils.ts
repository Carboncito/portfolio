import { defaultLang, ui } from './ui';

type KeyTranslation = (typeof ui)[typeof defaultLang];

export function getLangFromUrl(url: URL) {
  const [_, lang] = url.pathname.split('/');

  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof KeyTranslation) {
    const translations = ui[lang] as KeyTranslation;
    return translations[key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return l === defaultLang ? path : `/${l}${path}`;
  };
}
