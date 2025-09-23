import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Navigation
    'nav.excursions': 'Экскурсии',
    'nav.entertainment': 'Развлечения', 
    'nav.flights': 'Авиабилеты',
    'nav.hotels': 'Отели',
    'nav.jobs': 'Работа',
    'nav.info': 'Информация',
    'nav.contacts': 'Контакты',
    'nav.search': 'Поиск',
    
    // Hero section
    'hero.title': 'Ваш персональный консьерж в Азии',
    'hero.subtitle': 'Поможем с любыми вопросами по отдыху и путешествиям в Нячанге и других странах Азии',
    'hero.cta': 'Получить консультацию',
    
    // Common
    'common.from': 'от',
    'common.per_person': 'за человека',
    'common.book': 'Забронировать',
    'common.details': 'Подробнее',
    'common.contact_us': 'Связаться с нами',
    
    // Footer
    'footer.description': 'Ваш персональный консьерж в Азии. Поможем с любыми вопросами по отдыху и путешествиям!',
    'footer.copyright': 'Все права защищены.',
  },
  en: {
    // Navigation  
    'nav.excursions': 'Excursions',
    'nav.entertainment': 'Entertainment',
    'nav.flights': 'Flights', 
    'nav.hotels': 'Hotels',
    'nav.jobs': 'Jobs',
    'nav.info': 'Information',
    'nav.contacts': 'Contacts',
    'nav.search': 'Search',
    
    // Hero section
    'hero.title': 'Your Personal Concierge in Asia',
    'hero.subtitle': 'We help with any questions about leisure and travel in Nha Trang and other Asian countries',
    'hero.cta': 'Get Consultation',
    
    // Common
    'common.from': 'from',
    'common.per_person': 'per person',
    'common.book': 'Book Now',
    'common.details': 'Learn More',
    'common.contact_us': 'Contact Us',
    
    // Footer
    'footer.description': 'Your personal concierge in Asia. We help with any questions about leisure and travel!',
    'footer.copyright': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ru']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};