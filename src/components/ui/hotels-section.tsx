import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { Star, MapPin, Wifi, Car, Coffee, Utensils } from "lucide-react";
const HotelsSection = () => {
  const hotels = [{
    id: 1,
    name: "Fusion Resort Nha Trang",
    rating: 4.8,
    location: "Вин Хай, Нячанг",
    price: "12,500₽",
    originalPrice: "15,000₽",
    image: "/placeholder.svg",
    amenities: ["Бесплатный Wi-Fi", "Парковка", "Завтрак", "Ресторан"],
    type: "Люкс"
  }, {
    id: 2,
    name: "InterContinental Nha Trang",
    rating: 4.9,
    location: "Чан Фу, Нячанг",
    price: "18,900₽",
    originalPrice: "22,000₽",
    image: "/placeholder.svg",
    amenities: ["Спа", "Бассейн", "Пляж", "Фитнес"],
    type: "5 звезд"
  }, {
    id: 3,
    name: "Vinpearl Resort Nha Trang",
    rating: 4.7,
    location: "Остров Хон Че",
    price: "8,750₽",
    originalPrice: "11,200₽",
    image: "/placeholder.svg",
    amenities: ["Аквапарк", "Канатная дорога", "Пляж", "Развлечения"],
    type: "Курорт"
  }, {
    id: 4,
    name: "Sheraton Nha Trang Hotel",
    rating: 4.6,
    location: "Чан Фу, Нячанг",
    price: "9,200₽",
    originalPrice: "12,500₽",
    image: "/placeholder.svg",
    amenities: ["Бизнес-центр", "Конференц-залы", "Спа", "Бассейн"],
    type: "Бизнес"
  }];
  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes("Wi-Fi")) return <Wifi className="h-4 w-4" />;
    if (amenity.includes("Парковка")) return <Car className="h-4 w-4" />;
    if (amenity.includes("Завтрак") || amenity.includes("Ресторан")) return <Utensils className="h-4 w-4" />;
    return <Coffee className="h-4 w-4" />;
  };
  return <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Лучшие отели в Азии</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите идеальное место для проживания - от бюджетных вариантов до роскошных курортов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {hotels.map(hotel => <Card key={hotel.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="relative overflow-hidden rounded-t-lg">
                <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <Badge className="absolute top-3 left-3 bg-accent/90 text-accent-foreground">
                  {hotel.type}
                </Badge>
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{hotel.rating}</span>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg leading-tight">{hotel.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {hotel.location}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.slice(0, 2).map((amenity, index) => <div key={index} className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 rounded-full px-2 py-1">
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>)}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary">{hotel.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{hotel.originalPrice}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">за ночь</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                  Забронировать
                </Button>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
            Показать все отели
          </Button>
        </div>
      </div>
    </section>;
};
export default HotelsSection;