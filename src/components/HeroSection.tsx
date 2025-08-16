import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Language } from './LanguageToggle';
import heroImage from '@/assets/hero-marketplace.jpg';

interface HeroSectionProps {
  language: Language;
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  const isRTL = language === 'ar';
  
  const text = {
    ar: {
      title: 'مرحباً بك في بيت السوداني',
      subtitle: 'اكتشف أفضل الأعمال السودانية في الكويت',
      description: 'دليلك الشامل للمطاعم والمتاجر والخدمات السودانية الأصيلة',
      cta: 'ابدأ الاستكشاف',
      businesses: 'نشاط تجاري',
      services: 'خدمة'
    },
    en: {
      title: 'Welcome to Bayt Al Sudani',
      subtitle: 'Discover the Best Sudanese Businesses in Kuwait',
      description: 'Your comprehensive guide to authentic Sudanese restaurants, shops, and services',
      cta: 'Start Exploring',
      businesses: 'Businesses',
      services: 'Services'
    }
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/50 to-secondary/30 py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
      
      <div className="container mx-auto px-4 relative">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          <div className={`${isRTL ? 'lg:col-start-2 text-right' : 'text-left'} space-y-6`}>
            <div className="space-y-4">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`}>
                <span className="bg-gradient-to-r from-primary via-primary-dark to-accent bg-clip-text text-transparent">
                  {text[language].title}
                </span>
              </h1>
              
              <h2 className={`text-xl md:text-2xl text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {text[language].subtitle}
              </h2>
              
              <p className={`text-lg text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {text[language].description}
              </p>
            </div>

            {/* Stats */}
            <div className={`flex gap-8 py-6 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {text[language].businesses}
                </div>
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <div className="text-3xl font-bold text-accent">150+</div>
                <div className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {text[language].services}
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className={`group ${isRTL ? 'font-arabic' : 'font-english'} px-8 py-6 text-lg bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-accent transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              {text[language].cta}
              <ArrowIcon className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2' : 'ml-2'}`} />
            </Button>
          </div>

          <div className={`${isRTL ? 'lg:col-start-1' : ''} relative`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <img
                src={heroImage}
                alt={text[language].title}
                className="relative rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};