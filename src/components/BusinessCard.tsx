import { Star, MapPin, Phone, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Language } from './LanguageToggle';

interface Business {
  id: string;
  name: string;
  nameAr: string;
  category: string;
  categoryAr: string;
  rating: number;
  reviews: number;
  location: string;
  locationAr: string;
  phone: string;
  image: string;
  featured?: boolean;
}

interface BusinessCardProps {
  business: Business;
  language: Language;
}

export const BusinessCard = ({ business, language }: BusinessCardProps) => {
  const isRTL = language === 'ar';
  
  const displayName = language === 'ar' ? business.nameAr : business.name;
  const displayCategory = language === 'ar' ? business.categoryAr : business.category;
  const displayLocation = language === 'ar' ? business.locationAr : business.location;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={business.image} 
            alt={displayName}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {business.featured && (
            <Badge className={`absolute top-3 bg-primary text-primary-foreground ${isRTL ? 'right-3' : 'left-3'}`}>
              {language === 'ar' ? 'مميز' : 'Featured'}
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            className={`absolute top-3 bg-white/80 hover:bg-white text-foreground ${isRTL ? 'left-3' : 'right-3'}`}
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="p-4">
          <div className={`flex items-start justify-between ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className={`font-semibold text-lg text-foreground mb-1 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {displayName}
              </h3>
              <p className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {displayCategory}
              </p>
            </div>
          </div>
          
          <div className={`flex items-center gap-1 mt-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{business.rating}</span>
            <span className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : 'font-english'}`}>
              ({business.reviews} {language === 'ar' ? 'تقييم' : 'reviews'})
            </span>
          </div>
          
          <div className={`flex items-center gap-2 mt-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {displayLocation}
            </span>
          </div>
          
          <div className={`flex items-center gap-2 mt-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <Phone className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground" dir="ltr">
              {business.phone}
            </span>
          </div>
          
          <Button 
            className={`w-full mt-4 ${isRTL ? 'font-arabic' : 'font-english'}`}
            variant="outline"
          >
            {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};