import JobsSection from "@/components/ui/jobs-section";
import { useLanguage } from "@/contexts/LanguageContext";

const Jobs = () => {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
            {t('jobs.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('jobs.subtitle')}
          </p>
        </div>
      </div>
      <JobsSection />
    </main>
  );
};

export default Jobs;