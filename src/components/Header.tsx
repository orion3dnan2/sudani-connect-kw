import { Search, Menu, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LanguageToggle, Language } from './LanguageToggle';

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const isRTL = language === 'ar';
  
  const text = {
    ar: {
      title: 'بيت السوداني',
      subtitle: 'دليل الأعمال السودانية',
      search: 'ابحث عن الخدمات والمنتجات...',
      menu: 'القائمة'
    },
    en: {
      title: 'Bayt Al Sudani',
      subtitle: 'Sudanese Business Directory',
      search: 'Search for services and products...',
      menu: 'Menu'
    }
  };

  return (
    <header className="bg-card shadow-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        {/* Top row */}
        <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
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
          </div>
          
          <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <LanguageToggle currentLanguage={language} onLanguageChange={onLanguageChange} />
            <Button variant="ghost" size="sm">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

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