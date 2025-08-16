import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Language } from '@/components/LanguageToggle';
import { 
  Phone, Mail, MapPin, Clock, Send, MessageCircle, 
  Facebook, Instagram, Twitter, Linkedin 
} from 'lucide-react';

const Contact = () => {
  const [language, setLanguage] = useState<Language>('ar');
  
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.body.className = language === 'ar' ? 'font-arabic' : 'font-english';
  }, [language]);

  const isRTL = language === 'ar';

  const text = {
    ar: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا لمساعدتك - تواصل معنا في أي وقت',
      getInTouch: 'تواصل معنا',
      contactInfo: 'معلومات التواصل',
      followUs: 'تابعنا',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        subject: 'الموضوع',
        message: 'الرسالة',
        send: 'إرسال الرسالة',
        namePlaceholder: 'أدخل اسمك الكامل',
        emailPlaceholder: 'your@email.com',
        phonePlaceholder: '+965 xxxx xxxx',
        subjectPlaceholder: 'كيف يمكننا مساعدتك؟',
        messagePlaceholder: 'اكتب رسالتك هنا...'
      },
      office: 'المكتب الرئيسي',
      hours: 'ساعات العمل',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      address: 'مدينة الكويت، الكويت',
      workingHours: 'الأحد - الخميس: ٩:٠٠ص - ٦:٠٠م',
      response: 'سنرد عليك خلال ٢٤ ساعة'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We\'re here to help - reach out to us anytime',
      getInTouch: 'Get in Touch',
      contactInfo: 'Contact Information',
      followUs: 'Follow Us',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        namePlaceholder: 'Enter your full name',
        emailPlaceholder: 'your@email.com',
        phonePlaceholder: '+965 xxxx xxxx',
        subjectPlaceholder: 'How can we help you?',
        messagePlaceholder: 'Write your message here...'
      },
      office: 'Main Office',
      hours: 'Working Hours',
      email: 'Email',
      phone: 'Phone',
      address: 'Kuwait City, Kuwait',
      workingHours: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
      response: 'We\'ll respond within 24 hours'
    }
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: text[language].phone,
      value: '+965 2345 6789',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: text[language].email,
      value: 'info@baytalsudani.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: text[language].office,
      value: text[language].address,
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: text[language].hours,
      value: text[language].workingHours,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      name: 'Facebook',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: 'Instagram',
      color: 'hover:text-pink-600'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: 'Twitter',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      color: 'hover:text-blue-700'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {text[language].title}
            </h1>
            <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {text[language].subtitle}
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-bold text-center mb-12 ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {text[language].contactInfo}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center text-white`}>
                      {method.icon}
                    </div>
                    <h3 className={`font-semibold mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                      {method.title}
                    </h3>
                    <p className={`text-muted-foreground text-sm ${isRTL && method.title !== text[language].email ? 'font-arabic' : 'font-english'}`}>
                      {method.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <Card>
                <CardContent className="p-8">
                  <h2 className={`text-2xl font-bold mb-6 ${isRTL ? 'text-right font-arabic' : 'text-left font-english'}`}>
                    {text[language].getInTouch}
                  </h2>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right font-arabic' : 'text-left font-english'}`}>
                          {text[language].form.name}
                        </label>
                        <Input
                          placeholder={text[language].form.namePlaceholder}
                          className={`${isRTL ? 'text-right font-arabic' : 'font-english'}`}
                          dir={isRTL ? 'rtl' : 'ltr'}
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right font-arabic' : 'text-left font-english'}`}>
                          {text[language].form.email}
                        </label>
                        <Input
                          type="email"
                          placeholder={text[language].form.emailPlaceholder}
                          className="font-english"
                          dir="ltr"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right font-arabic' : 'text-left font-english'}`}>
                          {text[language].form.phone}
                        </label>
                        <Input
                          placeholder={text[language].form.phonePlaceholder}
                          className="font-english"
                          dir="ltr"
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right font-arabic' : 'text-left font-english'}`}>
                          {text[language].form.subject}
                        </label>
                        <Input
                          placeholder={text[language].form.subjectPlaceholder}
                          className={`${isRTL ? 'text-right font-arabic' : 'font-english'}`}
                          dir={isRTL ? 'rtl' : 'ltr'}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right font-arabic' : 'text-left font-english'}`}>
                        {text[language].form.message}
                      </label>
                      <Textarea
                        placeholder={text[language].form.messagePlaceholder}
                        rows={5}
                        className={`${isRTL ? 'text-right font-arabic' : 'font-english'}`}
                        dir={isRTL ? 'rtl' : 'ltr'}
                      />
                    </div>
                    
                    <Button size="lg" className={`w-full ${isRTL ? 'font-arabic' : 'font-english'}`}>
                      <Send className="w-5 h-5 mr-2" />
                      {text[language].form.send}
                    </Button>
                    
                    <p className={`text-sm text-muted-foreground text-center ${isRTL ? 'font-arabic' : 'font-english'}`}>
                      {text[language].response}
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Info Card */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                      <MessageCircle className="w-8 h-8 text-primary" />
                      <h3 className={`text-xl font-semibold ${isRTL ? 'font-arabic' : 'font-english'}`}>
                        {language === 'ar' 
                          ? 'لديك استفسار؟' 
                          : 'Have a Question?'
                        }
                      </h3>
                    </div>
                    <p className={`text-muted-foreground mb-4 ${isRTL ? 'text-right font-arabic' : 'text-left font-english'}`}>
                      {language === 'ar' 
                        ? 'نحن هنا لمساعدتك. تواصل معنا عبر أي من الطرق المتاحة وسنرد عليك في أقرب وقت ممكن.' 
                        : 'We\'re here to help. Contact us through any of the available methods and we\'ll get back to you as soon as possible.'
                      }
                    </p>
                    <div className="space-y-3">
                      <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                        <Phone className="w-5 h-5 text-primary" />
                        <span className="font-english">+965 2345 6789</span>
                      </div>
                      <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                        <Mail className="w-5 h-5 text-primary" />
                        <span className="font-english">info@baytalsudani.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className={`text-xl font-semibold mb-6 ${isRTL ? 'text-right font-arabic' : 'text-left font-english'}`}>
                      {text[language].followUs}
                    </h3>
                    <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                      {socialLinks.map((social, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="icon"
                          className={`transition-colors ${social.color}`}
                          aria-label={social.name}
                        >
                          {social.icon}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;