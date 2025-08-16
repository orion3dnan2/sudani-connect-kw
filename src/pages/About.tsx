import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Language } from '@/components/LanguageToggle';
import { Users, Target, Heart, Award, Globe, Handshake } from 'lucide-react';
import heroImage from '@/assets/hero-marketplace.jpg';

const About = () => {
  const [language, setLanguage] = useState<Language>('ar');
  
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.body.className = language === 'ar' ? 'font-arabic' : 'font-english';
  }, [language]);

  const isRTL = language === 'ar';

  const text = {
    ar: {
      title: 'من نحن',
      subtitle: 'نحن أكثر من مجرد دليل - نحن جسر يربط المجتمع السوداني في الكويت',
      mission: 'مهمتنا',
      vision: 'رؤيتنا',
      values: 'قيمنا',
      story: 'قصتنا',
      team: 'فريقنا',
      contact: 'تواصل معنا',
      missionText: 'ربط المجتمع السوداني في الكويت وتسهيل الوصول إلى الخدمات والأعمال الأصيلة',
      visionText: 'أن نكون المنصة الرائدة للأعمال السودانية في الكويت والخليج',
      valuesText: 'الأصالة، الجودة، المجتمع، والثقة',
      storyTitle: 'كيف بدأت رحلتنا',
      storyText: 'بدأت فكرة بيت السوداني من حاجة حقيقية في المجتمع السوداني بالكويت. أردنا إنشاء منصة تجمع كل الأعمال والخدمات السودانية في مكان واحد، مما يسهل على الناس العثور على ما يحتاجونه والحفاظ على الهوية الثقافية.',
      stats: {
        businesses: 'نشاط تجاري',
        customers: 'عميل راضي',
        services: 'خدمة متنوعة',
        years: 'سنوات من الخبرة'
      }
    },
    en: {
      title: 'About Us',
      subtitle: 'We are more than just a directory - we are a bridge connecting the Sudanese community in Kuwait',
      mission: 'Our Mission',
      vision: 'Our Vision',
      values: 'Our Values',
      story: 'Our Story',
      team: 'Our Team',
      contact: 'Contact Us',
      missionText: 'Connecting the Sudanese community in Kuwait and facilitating access to authentic services and businesses',
      visionText: 'To be the leading platform for Sudanese businesses in Kuwait and the Gulf region',
      valuesText: 'Authenticity, Quality, Community, and Trust',
      storyTitle: 'How Our Journey Began',
      storyText: 'The idea of Bayt Al Sudani started from a real need in the Sudanese community in Kuwait. We wanted to create a platform that brings together all Sudanese businesses and services in one place, making it easier for people to find what they need while preserving cultural identity.',
      stats: {
        businesses: 'Businesses',
        customers: 'Happy Customers',
        services: 'Diverse Services',
        years: 'Years of Experience'
      }
    }
  };

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: language === 'ar' ? 'مهمتنا' : 'Our Mission',
      description: text[language].missionText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: language === 'ar' ? 'رؤيتنا' : 'Our Vision',
      description: text[language].visionText,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: language === 'ar' ? 'قيمنا' : 'Our Values',
      description: text[language].valuesText,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const stats = [
    {
      number: '200+',
      label: text[language].stats.businesses,
      icon: <Users className="w-6 h-6" />
    },
    {
      number: '5000+',
      label: text[language].stats.customers,
      icon: <Heart className="w-6 h-6" />
    },
    {
      number: '50+',
      label: text[language].stats.services,
      icon: <Award className="w-6 h-6" />
    },
    {
      number: '3+',
      label: text[language].stats.years,
      icon: <Handshake className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`${isRTL ? 'lg:order-2 text-right' : 'text-left'} space-y-6`}>
                <h1 className={`text-4xl md:text-5xl font-bold ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {text[language].title}
                </h1>
                <p className={`text-xl text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {text[language].subtitle}
                </p>
                <Button size="lg" className={isRTL ? 'font-arabic' : 'font-english'}>
                  {text[language].contact}
                </Button>
              </div>
              
              <div className={`${isRTL ? 'lg:order-1' : ''} relative`}>
                <img
                  src={heroImage}
                  alt={text[language].title}
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-primary mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-white`}>
                      {feature.icon}
                    </div>
                    <h3 className={`text-xl font-semibold mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className={`text-center mb-12`}>
                <h2 className={`text-3xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {text[language].storyTitle}
                </h2>
              </div>
              
              <Card>
                <CardContent className="p-8">
                  <p className={`text-lg leading-relaxed ${isRTL ? 'text-right font-arabic' : 'text-left font-english'}`}>
                    {text[language].storyText}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <CardContent className="p-12 text-center">
                <h2 className={`text-3xl font-bold mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {language === 'ar' 
                    ? 'انضم إلى مجتمعنا اليوم' 
                    : 'Join Our Community Today'
                  }
                </h2>
                <p className={`text-xl mb-8 opacity-90 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {language === 'ar' 
                    ? 'كن جزءاً من شبكة الأعمال السودانية المتنامية في الكويت' 
                    : 'Be part of the growing Sudanese business network in Kuwait'
                  }
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className={`${isRTL ? 'font-arabic' : 'font-english'} text-primary hover:text-primary`}
                >
                  {language === 'ar' ? 'ابدأ معنا' : 'Get Started'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;