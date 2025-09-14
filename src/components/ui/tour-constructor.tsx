import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus, Users, Calendar, MapPin, Calculator } from "lucide-react";

const TourConstructor = () => {
  const [days, setDays] = useState(7);
  const [people, setPeople] = useState(2);
  const [selectedCountries, setSelectedCountries] = useState<string[]>(["vietnam"]);

  const countries = [
    { id: "vietnam", name: "Вьетнам", basePrice: 500 },
    { id: "thailand", name: "Таиланд", basePrice: 600 },
    { id: "bali", name: "Бали", basePrice: 700 },
    { id: "cambodia", name: "Камбоджа", basePrice: 450 },
    { id: "laos", name: "Лаос", basePrice: 400 },
    { id: "myanmar", name: "Мьянма", basePrice: 350 }
  ];

  const calculatePrice = (countryCount: number) => {
    const selectedCountryPrices = selectedCountries.slice(0, countryCount)
      .map(countryId => countries.find(c => c.id === countryId)?.basePrice || 0);
    
    const basePrice = selectedCountryPrices.reduce((sum, price) => sum + price, 0);
    const multiCountryDiscount = countryCount > 1 ? 0.9 : 1; // 10% скидка за мультистрану
    const daysMultiplier = days / 7;
    
    return Math.round(basePrice * daysMultiplier * people * multiCountryDiscount);
  };

  const toggleCountry = (countryId: string) => {
    if (selectedCountries.includes(countryId)) {
      if (selectedCountries.length > 1) {
        setSelectedCountries(selectedCountries.filter(id => id !== countryId));
      }
    } else {
      if (selectedCountries.length < 3) {
        setSelectedCountries([...selectedCountries, countryId]);
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-ocean bg-clip-text text-transparent">
              Конструктор тура
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Создайте идеальный тур по Юго-Восточной Азии за несколько кликов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Параметры тура */}
          <Card className="lg:col-span-2 p-8 bg-card border-0 shadow-card">
            <div className="space-y-8">
              {/* Дни и люди */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-lg font-semibold mb-4">
                    <Calendar className="h-5 w-5 text-primary" />
                    Количество дней
                  </label>
                  <div className="flex items-center gap-4">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => setDays(Math.max(3, days - 1))}
                      disabled={days <= 3}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-2xl font-bold min-w-[3rem] text-center">{days}</span>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => setDays(Math.min(30, days + 1))}
                      disabled={days >= 30}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-lg font-semibold mb-4">
                    <Users className="h-5 w-5 text-primary" />
                    Количество человек
                  </label>
                  <div className="flex items-center gap-4">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => setPeople(Math.max(1, people - 1))}
                      disabled={people <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-2xl font-bold min-w-[3rem] text-center">{people}</span>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => setPeople(Math.min(10, people + 1))}
                      disabled={people >= 10}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Выбор стран */}
              <div>
                <label className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  Выберите страны (до 3-х стран)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {countries.map((country) => (
                    <Button
                      key={country.id}
                      variant={selectedCountries.includes(country.id) ? "default" : "outline"}
                      onClick={() => toggleCountry(country.id)}
                      className={selectedCountries.includes(country.id) 
                        ? "bg-gradient-ocean text-white" 
                        : "hover:border-primary/50"
                      }
                      disabled={!selectedCountries.includes(country.id) && selectedCountries.length >= 3}
                    >
                      {country.name}
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Выбрано: {selectedCountries.length}/3 стран
                </p>
              </div>
            </div>
          </Card>

          {/* Калькулятор цены */}
          <Card className="p-6 bg-gradient-to-b from-primary/5 to-secondary/5 border-0 shadow-card">
            <div className="text-center mb-6">
              <Calculator className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="text-xl font-bold">Стоимость тура</h3>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((countryCount) => (
                <div key={countryCount}>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-card">
                    <span className="font-medium">
                      {countryCount === 1 ? "1 страна" : `${countryCount} страны`}
                    </span>
                    <span className="text-lg font-bold text-primary">
                      ${calculatePrice(countryCount)}
                    </span>
                  </div>
                  {countryCount < selectedCountries.length && countryCount < 3 && (
                    <Badge variant="secondary" className="mt-1 text-xs">
                      Экономия: ${calculatePrice(countryCount) - calculatePrice(countryCount + 1)}
                    </Badge>
                  )}
                </div>
              ))}

              <Separator />

              <div className="bg-gradient-ocean text-white p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Ваш выбор:</span>
                  <span className="text-2xl font-bold">
                    ${calculatePrice(selectedCountries.length)}
                  </span>
                </div>
                <div className="text-sm opacity-90 mt-1">
                  {selectedCountries.length} {selectedCountries.length === 1 ? 'страна' : 'страны'} • {days} дней • {people} {people === 1 ? 'человек' : 'человека'}
                </div>
              </div>

              <Button size="lg" className="w-full bg-secondary hover:bg-secondary/80">
                Забронировать тур
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TourConstructor;