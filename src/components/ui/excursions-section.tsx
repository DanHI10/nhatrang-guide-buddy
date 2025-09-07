import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExcursionCard from "@/components/ui/excursion-card";
import { Filter, Sliders } from "lucide-react";
import boatTourImage from "@/assets/boat-tour.jpg";
import divingImage from "@/assets/diving.jpg";
import spaImage from "@/assets/spa.jpg";

const ExcursionsSection = () => {
  const excursions = [
    {
      title: "Морская прогулка по островам",
      description: "Откройте для себя красоту островов Нячанга во время захватывающей морской прогулки. Посетите острова с белоснежными пляжами и кристально чистой водой.",
      price: "$25",
      duration: "8 часов",
      rating: 4.8,
      groupSize: "до 20 чел",
      image: boatTourImage,
      tags: ["Популярное", "Морские прогулки"]
    },
    {
      title: "Дайвинг с инструктором",
      description: "Погрузитесь в подводный мир Южно-Китайского моря. Увидите коралловые рифы, тропических рыб и морских обитателей в их естественной среде.",
      price: "$45",
      duration: "4 часа",
      rating: 4.9,
      groupSize: "до 8 чел",
      image: divingImage,
      tags: ["Дайвинг", "Приключения"]
    },
    {
      title: "Спа и массаж",
      description: "Расслабьтесь и восстановите силы в лучших спа-центрах Нячанга. Традиционный вьетнамский массаж поможет снять усталость после экскурсий.",
      price: "$20",
      duration: "2 часа",
      rating: 4.7,
      groupSize: "индивидуально",
      image: spaImage,
      tags: ["Релакс", "Спа"]
    }
  ];

  const categories = [
    "Все экскурсии",
    "Морские прогулки", 
    "Дайвинг",
    "Культурные туры",
    "Приключения",
    "Релакс"
  ];

  return (
    <section id="excursions" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-ocean bg-clip-text text-transparent">
              Лучшие экскурсии
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите из более чем 50 увлекательных экскурсий и туров по Нячангу
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8 bg-card border-0 shadow-card">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge 
                    key={category}
                    variant={category === "Все экскурсии" ? "default" : "outline"}
                    className={category === "Все экскурсии" 
                      ? "bg-gradient-ocean text-white px-4 py-2 cursor-pointer hover:shadow-soft transition-smooth" 
                      : "cursor-pointer hover:bg-muted transition-smooth px-4 py-2"
                    }
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Фильтры
              </Button>
              <Button variant="outline" size="sm">
                <Sliders className="h-4 w-4 mr-2" />
                Сортировка
              </Button>
            </div>
          </div>
        </Card>

        {/* Excursions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {excursions.map((excursion, index) => (
            <ExcursionCard
              key={index}
              {...excursion}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            Показать все экскурсии (47)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExcursionsSection;