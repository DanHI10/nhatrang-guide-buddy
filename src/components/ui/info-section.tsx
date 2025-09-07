import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  Car, 
  MapPin, 
  Phone, 
  Shield, 
  Compass,
  Clock,
  Sun
} from "lucide-react";

const InfoSection = () => {
  const infoCards = [
    {
      icon: CreditCard,
      title: "Обмен валюты",
      content: "Лучшие курсы в золотых лавках на улице Tran Phu. Доллары и евро принимают везде.",
      tips: ["Золотые лавки", "Банкоматы", "Отели"],
      color: "text-secondary"
    },
    {
      icon: Car,
      title: "Транспорт",
      content: "Мотобайк-такси, Grab, автобусы. Аренда скутеров от $5/день.",
      tips: ["Grab такси", "Аренда скутеров", "Автобусы"],
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Безопасность",
      content: "Нячанг - безопасный город. Остерегайтесь мошенников на пляжах и рынках.",
      tips: ["Туристическая полиция", "Медицинская помощь", "Посольство"],
      color: "text-accent"
    },
    {
      icon: Sun,
      title: "Погода",
      content: "Лучшее время: февраль-август. Сезон дождей: сентябрь-январь.",
      tips: ["+26-30°C", "Сухой сезон", "Солнцезащита"],
      color: "text-secondary"
    }
  ];

  const quickContacts = [
    { title: "Экстренные службы", number: "113", icon: Shield },
    { title: "Туристическая полиция", number: "+84 258 821 281", icon: Phone },
    { title: "Такси Grab", number: "Приложение Grab", icon: Car },
    { title: "Посольство РФ", number: "+84 24 3833 6999", icon: MapPin }
  ];

  return (
    <section id="info" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Полезная информация
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Всё что нужно знать для комфортного отдыха в Нячанге
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {infoCards.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card key={index} className="group hover:shadow-elevated transition-smooth border-0 shadow-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-muted rounded-full w-fit">
                    <IconComponent className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{info.content}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {info.tips.map((tip) => (
                      <Badge key={tip} variant="outline" className="text-xs">
                        {tip}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Contacts */}
        <Card className="p-8 bg-gradient-ocean text-white border-0 shadow-elevated">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Важные контакты</h3>
            <p className="text-white/80">Сохраните эти номера в телефон</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickContacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-3 p-3 bg-white/20 rounded-full w-fit">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-1">{contact.title}</h4>
                  <p className="text-white/90 text-sm">{contact.number}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Tips Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 border-0 shadow-card">
            <div className="flex items-center space-x-3 mb-4">
              <Compass className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Навигация</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Скачайте оффлайн карты и используйте GPS. Основные улицы: Tran Phu, Nguyen Thien Thuat.
            </p>
            <Button variant="outline" size="sm">
              Скачать карты
            </Button>
          </Card>

          <Card className="p-6 border-0 shadow-card">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Время работы</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Рестораны: 11:00-22:00, Магазины: 08:00-21:00, Бары: 18:00-02:00.
            </p>
            <Button variant="outline" size="sm">
              Подробнее
            </Button>
          </Card>

          <Card className="p-6 border-0 shadow-card">
            <div className="flex items-center space-x-3 mb-4">
              <Phone className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Связь</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Купите местную SIM-карту в аэропорту. WiFi есть почти везде.
            </p>
            <Button variant="outline" size="sm">
              Тарифы
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;