import { Button } from "@/components/ui/button";
import { Search, MapPin, Phone } from "lucide-react";
const Navigation = () => {
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
            <a href="#excursions" className="text-foreground hover:text-primary transition-smooth">
              Экскурсии
            </a>
            <a href="#entertainment" className="text-foreground hover:text-primary transition-smooth">
              Развлечения
            </a>
            <a href="#info" className="text-foreground hover:text-primary transition-smooth">
              Информация
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button size="sm" variant="outline" className="hidden sm:flex">
              <Phone className="h-4 w-4 mr-2" />
              Контакты
            </Button>
            <Button size="sm" className="bg-gradient-ocean text-white border-0 shadow-soft hover:shadow-elevated transition-smooth">
              <Search className="h-4 w-4 mr-2" />
              Поиск
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;