import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Phone, Clock, Globe, ArrowLeft, ArrowRight, Heart, Share } from 'lucide-react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Language } from '@/components/LanguageToggle';
import restaurantImage from '@/assets/restaurant-sample.jpg';

const BusinessDetail = () => {
  const { id } = useParams();
  const [language, setLanguage] = useState<Language>('ar');
  
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.body.className = language === 'ar' ? 'font-arabic' : 'font-english';
  }, [language]);

  const isRTL = language === 'ar';

  const text = {
    ar: {
      back: 'العودة للأعمال',
      contact: 'تواصل معنا',
      share: 'مشاركة',
      save: 'حفظ',
      hours: 'ساعات العمل',
      website: 'الموقع الإلكتروني',
      about: 'حول',
      reviews: 'التقييمات',
      photos: 'الصور',
      location: 'الموقع',
      phone: 'الهاتف',
      featured: 'مميز'
    },
    en: {
      back: 'Back to Businesses',
      contact: 'Contact Us',
      share: 'Share',
      save: 'Save',
      hours: 'Hours',
      website: 'Website',
      about: 'About',
      reviews: 'Reviews',
      photos: 'Photos',
      location: 'Location',
      phone: 'Phone',
      featured: 'Featured'
    }
  };

  // Mock business data
  const business = {
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
    website: 'www.alnuba-restaurant.com',
    image: restaurantImage,
    featured: true,
    description: 'Authentic Sudanese cuisine in the heart of Kuwait. Experience traditional flavors and warm hospitality.',
    descriptionAr: 'مطبخ سوداني أصيل في قلب الكويت. استمتع بالنكهات التقليدية والضيافة الدافئة.',
    hours: {
      ar: 'السبت - الخميس: ١٢:٠٠ م - ١١:٠٠ م',
      en: 'Sat - Thu: 12:00 PM - 11:00 PM'
    }
  };

  const ArrowIcon = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/businesses"
          className={`inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`}
        >
          <ArrowIcon className="w-4 h-4" />
          {text[language].back}
        </Link>

        {/* Business Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <img
              src={business.image}
              alt={language === 'ar' ? business.nameAr : business.name}
              className="w-full h-96 object-cover rounded-2xl"
            />
            {business.featured && (
              <Badge className={`absolute top-4 bg-primary text-primary-foreground ${isRTL ? 'right-4' : 'left-4'}`}>
                {text[language].featured}
              </Badge>
            )}
          </div>

          <div className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div>
              <h1 className={`text-4xl font-bold mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {language === 'ar' ? business.nameAr : business.name}
              </h1>
              <p className={`text-xl text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {language === 'ar' ? business.categoryAr : business.category}
              </p>
            </div>

            <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-lg">{business.rating}</span>
              </div>
              <span className={`text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                ({business.reviews} {language === 'ar' ? 'تقييم' : 'reviews'})
              </span>
            </div>

            <p className={`text-lg leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {language === 'ar' ? business.descriptionAr : business.description}
            </p>

            <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              <Button size="lg" className={`flex-1 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                <Phone className="w-5 h-5 mr-2" />
                {text[language].contact}
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Share className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Business Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className={`font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {text[language].location}
                  </p>
                  <p className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {language === 'ar' ? business.locationAr : business.location}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className={`font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {text[language].phone}
                  </p>
                  <p className="text-sm text-muted-foreground" dir="ltr">
                    {business.phone}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className={`font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {text[language].hours}
                  </p>
                  <p className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {business.hours[language]}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <Globe className="w-5 h-5 text-primary" />
                <div>
                  <p className={`font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {text[language].website}
                  </p>
                  <p className="text-sm text-primary hover:underline cursor-pointer" dir="ltr">
                    {business.website}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <h2 className={`text-2xl font-bold mb-4 ${isRTL ? 'text-right font-arabic' : 'text-left font-english'}`}>
                {text[language].about}
              </h2>
              <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'text-right font-arabic' : 'text-left font-english'}`}>
                {language === 'ar' ? business.descriptionAr : business.description}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className={`text-xl font-bold mb-4 ${isRTL ? 'text-right font-arabic' : 'text-left font-english'}`}>
                {text[language].reviews}
              </h3>
              <div className="space-y-4">
                <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                  <span className="text-3xl font-bold">{business.rating}</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>
                </div>
                <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {language === 'ar' 
                    ? `مبني على ${business.reviews} تقييم` 
                    : `Based on ${business.reviews} reviews`
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default BusinessDetail;