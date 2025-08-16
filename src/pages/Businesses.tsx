import { useState, useEffect } from 'react';
import { Filter, Grid, List, Star, MapPin, Phone } from 'lucide-react';
import { Header } from '@/components/Header';
import { BusinessCard } from '@/components/BusinessCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Language } from '@/components/LanguageToggle';
import restaurantImage from '@/assets/restaurant-sample.jpg';
import jewelryImage from '@/assets/jewelry-shop.jpg';
import tailoringImage from '@/assets/tailoring-shop.jpg';

const Businesses = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.body.className = language === 'ar' ? 'font-arabic' : 'font-english';
  }, [language]);

  const isRTL = language === 'ar';

  const text = {
    ar: {
      title: 'جميع الأعمال',
      subtitle: 'استكشف دليلنا الشامل للأعمال السودانية',
      filter: 'تصفية',
      grid: 'شبكة',
      list: 'قائمة',
      results: 'نتيجة',
      category: 'الفئة',
      location: 'الموقع',
      rating: 'التقييم'
    },
    en: {
      title: 'All Businesses',
      subtitle: 'Explore our comprehensive directory of Sudanese businesses',
      filter: 'Filter',
      grid: 'Grid',
      list: 'List',
      results: 'results',
      category: 'Category',
      location: 'Location',
      rating: 'Rating'
    }
  };

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
    },
    {
      id: '4',
      name: 'Khartoum Spices',
      nameAr: 'بهارات الخرطوم',
      category: 'Grocery & Spices',
      categoryAr: 'البقالة والبهارات',
      rating: 4.6,
      reviews: 45,
      location: 'Jahra, Kuwait',
      locationAr: 'الجهراء، الكويت',
      phone: '+965 2567 8901',
      image: restaurantImage
    },
    {
      id: '5',
      name: 'Blue Nile Electronics',
      nameAr: 'النيل الأزرق للإلكترونيات',
      category: 'Electronics',
      categoryAr: 'الإلكترونيات',
      rating: 4.5,
      reviews: 78,
      location: 'Kuwait City',
      locationAr: 'مدينة الكويت',
      phone: '+965 2678 9012',
      image: jewelryImage
    },
    {
      id: '6',
      name: 'Sudanese Cultural Center',
      nameAr: 'المركز الثقافي السوداني',
      category: 'Cultural & Events',
      categoryAr: 'الثقافة والفعاليات',
      rating: 4.8,
      reviews: 92,
      location: 'Ahmadi, Kuwait',
      locationAr: 'الأحمدي، الكويت',
      phone: '+965 2789 0123',
      image: tailoringImage
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className={`mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h1 className={`text-4xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}>
            {text[language].title}
          </h1>
          <p className={`text-lg text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
            {text[language].subtitle}
          </p>
        </div>

        {/* Filters and View Controls */}
        <div className={`flex flex-col md:flex-row justify-between items-center mb-8 gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <Button variant="outline" className={`gap-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
              <Filter className="w-4 h-4" />
              {text[language].filter}
            </Button>
            <Badge variant="secondary" className={isRTL ? 'font-arabic' : 'font-english'}>
              {businesses.length} {text[language].results}
            </Badge>
          </div>
          
          <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Business Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
                language={language}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {businesses.map((business) => (
              <Card key={business.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                    <img 
                      src={business.image} 
                      alt={language === 'ar' ? business.nameAr : business.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <h3 className={`text-xl font-semibold mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                        {language === 'ar' ? business.nameAr : business.name}
                      </h3>
                      <p className={`text-muted-foreground mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                        {language === 'ar' ? business.categoryAr : business.category}
                      </p>
                      
                      <div className={`flex flex-wrap gap-4 text-sm ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{business.rating}</span>
                        </div>
                        <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className={isRTL ? 'font-arabic' : 'font-english'}>
                            {language === 'ar' ? business.locationAr : business.location}
                          </span>
                        </div>
                        <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span dir="ltr">{business.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Businesses;