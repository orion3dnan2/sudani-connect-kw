import { useState } from 'react';
import { Search, Menu, Heart, ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useLocation } from 'react-router-dom';
import { LanguageToggle, Language } from './LanguageToggle';

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isRTL = language === 'ar';
  
  const text = {
    ar: {
      title: 'بيت السوداني',
      subtitle: 'دليل الأعمال السودانية',
      search: 'ابحث عن الخدمات والمنتجات...',
      menu: 'القائمة',
      home: 'الرئيسية',
      businesses: 'الأعمال',
      services: 'الخدمات',
      about: 'من نحن',
      contact: 'اتصل بنا'
    },
    en: {
      title: 'Bayt Al Sudani',
      subtitle: 'Sudanese Business Directory',
      search: 'Search for services and products...',
      menu: 'Menu',
      home: 'Home',
      businesses: 'Businesses',
      services: 'Services',
      about: 'About',
      contact: 'Contact'
    }
  };

  const navItems = [
    { path: '/', labelKey: 'home' },
    { path: '/businesses', labelKey: 'businesses' },
    { path: '/services', labelKey: 'services' },
    { path: '/about', labelKey: 'about' },
    { path: '/contact', labelKey: 'contact' }
  ];

  return (
    <header className="bg-card shadow-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        {/* Top row */}
        <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
          <Link to="/" className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">ب</span>
            </div>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h1 className={`text-xl font-bold text-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {text[language].title}
              </h1>
              <p className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {text[language].subtitle}
              </p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${isRTL ? 'font-arabic' : 'font-english'} transition-colors hover:text-primary ${
                  location.pathname === item.path 
                    ? 'text-primary font-semibold border-b-2 border-primary pb-1' 
                    : 'text-muted-foreground'
                }`}
              >
                {text[language][item.labelKey as keyof typeof text[typeof language]]}
              </Link>
            ))}
          </nav>
          
          <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <LanguageToggle currentLanguage={language} onLanguageChange={onLanguageChange} />
            <Button variant="ghost" size="sm">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mb-4 py-4 border-t ${isRTL ? 'text-right' : 'text-left'}`}>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${isRTL ? 'font-arabic' : 'font-english'} py-2 transition-colors hover:text-primary ${
                    location.pathname === item.path 
                      ? 'text-primary font-semibold' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {text[language][item.labelKey as keyof typeof text[typeof language]]}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Search bar */}
        <div className="relative">
          <Search className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground ${isRTL ? 'right-3' : 'left-3'}`} />
          <Input
            type="text"
            placeholder={text[language].search}
            className={`w-full bg-background ${isRTL ? 'pr-10 text-right font-arabic' : 'pl-10 font-english'} py-3 rounded-xl border-border focus:ring-2 focus:ring-primary/20`}
            dir={isRTL ? 'rtl' : 'ltr'}
          />
        </div>
      </div>
    </header>
  );
};