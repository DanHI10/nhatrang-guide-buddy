import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, Clock } from "lucide-react";

const EntertainmentSection = () => {
  const entertainment = [
    {
      title: "Skylight Rooftop Bar",
      category: "Ночные клубы",
      rating: 4.6,
      description: "Модный бар на крыше с панорамным видом на залив Нячанг",
      address: "Tran Phu Street, Nha Trang",
      phone: "+84 258 123 456",
      hours: "18:00 - 02:00",
      image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&h=300&fit=crop"
    },
    {
      title: "Louisiana Brewhouse",
      category: "Рестораны",
      rating: 4.8,
      description: "Ресторан морепродуктов с собственной пивоварней на пляже",
      address: "29 Tran Phu Street, Nha Trang",
      phone: "+84 258 352 948",
      hours: "11:00 - 23:00",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop"
    },
    {
      title: "Пляж Бай Зай",
      category: "Пляжи",
      rating: 4.7,
      description: "Живописный пляж с чистой водой и множеством водных развлечений",
      address: "Bai Dai Beach, Cam Ranh",
      phone: "",
      hours: "06:00 - 18:00",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
    }
  ];

  const categories = [
    { name: "Рестораны", count: 45, color: "bg-secondary" },
    { name: "Ночные клубы", count: 12, color: "bg-accent" },
    { name: "Пляжи", count: 8, color: "bg-primary" },
    { name: "Кафе", count: 28, color: "bg-gradient-ocean" }
  ];

  return (
    <section id="entertainment" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Развлечения и отдых
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Лучшие места для проведения времени в Нячанге
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {categories.map((category) => (
            <Card key={category.name} className="cursor-pointer hover:shadow-elevated transition-smooth border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-3 opacity-20`} />
                <h3 className="font-semibold text-lg text-foreground">{category.name}</h3>
                <p className="text-muted-foreground">{category.count} мест</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Entertainment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entertainment.map((place, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-smooth cursor-pointer overflow-hidden border-0 shadow-card">
              <div className="relative overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-card/90 text-foreground backdrop-blur-sm">
                    {place.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full p-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-secondary fill-current" />
                    <span className="text-sm font-medium">{place.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-smooth">
                  {place.title}
                </h3>
                <p className="text-muted-foreground">{place.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{place.address}</span>
                  </div>
                  {place.phone && (
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{place.phone}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{place.hours}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-sunset text-white border-0 shadow-soft hover:shadow-elevated transition-smooth">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            Показать все места (93)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EntertainmentSection;