import React from 'react';
import SEO from './SEO';
import { useLanguage } from '@/src/i18n/LanguageContext';

export interface LegalSection {
  title: string;
  body: React.ReactNode;
}

interface LegalPageProps {
  title: string;
  description: string;
  lastUpdated: string;
  intro?: React.ReactNode;
  sections: LegalSection[];
}

const LegalPage = ({ title, description, lastUpdated, intro, sections }: LegalPageProps) => {
  const { t } = useLanguage();
  return (
  <div className="min-h-screen bg-background text-on-surface pt-8 md:pt-16 pb-20 md:pb-32 px-6 md:px-8">
    <SEO title={title} description={description} />
    <div className="max-w-3xl mx-auto">
      <h1 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-on-surface mb-3">{title}</h1>
      <p className="font-body text-xs text-on-surface-variant/60 mb-10">{t({ en: 'Last updated:', fr: 'Dernière mise à jour :' })} {lastUpdated}</p>

      {intro && <div className="font-body text-sm sm:text-base text-on-surface-variant/80 leading-relaxed mb-10 space-y-4">{intro}</div>}

      <div className="space-y-10">
        {sections.map((s, i) => (
          <section key={i} className="border-t border-outline-variant/20 pt-8">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-on-surface mb-4">
              {i + 1}. {s.title}
            </h2>
            <div className="font-body text-sm sm:text-base text-on-surface-variant/80 leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-on-surface">
              {s.body}
            </div>
          </section>
        ))}
      </div>
    </div>
  </div>
  );
};

export default LegalPage;
