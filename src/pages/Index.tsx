import HeroSection from "@/components/ui/hero-section";
import TourConstructor from "@/components/ui/tour-constructor";
import FlightsSection from "@/components/ui/flights-section";
import HotelsSection from "@/components/ui/hotels-section";
import ExcursionsSection from "@/components/ui/excursions-section";
import EntertainmentSection from "@/components/ui/entertainment-section";
import InfoSection from "@/components/ui/info-section";
import JobsSection from "@/components/ui/jobs-section";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TourConstructor />
      <FlightsSection />
      <HotelsSection />
      <ExcursionsSection />
      <EntertainmentSection />
      <JobsSection />
      <InfoSection />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Тур Маркет</h3>
              <p className="text-primary-foreground/80">
                Ваш персональный консьерж в Азии. Поможем с любыми вопросами по отдыху и путешествиям!
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Экскурсии</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Морские прогулки</li>
                <li>Дайвинг</li>
                <li>Культурные туры</li>
                <li>Приключения</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Развлечения</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Рестораны</li>
                <li>Ночные клубы</li>
                <li>Пляжи</li>
                <li>Спа и массаж</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>+84 258 123 456</li>
                <li>info@tourmarket.vn</li>
                <li>Nha Trang, Vietnam</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 Тур Маркет. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
