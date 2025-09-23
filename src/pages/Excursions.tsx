import ExcursionsSection from "@/components/ui/excursions-section";
import { useLanguage } from "@/contexts/LanguageContext";

const Excursions = () => {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
            {t('nav.excursions')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя лучшие места и приключения
          </p>
        </div>
      </div>
      <ExcursionsSection />
    </main>
  );
};

export default Excursions;