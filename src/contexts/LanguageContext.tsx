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
    
    // Pages
    'flights.title': 'Авиабилеты',
    'flights.subtitle': 'Найдем лучшие авиабилеты для вашего путешествия',
    'hotels.title': 'Отели',
    'hotels.subtitle': 'Подберем идеальный отель для вашего отдыха',
    'excursions.title': 'Экскурсии',
    'excursions.subtitle': 'Откройте для себя лучшие места и приключения',
    'entertainment.title': 'Развлечения',
    'entertainment.subtitle': 'Лучшие рестораны, ночная жизнь и развлечения',
    'jobs.title': 'Работа',
    'jobs.subtitle': 'Найдите работу за границей в туристической сфере',
    'info.title': 'Информация',
    'info.subtitle': 'Полезная информация для путешественников',
    
    // Tour Constructor
    'constructor.title': 'Конструктор путешествий',
    'constructor.subtitle': 'Создайте идеальное путешествие с нашей помощью',
    'constructor.days': 'Дни',
    'constructor.people': 'Человек',
    'constructor.countries': 'Страны',
    'constructor.price_for': 'Стоимость за',
    'constructor.country': 'страну',
    'constructor.countries_2': 'страны',
    'constructor.countries_3': 'страны',
    'constructor.per_person': 'на человека',
    'constructor.excursion_planning': 'Планирование экскурсий',
    'constructor.auto_selection': 'Автоподбор',
    'constructor.manual_selection': 'Ручной выбор',
    'constructor.get_consultation': 'Получить консультацию',
    
    // Common
    'common.from': 'от',
    'common.per_person': 'за человека',
    'common.book': 'Забронировать',
    'common.details': 'Подробнее',
    'common.contact_us': 'Связаться с нами',
    'common.search': 'Найти',
    'common.departure': 'Откуда',
    'common.destination': 'Куда',
    'common.date': 'Дата',
    'common.passengers': 'Пассажиры',
    'common.checkin': 'Заезд',
    'common.checkout': 'Выезд',
    'common.rooms': 'Номера',
    'common.guests': 'Гости',
    
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
    
    // Pages
    'flights.title': 'Flights',
    'flights.subtitle': 'Find the best flights for your trip',
    'hotels.title': 'Hotels',
    'hotels.subtitle': 'Find the perfect hotel for your vacation',
    'excursions.title': 'Excursions',
    'excursions.subtitle': 'Discover the best places and adventures',
    'entertainment.title': 'Entertainment',
    'entertainment.subtitle': 'Best restaurants, nightlife and entertainment',
    'jobs.title': 'Jobs',
    'jobs.subtitle': 'Find work abroad in tourism',
    'info.title': 'Information',
    'info.subtitle': 'Useful information for travelers',
    
    // Tour Constructor
    'constructor.title': 'Trip Builder',
    'constructor.subtitle': 'Create the perfect trip with our help',
    'constructor.days': 'Days',
    'constructor.people': 'People',
    'constructor.countries': 'Countries',
    'constructor.price_for': 'Price for',
    'constructor.country': 'country',
    'constructor.countries_2': 'countries',
    'constructor.countries_3': 'countries',
    'constructor.per_person': 'per person',
    'constructor.excursion_planning': 'Excursion Planning',
    'constructor.auto_selection': 'Auto Selection',
    'constructor.manual_selection': 'Manual Selection',
    'constructor.get_consultation': 'Get Consultation',
    
    // Common
    'common.from': 'from',
    'common.per_person': 'per person',
    'common.book': 'Book Now',
    'common.details': 'Learn More',
    'common.contact_us': 'Contact Us',
    'common.search': 'Search',
    'common.departure': 'From',
    'common.destination': 'To',
    'common.date': 'Date',
    'common.passengers': 'Passengers',
    'common.checkin': 'Check-in',
    'common.checkout': 'Check-out',
    'common.rooms': 'Rooms',
    'common.guests': 'Guests',
    
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