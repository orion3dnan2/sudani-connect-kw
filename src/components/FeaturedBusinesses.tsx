import { BusinessCard } from './BusinessCard';
import { Language } from './LanguageToggle';
import restaurantImage from '@/assets/restaurant-sample.jpg';
import jewelryImage from '@/assets/jewelry-shop.jpg';
import tailoringImage from '@/assets/tailoring-shop.jpg';

interface FeaturedBusinessesProps {
  language: Language;
}

export const FeaturedBusinesses = ({ language }: FeaturedBusinessesProps) => {
  const isRTL = language === 'ar';

  const businesses = [
    {
      id: '1',
      name: 'Al Nuba Restaurant',
      nameAr: 'مطعم النوبة',
      category: 'Traditional Restaurant',
      categoryAr: 'مطعم تقليدي',
      rating: 4.8,
      reviews: 124,
      location: 'Hawalli, Kuwait',
      locationAr: 'حولي، الكويت',
      phone: '+965 2234 5678',
      image: restaurantImage,
      featured: true
    },
    {
      id: '2',
      name: 'Sudanese Gold & Jewelry',
      nameAr: 'الذهب والمجوهرات السودانية',
      category: 'Jewelry & Accessories',
      categoryAr: 'المجوهرات والإكسسوارات',
      rating: 4.9,
      reviews: 89,
      location: 'Salmiya, Kuwait',
      locationAr: 'السالمية، الكويت',
      phone: '+965 2345 6789',
      image: jewelryImage,
      featured: true
    },
    {
      id: '3',
      name: 'Traditional Tailoring House',
      nameAr: 'بيت الخياطة التقليدية',
      category: 'Fashion & Tailoring',
      categoryAr: 'الأزياء والخياطة',
      rating: 4.7,
      reviews: 67,
      location: 'Farwaniya, Kuwait',
      locationAr: 'الفروانية، الكويت',
      phone: '+965 2456 7890',
      image: tailoringImage,
      featured: true
    }
  ];

  const text = {
    ar: {
      title: 'الأعمال المميزة',
      subtitle: 'اكتشف أفضل الخدمات السودانية المختارة بعناية'
    },
    en: {
      title: 'Featured Businesses',
      subtitle: 'Discover the best handpicked Sudanese services'
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className={`mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-3xl font-bold mb-3 ${isRTL ? 'font-arabic' : 'font-english'}`}>
            {text[language].title}
          </h2>
          <p className={`text-lg text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
            {text[language].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business) => (
            <BusinessCard
              key={business.id}
              business={business}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};