import EntertainmentSection from "@/components/ui/entertainment-section";
import { useLanguage } from "@/contexts/LanguageContext";

const Entertainment = () => {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
            {t('entertainment.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('entertainment.subtitle')}
          </p>
        </div>
      </div>
      <EntertainmentSection />
    </main>
  );
};

export default Entertainment;