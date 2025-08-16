import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Language } from '@/components/LanguageToggle';
import { 
  Utensils, Car, Hammer, Palette, Stethoscope, GraduationCap, 
  ShoppingBag, Phone, MapPin, Clock, Users 
} from 'lucide-react';

const Services = () => {
  const [language, setLanguage] = useState<Language>('ar');
  
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.body.className = language === 'ar' ? 'font-arabic' : 'font-english';
  }, [language]);

  const isRTL = language === 'ar';

  const text = {
    ar: {
      title: 'الخدمات',
      subtitle: 'اكتشف مجموعة واسعة من الخدمات السودانية المتخصصة',
      contact: 'تواصل الآن',
      available: 'متوفر',
      popular: 'شائع'
    },
    en: {
      title: 'Services',
      subtitle: 'Discover a wide range of specialized Sudanese services',
      contact: 'Contact Now',
      available: 'Available',
      popular: 'Popular'
    }
  };

  const services = [
    {
      id: '1',
      name: 'Traditional Catering',
      nameAr: 'خدمات الطعام التقليدية',
      description: 'Authentic Sudanese cuisine for events and gatherings',
      descriptionAr: 'مأكولات سودانية أصيلة للمناسبات والتجمعات',
      icon: <Utensils className="w-8 h-8" />,
      provider: 'Al Nuba Catering',
      providerAr: 'النوبة للخدمات',
      phone: '+965 2234 5678',
      location: 'Kuwait City',
      locationAr: 'مدينة الكويت',
      rating: 4.8,
      price: 'من 15 د.ك',
      priceEn: 'From 15 KD',
      color: 'from-red-500 to-orange-500',
      popular: true
    },
    {
      id: '2',
      name: 'Car Maintenance',
      nameAr: 'صيانة السيارات',
      description: 'Professional automotive repair and maintenance services',
      descriptionAr: 'خدمات إصلاح وصيانة السيارات المهنية',
      icon: <Car className="w-8 h-8" />,
      provider: 'Khartoum Auto Center',
      providerAr: 'مركز الخرطوم للسيارات',
      phone: '+965 2345 6789',
      location: 'Farwaniya',
      locationAr: 'الفروانية',
      rating: 4.6,
      price: 'من 25 د.ك',
      priceEn: 'From 25 KD',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: '3',
      name: 'Home Repairs',
      nameAr: 'إصلاحات المنزل',
      description: 'Complete home renovation and repair solutions',
      descriptionAr: 'حلول كاملة لتجديد وإصلاح المنازل',
      icon: <Hammer className="w-8 h-8" />,
      provider: 'Sudan Builders',
      providerAr: 'البناة السودانيون',
      phone: '+965 2456 7890',
      location: 'Hawalli',
      locationAr: 'حولي',
      rating: 4.7,
      price: 'من 50 د.ك',
      priceEn: 'From 50 KD',
      color: 'from-green-500 to-emerald-500',
      popular: true
    },
    {
      id: '4',
      name: 'Beauty & Fashion',
      nameAr: 'الجمال والأزياء',
      description: 'Traditional and modern beauty services',
      descriptionAr: 'خدمات الجمال التقليدية والحديثة',
      icon: <Palette className="w-8 h-8" />,
      provider: 'Nile Beauty Center',
      providerAr: 'مركز النيل للجمال',
      phone: '+965 2567 8901',
      location: 'Salmiya',
      locationAr: 'السالمية',
      rating: 4.9,
      price: 'من 20 د.ك',
      priceEn: 'From 20 KD',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: '5',
      name: 'Healthcare Services',
      nameAr: 'الخدمات الصحية',
      description: 'Professional healthcare and wellness services',
      descriptionAr: 'خدمات الرعاية الصحية والعافية المهنية',
      icon: <Stethoscope className="w-8 h-8" />,
      provider: 'Sudan Medical Center',
      providerAr: 'المركز الطبي السوداني',
      phone: '+965 2678 9012',
      location: 'Jahra',
      locationAr: 'الجهراء',
      rating: 4.8,
      price: 'من 30 د.ك',
      priceEn: 'From 30 KD',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: '6',
      name: 'Education & Tutoring',
      nameAr: 'التعليم والدروس الخصوصية',
      description: 'Arabic language and cultural education services',
      descriptionAr: 'خدمات تعليم اللغة العربية والثقافة',
      icon: <GraduationCap className="w-8 h-8" />,
      provider: 'Khartoum Academy',
      providerAr: 'أكاديمية الخرطوم',
      phone: '+965 2789 0123',
      location: 'Kuwait City',
      locationAr: 'مدينة الكويت',
      rating: 4.7,
      price: 'من 12 د.ك',
      priceEn: 'From 12 KD',
      color: 'from-indigo-500 to-purple-500',
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className={`mb-12 text-center`}>
          <h1 className={`text-4xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}>
            {text[language].title}
          </h1>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-english'}`}>
            {text[language].subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className={`flex items-start gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className={`flex items-start justify-between mb-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                      <h3 className={`text-xl font-semibold ${isRTL ? 'font-arabic' : 'font-english'}`}>
                        {language === 'ar' ? service.nameAr : service.name}
                      </h3>
                      {service.popular && (
                        <Badge variant="secondary" className={`${isRTL ? 'font-arabic mr-2' : 'font-english ml-2'}`}>
                          {text[language].popular}
                        </Badge>
                      )}
                    </div>
                    <p className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : 'font-english'}`}>
                      {language === 'ar' ? service.descriptionAr : service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className={`text-sm font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}>
                      {language === 'ar' ? service.providerAr : service.provider}
                    </span>
                  </div>

                  <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                      {language === 'ar' ? service.locationAr : service.location}
                    </span>
                  </div>

                  <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                      <span className="text-sm text-muted-foreground">⭐</span>
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                    <div className={`text-sm font-bold text-primary ${isRTL ? 'font-arabic' : 'font-english'}`}>
                      {language === 'ar' ? service.price : service.priceEn}
                    </div>
                  </div>
                </div>

                <Button 
                  className={`w-full mt-4 ${isRTL ? 'font-arabic' : 'font-english'}`}
                  variant="outline"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {text[language].contact}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <h2 className={`text-2xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}>
            {language === 'ar' 
              ? 'هل تريد إضافة خدمتك؟' 
              : 'Want to add your service?'
            }
          </h2>
          <p className={`text-muted-foreground mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`}>
            {language === 'ar' 
              ? 'انضم إلى دليلنا واكتسب عملاء جدد' 
              : 'Join our directory and gain new customers'
            }
          </p>
          <Button size="lg" className={isRTL ? 'font-arabic' : 'font-english'}>
            {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Services;