import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { CategoryGrid } from '@/components/CategoryGrid';
import { FeaturedBusinesses } from '@/components/FeaturedBusinesses';
import { Language } from '@/components/LanguageToggle';

const Index = () => {
  const [language, setLanguage] = useState<Language>('ar');

  // Apply RTL class to document
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Apply font family based on language
    if (language === 'ar') {
      document.body.className = 'font-arabic';
    } else {
      document.body.className = 'font-english';
    }
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main>
        <HeroSection language={language} />
        
        <div className="container mx-auto px-4">
          <CategoryGrid language={language} />
          <FeaturedBusinesses language={language} />
        </div>
      </main>
      
      <footer className="bg-muted/50 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className={`text-center ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            <p className="text-muted-foreground">
              {language === 'ar' 
                ? '© 2024 بيت السوداني. جميع الحقوق محفوظة.' 
                : '© 2024 Bayt Al Sudani. All rights reserved.'
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
