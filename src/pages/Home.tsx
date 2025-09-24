import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react";

// Mock data - будет заменено на API
const mockEvents = [
  {
    id: 1,
    title: "Full Moon Party Koh Phangan",
    description: "Самая известная пляжная вечеринка в Азии",
    date: "2024-03-25",
    time: "20:00",
    location: "Haad Rin Beach, Thailand",
    attendees: 15000,
    category: "party",
    image: "/api/placeholder/400/250",
    price: "Free",
    instagramHandle: "@fullmoonparty_official"
  },
  {
    id: 2,
    title: "Songkran Water Festival",
    description: "Традиционный тайский Новый год с водными битвами",
    date: "2024-04-13",
    time: "10:00",
    location: "Bangkok, Thailand",
    attendees: 50000,
    category: "festival",
    image: "/api/placeholder/400/250",
    price: "Free",
    instagramHandle: "@songkran_official"
  },
  {
    id: 3,
    title: "Wonderfruit Festival",
    description: "Экологический музыкальный фестиваль",
    date: "2024-12-15",
    time: "18:00",
    location: "Pattaya, Thailand",
    attendees: 25000,
    category: "music",
    image: "/api/placeholder/400/250",
    price: "From $150",
    instagramHandle: "@wonderfruitfest"
  },
  {
    id: 4,
    title: "Lantern Festival",
    description: "Фестиваль небесных фонариков",
    date: "2024-11-15",
    time: "19:00",
    location: "Chiang Mai, Thailand",
    attendees: 30000,
    category: "cultural",
    image: "/api/placeholder/400/250",
    price: "$50",
    instagramHandle: "@chiangmai_lantern"
  },
  {
    id: 5,
    title: "Bali Spirit Festival",
    description: "Йога, музыка и здоровый образ жизни",
    date: "2024-05-20",
    time: "08:00",
    location: "Ubud, Bali",
    attendees: 8000,
    category: "wellness",
    image: "/api/placeholder/400/250",
    price: "$200",
    instagramHandle: "@balispiritfestival"
  },
  {
    id: 6,
    title: "Ultra Music Festival Singapore",
    description: "Электронная музыка мирового уровня",
    date: "2024-06-10",
    time: "16:00",
    location: "Singapore",
    attendees: 40000,
    category: "music",
    image: "/api/placeholder/400/250",
    price: "From $300",
    instagramHandle: "@ultramusicfestival"
  }
];

const categoryColors = {
  party: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  festival: "bg-orange-500/20 text-orange-300 border-orange-500/30", 
  music: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  cultural: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  wellness: "bg-green-500/20 text-green-300 border-green-500/30"
};

const Home = () => {
  const { t } = useLanguage();

  const translations = {
    ru: {
      title: "Главные События Азии",
      subtitle: "Самые горячие мероприятия, фестивали и вечеринки в Азии",
      filterAll: "Все события",
      filterParty: "Вечеринки", 
      filterFestival: "Фестивали",
      filterMusic: "Музыка",
      filterCultural: "Культура",
      filterWellness: "Велнес",
      attendees: "участников",
      viewDetails: "Подробнее",
      viewInstagram: "Instagram",
      upcomingEvents: "Предстоящие события",
      location: "Локация",
      time: "Время",
      price: "Цена"
    },
    en: {
      title: "Main Events in Asia", 
      subtitle: "The hottest events, festivals and parties in Asia",
      filterAll: "All Events",
      filterParty: "Parties",
      filterFestival: "Festivals", 
      filterMusic: "Music",
      filterCultural: "Cultural",
      filterWellness: "Wellness",
      attendees: "attendees",
      viewDetails: "View Details",
      viewInstagram: "Instagram",
      upcomingEvents: "Upcoming Events",
      location: "Location", 
      time: "Time",
      price: "Price"
    }
  };

  const currentTranslations = translations[t('lang') as keyof typeof translations] || translations.ru;

  return (
    <main className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-ocean bg-clip-text text-transparent mb-6">
            {currentTranslations.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {currentTranslations.subtitle}
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="default" className="bg-gradient-ocean text-white">
              {currentTranslations.filterAll}
            </Button>
            <Button variant="outline">{currentTranslations.filterParty}</Button>
            <Button variant="outline">{currentTranslations.filterFestival}</Button>
            <Button variant="outline">{currentTranslations.filterMusic}</Button>
            <Button variant="outline">{currentTranslations.filterCultural}</Button>
            <Button variant="outline">{currentTranslations.filterWellness}</Button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-ocean bg-clip-text text-transparent">
            {currentTranslations.upcomingEvents}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockEvents.map((event) => (
              <Card key={event.id} className="group hover:shadow-elevated transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge 
                    className={`absolute top-4 left-4 ${categoryColors[event.category as keyof typeof categoryColors]}`}
                  >
                    {event.category}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {event.price}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {event.attendees.toLocaleString()} {currentTranslations.attendees}
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1 bg-gradient-ocean text-white">
                      {currentTranslations.viewDetails}
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href={`https://instagram.com/${event.instagramHandle.slice(1)}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;