import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/nha-trang-hero.jpg";
const HeroSection = () => {
  return <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-background/80" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Добро пожаловать 
            <span className="block text-secondary">в Азию</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow">
            Откройте для себя лучшие экскурсии, развлечения и места отдыха 
            в тропическом раю Вьетнама
          </p>
          
          {/* Search Bar */}
          <Card className="p-6 mb-8 bg-card/95 backdrop-blur border-0 shadow-elevated">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input placeholder="Найти экскурсии, рестораны, развлечения..." className="h-12 text-lg border-0 bg-muted/50 focus:bg-muted" />
              </div>
              <Button size="lg" className="bg-gradient-ocean text-white px-8 shadow-soft hover:shadow-elevated transition-smooth">
                <Search className="h-5 w-5 mr-2" />
                Найти
              </Button>
            </div>
          </Card>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-secondary" />
              <span className="text-lg">200+ мест</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-secondary" />
              <span className="text-lg">4.9 рейтинг</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-secondary" />
              <span className="text-lg">50k+ туристов</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;