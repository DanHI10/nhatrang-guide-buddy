import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Briefcase, MapPin, DollarSign, Clock, Users, Globe, Star, Filter } from "lucide-react";
const JobsSection = () => {
  const jobCategories = ["Все вакансии", "IT и технологии", "Туризм и гостиницы", "Преподавание", "Ресторанный бизнес", "Фриланс", "Стартапы"];
  const jobs = [{
    title: "React разработчик",
    company: "TechVietnam Solutions",
    location: "Хошимин",
    salary: "$1500-2500",
    type: "Полная занятость",
    remote: true,
    experience: "2+ года",
    tags: ["React", "JavaScript", "Remote"],
    rating: 4.8,
    description: "Разработка современных веб-приложений для международных клиентов. Удаленная работа, гибкий график."
  }, {
    title: "Преподаватель английского языка",
    company: "English First Vietnam",
    location: "Нячанг",
    salary: "$800-1200",
    type: "Полная занятость",
    remote: false,
    experience: "Без опыта",
    tags: ["Английский", "Преподавание", "TEFL"],
    rating: 4.6,
    description: "Обучение детей и взрослых английскому языку. Предоставляем рабочую визу и жилье."
  }, {
    title: "Гид-экскурсовод",
    company: "Vietnam Discovery Tours",
    location: "Ханой, Нячанг",
    salary: "$600-1000",
    type: "Частичная занятость",
    remote: false,
    experience: "1+ год",
    tags: ["Туризм", "Русский", "Гид"],
    rating: 4.7,
    description: "Проведение экскурсий для русскоязычных туристов. Знание истории и культуры Вьетнама обязательно."
  }, {
    title: "Менеджер ресторана",
    company: "Saigon Grill Chain",
    location: "Хошимин",
    salary: "$900-1400",
    type: "Полная занятость",
    remote: false,
    experience: "3+ года",
    tags: ["Ресторан", "Менеджмент", "HoReCa"],
    rating: 4.5,
    description: "Управление рестораном европейской кухни. Опыт работы в сфере общепита обязателен."
  }, {
    title: "Digital Marketing специалист",
    company: "Asia Marketing Hub",
    location: "Хошимин",
    salary: "$1200-1800",
    type: "Полная занятость",
    remote: true,
    experience: "2+ года",
    tags: ["Маркетинг", "SMM", "Remote"],
    rating: 4.9,
    description: "Продвижение брендов в социальных сетях и поисковых системах. Возможность удаленной работы."
  }, {
    title: "Переводчик русский-вьетнамский",
    company: "VietRus Translation",
    location: "Ханой",
    salary: "$700-1100",
    type: "Freelance",
    remote: true,
    experience: "1+ год",
    tags: ["Перевод", "Русский", "Вьетнамский"],
    rating: 4.4,
    description: "Письменные и устные переводы для бизнеса и туризма. Гибкий график работы."
  }];
  return <section className="py-16 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-ocean bg-clip-text text-transparent">Работа в Азии</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Найдите работу мечты в Азии. Более 200 актуальных вакансий для русскоговорящих</p>
        </div>

        {/* Фильтры */}
        <Card className="p-6 mb-8 bg-card border-0 shadow-card">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2">
                {jobCategories.map(category => <Badge key={category} variant={category === "Все вакансии" ? "default" : "outline"} className={category === "Все вакансии" ? "bg-gradient-ocean text-white px-4 py-2 cursor-pointer hover:shadow-soft transition-smooth" : "cursor-pointer hover:bg-muted transition-smooth px-4 py-2"}>
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
                <Globe className="h-4 w-4 mr-2" />
                Удаленная работа
              </Button>
            </div>
          </div>
        </Card>

        {/* Список вакансий */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {jobs.map((job, index) => <Card key={index} className="p-6 bg-card border-0 shadow-card hover:shadow-elevated transition-shadow">
              <div className="space-y-4">
                {/* Заголовок */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.company}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{job.rating}</span>
                      </div>
                    </div>
                  </div>
                  {job.remote && <Badge className="bg-green-100 text-green-800 border-green-200">
                      Remote
                    </Badge>}
                </div>

                {/* Детали */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="font-semibold text-primary">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>Опыт: {job.experience}</span>
                  </div>
                </div>

                {/* Описание */}
                <p className="text-muted-foreground">{job.description}</p>

                {/* Теги */}
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, tagIndex) => <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>)}
                </div>

                <Separator />

                {/* Действия */}
                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-ocean text-white">
                    Откликнуться
                  </Button>
                  <Button variant="outline" size="icon">
                    <Star className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>)}
        </div>

        {/* Показать больше */}
        <div className="text-center mb-12">
          <Button size="lg" variant="outline" className="px-8">
            Показать все вакансии (247)
          </Button>
        </div>

        {/* Информация для работодателей */}
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-0">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Размещение вакансий</h3>
            <p className="text-muted-foreground">Найдите лучших русскоговорящих сотрудников во Вьетнаме</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">50k+ кандидатов</h4>
              <p className="text-sm text-muted-foreground">
                База русскоговорящих специалистов
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Быстрый поиск</h4>
              <p className="text-sm text-muted-foreground">
                Умные фильтры и рекомендации
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Поддержка визы</h4>
              <p className="text-sm text-muted-foreground">
                Помощь в оформлении документов
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-ocean text-white px-8">
              Разместить вакансию
            </Button>
          </div>
        </Card>
      </div>
    </section>;
};
export default JobsSection;