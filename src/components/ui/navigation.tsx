import { Button } from "@/components/ui/button";
import { Search, MapPin, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  
  return <nav className="bg-card/90 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
                Тур Маркет
              </h1>
              <p className="text-sm text-muted-foreground">Всё про Азию</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/flights" className="text-foreground hover:text-primary transition-smooth">
              {t('nav.flights')}
            </Link>
            <Link to="/hotels" className="text-foreground hover:text-primary transition-smooth">
              {t('nav.hotels')}
            </Link>
            <Link to="/excursions" className="text-foreground hover:text-primary transition-smooth">
              {t('nav.excursions')}
            </Link>
            <Link to="/entertainment" className="text-foreground hover:text-primary transition-smooth">
              {t('nav.entertainment')}
            </Link>
            <Link to="/jobs" className="text-foreground hover:text-primary transition-smooth">
              {t('nav.jobs')}
            </Link>
            <Link to="/info" className="text-foreground hover:text-primary transition-smooth">
              {t('nav.info')}
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
              className="hidden sm:flex"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language === 'ru' ? 'EN' : 'RU'}
            </Button>
            <Button size="sm" variant="outline" className="hidden sm:flex">
              <Phone className="h-4 w-4 mr-2" />
              {t('nav.contacts')}
            </Button>
            <Button size="sm" className="bg-gradient-ocean text-white border-0 shadow-soft hover:shadow-elevated transition-smooth">
              <Search className="h-4 w-4 mr-2" />
              {t('nav.search')}
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;