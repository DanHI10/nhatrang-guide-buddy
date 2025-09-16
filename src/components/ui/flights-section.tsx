import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Plane, Search, Calendar, Users, ArrowLeftRight, Clock, Star } from "lucide-react";
const FlightsSection = () => {
  const [tripType, setTripType] = useState<"oneway" | "roundtrip">("roundtrip");
  const [passengers, setPassengers] = useState(1);
  const popularFlights = [{
    from: "Москва",
    to: "Хошимин",
    price: "$450",
    duration: "9ч 30м",
    airline: "Vietnam Airlines",
    rating: 4.8,
    stops: "1 пересадка"
  }, {
    from: "Санкт-Петербург",
    to: "Нячанг",
    price: "$520",
    duration: "11ч 15м",
    airline: "Aeroflot",
    rating: 4.6,
    stops: "1 пересадка"
  }, {
    from: "Екатеринбург",
    to: "Ханой",
    price: "$480",
    duration: "8ч 45м",
    airline: "S7 Airlines",
    rating: 4.7,
    stops: "Прямой рейс"
  }];
  return <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-ocean bg-clip-text text-transparent">Авиабилеты</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Найдите лучшие предложения на авиабилеты из России в Азию</p>
        </div>

        {/* Поиск билетов */}
        <Card className="p-8 mb-12 bg-card border-0 shadow-card">
          <div className="space-y-6">
            {/* Тип поездки */}
            <div className="flex gap-4">
              <Button variant={tripType === "roundtrip" ? "default" : "outline"} onClick={() => setTripType("roundtrip")} className={tripType === "roundtrip" ? "bg-gradient-ocean text-white" : ""}>
                <ArrowLeftRight className="h-4 w-4 mr-2" />
                Туда-обратно
              </Button>
              <Button variant={tripType === "oneway" ? "default" : "outline"} onClick={() => setTripType("oneway")} className={tripType === "oneway" ? "bg-gradient-ocean text-white" : ""}>
                <Plane className="h-4 w-4 mr-2" />
                В одну сторону
              </Button>
            </div>

            {/* Форма поиска */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="md:col-span-1">
                <label className="text-sm font-medium text-muted-foreground">Откуда</label>
                <Input placeholder="Москва" className="mt-1" />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm font-medium text-muted-foreground">Куда</label>
                <Input placeholder="Нячанг" className="mt-1" />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm font-medium text-muted-foreground">Вылет</label>
                <Input type="date" className="mt-1" />
              </div>
              {tripType === "roundtrip" && <div className="md:col-span-1">
                  <label className="text-sm font-medium text-muted-foreground">Обратно</label>
                  <Input type="date" className="mt-1" />
                </div>}
              <div className={tripType === "roundtrip" ? "lg:col-span-1" : "md:col-span-1"}>
                <label className="text-sm font-medium text-muted-foreground">Пассажиры</label>
                <div className="flex items-center gap-2 mt-1">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <select value={passengers} onChange={e => setPassengers(Number(e.target.value))} className="bg-background border border-input rounded-md px-3 py-2 text-sm">
                    {[1, 2, 3, 4, 5, 6].map(num => <option key={num} value={num}>{num}</option>)}
                  </select>
                </div>
              </div>
              <div className={tripType === "roundtrip" ? "lg:col-span-1" : "md:col-span-1"}>
                <label className="text-sm font-medium text-muted-foreground">&nbsp;</label>
                <Button size="lg" className="w-full mt-1 bg-gradient-ocean text-white">
                  <Search className="h-4 w-4 mr-2" />
                  Найти
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Популярные направления */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6">Популярные направления</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularFlights.map((flight, index) => <Card key={index} className="p-6 bg-card border-0 shadow-card hover:shadow-elevated transition-shadow">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-lg font-semibold">{flight.from} → {flight.to}</div>
                      <div className="text-sm text-muted-foreground">{flight.airline}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{flight.price}</div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {flight.rating}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {flight.duration}
                    </div>
                    <Badge variant={flight.stops === "Прямой рейс" ? "default" : "secondary"}>
                      {flight.stops}
                    </Badge>
                  </div>

                  <Button className="w-full" variant="outline">
                    Выбрать билет
                  </Button>
                </div>
              </Card>)}
          </div>
        </div>

        {/* Преимущества */}
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-0">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Почему выбирают нас?</h3>
            <p className="text-muted-foreground">Мы сравниваем цены от 100+ авиакомпаний</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Лучшие цены</h4>
              <p className="text-sm text-muted-foreground">
                Сравниваем предложения всех авиакомпаний
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Быстрое бронирование</h4>
              <p className="text-sm text-muted-foreground">
                Оплата и получение билетов за 2 минуты
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Поддержка 24/7</h4>
              <p className="text-sm text-muted-foreground">
                Помощь на русском языке в любое время
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>;
};
export default FlightsSection;