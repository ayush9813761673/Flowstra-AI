import React from 'react';
import { Header } from '@/components/ui/header-2';
import { CinematicHero } from '@/components/ui/cinematic-landing-hero';
import { TrustedBy } from './components/TrustedBy';
import { Solutions } from './components/Solutions';
import { Implementation } from './components/Implementation';
import { HowItWorks } from './components/HowItWorks';
import { WorkflowExamples } from './components/WorkflowExamples';
import { Outcomes } from './components/Outcomes';
import { Results } from './components/Results';
import { About } from './components/About';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[var(--accent-blue)] selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <CinematicHero 
          brandName="Flowstra"
          tagline1="Automate your flow,"
          tagline2="get more clients."
          cardHeading="AI infrastructure."
          cardDescription="Stop chasing leads and start closing them with automated qualification and routing. No more manual triage, just sales-ready meetings."
          metricValue={100}
          metricLabel="Leads Synced"
          ctaHeading="Automate now."
          ctaDescription="Stop chasing leads and start closing them with automated qualification and routing. No more manual triage, just sales-ready meetings."
        />
        <TrustedBy />
        <Solutions />
        <Implementation />
        <HowItWorks />
        <WorkflowExamples />
        <Outcomes />
        <Results />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
