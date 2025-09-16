import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExcursionCard from "@/components/ui/excursion-card";
import { Filter, Sliders, Wand2, Settings } from "lucide-react";
import boatTourImage from "@/assets/boat-tour.jpg";
import divingImage from "@/assets/diving.jpg";
import spaImage from "@/assets/spa.jpg";
const ExcursionsSection = () => {
  const [tourMode, setTourMode] = useState<"auto" | "manual">("auto");
  const excursions = [{
    title: "Морская прогулка по островам",
    description: "Откройте для себя красоту островов Нячанга во время захватывающей морской прогулки. Посетите острова с белоснежными пляжами и кристально чистой водой.",
    price: "$25",
    duration: "8 часов",
    rating: 4.8,
    groupSize: "до 20 чел",
    image: boatTourImage,
    tags: ["Популярное", "Морские прогулки"]
  }, {
    title: "Дайвинг с инструктором",
    description: "Погрузитесь в подводный мир Южно-Китайского моря. Увидите коралловые рифы, тропических рыб и морских обитателей в их естественной среде.",
    price: "$45",
    duration: "4 часа",
    rating: 4.9,
    groupSize: "до 8 чел",
    image: divingImage,
    tags: ["Дайвинг", "Приключения"]
  }, {
    title: "Спа и массаж",
    description: "Расслабьтесь и восстановите силы в лучших спа-центрах Нячанга. Традиционный вьетнамский массаж поможет снять усталость после экскурсий.",
    price: "$20",
    duration: "2 часа",
    rating: 4.7,
    groupSize: "индивидуально",
    image: spaImage,
    tags: ["Релакс", "Спа"]
  }];
  const categories = ["Все экскурсии", "Морские прогулки", "Дайвинг", "Культурные туры", "Приключения", "Релакс"];
  return <section id="excursions" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-ocean bg-clip-text text-transparent">
              Подбор экскурсий
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Поможем найти и забронировать лучшие экскурсии с проверенными гидами для вашего отдыха.
          </p>
        </div>

        {/* Режим подбора тура */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-0 shadow-card">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Как вы хотите планировать экскурсии?</h3>
            <p className="text-muted-foreground">Выберите удобный для вас способ</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Button variant={tourMode === "auto" ? "default" : "outline"} onClick={() => setTourMode("auto")} className={`h-auto p-6 ${tourMode === "auto" ? "bg-gradient-ocean text-white" : "hover:border-primary/50"}`}>
              <div className="text-center">
                <Wand2 className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Помочь выбрать</h4>
                <p className="text-sm opacity-90">
                  Мы поможем подобрать лучшие экскурсии на каждый день вашего отдыха
                </p>
              </div>
            </Button>
            
            <Button variant={tourMode === "manual" ? "default" : "outline"} onClick={() => setTourMode("manual")} className={`h-auto p-6 ${tourMode === "manual" ? "bg-gradient-ocean text-white" : "hover:border-primary/50"}`}>
              <div className="text-center">
                <Settings className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Выберу сам</h4>
                <p className="text-sm opacity-90 py-0">Самостоятельно выберите экскурсии
 и составьте свой маршрут</p>
              </div>
            </Button>
          </div>
        </Card>

        {/* Filters */}
        <Card className="p-6 mb-8 bg-card border-0 shadow-card">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => <Badge key={category} variant={category === "Все экскурсии" ? "default" : "outline"} className={category === "Все экскурсии" ? "bg-gradient-ocean text-white px-4 py-2 cursor-pointer hover:shadow-soft transition-smooth" : "cursor-pointer hover:bg-muted transition-smooth px-4 py-2"}>
                    {category}
                  </Badge>)}
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
          {excursions.map((excursion, index) => <ExcursionCard key={index} {...excursion} />)}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            Показать все экскурсии (47)
          </Button>
        </div>
      </div>
    </section>;
};
export default ExcursionsSection;