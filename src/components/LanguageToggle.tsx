import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export type Language = 'ar' | 'en';

interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export const LanguageToggle = ({ currentLanguage, onLanguageChange }: LanguageToggleProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(currentLanguage === 'ar' ? 'en' : 'ar')}
      className="gap-2 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
    >
      <Globe className="w-4 h-4" />
      {currentLanguage === 'ar' ? 'English' : 'العربية'}
    </Button>
  );
};