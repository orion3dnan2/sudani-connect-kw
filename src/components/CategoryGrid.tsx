import { Store, Utensils, Car, Hammer, Palette, Stethoscope, GraduationCap, ShoppingBag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Language } from './LanguageToggle';

interface Category {
  id: string;
  name: string;
  nameAr: string;
  icon: React.ReactNode;
  count: number;
  color: string;
}

interface CategoryGridProps {
  language: Language;
}

export const CategoryGrid = ({ language }: CategoryGridProps) => {
  const isRTL = language === 'ar';

  const categories: Category[] = [
    {
      id: 'restaurants',
      name: 'Restaurants',
      nameAr: 'المطاعم',
      icon: <Utensils className="w-6 h-6" />,
      count: 45,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'retail',
      name: 'Retail Shops',
      nameAr: 'المتاجر',
      icon: <Store className="w-6 h-6" />,
      count: 32,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'automotive',
      name: 'Automotive',
      nameAr: 'السيارات',
      icon: <Car className="w-6 h-6" />,
      count: 18,
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 'services',
      name: 'Services',
      nameAr: 'الخدمات',
      icon: <Hammer className="w-6 h-6" />,
      count: 67,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'beauty',
      name: 'Beauty & Fashion',
      nameAr: 'الجمال والأزياء',
      icon: <Palette className="w-6 h-6" />,
      count: 23,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      nameAr: 'الرعاية الصحية',
      icon: <Stethoscope className="w-6 h-6" />,
      count: 15,
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 'education',
      name: 'Education',
      nameAr: 'التعليم',
      icon: <GraduationCap className="w-6 h-6" />,
      count: 12,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'shopping',
      name: 'Shopping',
      nameAr: 'التسوق',
      icon: <ShoppingBag className="w-6 h-6" />,
      count: 28,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const text = {
    ar: {
      title: 'تصفح حسب الفئة',
      businesses: 'نشاط تجاري'
    },
    en: {
      title: 'Browse by Category',
      businesses: 'businesses'
    }
  };

  return (
    <section className="mb-8">
      <h2 className={`text-2xl font-bold mb-6 ${isRTL ? 'text-right font-arabic' : 'text-left font-english'}`}>
        {text[language].title}
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Card 
            key={category.id}
            className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-card border-border"
          >
            <CardContent className="p-4 text-center">
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                {category.icon}
              </div>
              <h3 className={`font-medium text-foreground mb-1 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {language === 'ar' ? category.nameAr : category.name}
              </h3>
              <p className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {category.count} {text[language].businesses}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};