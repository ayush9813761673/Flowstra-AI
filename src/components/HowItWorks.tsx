import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { fadeUp, stagger } from '../constants';
import { GlowCard } from './ui/spotlight-card';

const steps = [
  {
    num: "01",
    label: "CAPTURE LAYER",
    title: "Capture every inquiry",
    body: "Forms, calls, portals, and WhatsApp leads enter one intake flow the moment they come in.",
    metric: "Source logged, timestamp stored, no lead left in a shared inbox"
  },
  {
    num: "02",
    label: "QUALIFICATION LOGIC",
    title: "Structure and qualify",
    body: "Intent, urgency, timeline, and key details are standardized before the team starts chasing.",
    metric: "Cleaner records, better qualification, less admin-heavy triage"
  },
  {
    num: "03",
    label: "SYSTEM SYNC",
    title: "Sync and assign ownership",
    body: "CRM records are created or updated automatically and the right owner is assigned based on rules.",
    metric: "Stage updates, owner logic, and source data stay consistent"
  },
  {
    num: "04",
    label: "ACTIVATION LAYER",
    title: "Trigger next-step logic",
    body: "Alerts, reminders, and follow-up paths fire automatically so the workflow moves without manual prompting.",
    metric: "Routing, alerts, and follow-up activation happen in the same system"
  },
  {
    num: "05",
    label: "TEAM OUTPUT",
    title: "Deliver a clean handoff",
    body: "The team receives a qualified record, clear ownership, and the right context for a faster sales conversation.",
    metric: "Less chasing, fewer missed handoffs, more sales-ready opportunities"
  }
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  
  const smYLeft = useSpring(yLeft, { stiffness: 100, damping: 30 });
  const smYRight = useSpring(yRight, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-[1440px] mx-auto overflow-hidden">
      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--card-border)] bg-[var(--surface)] w-fit mx-auto mb-6">
          <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
          <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-medium">HOW IT WORKS</span>
        </motion.div>
        
        <motion.h2 variants={fadeUp} className="text-4xl md:text-[56px] font-extrabold tracking-tighter text-[var(--text-primary)] mb-6 leading-tight">
          How Flowstra Works
        </motion.h2>
        
        <motion.p variants={fadeUp} className="text-base text-[var(--text-secondary)] max-w-[800px] mx-auto">
          Flowstra turns a scattered inquiry pipeline into one controlled workflow so intake, qualification, CRM updates, routing, and follow-up happen in sequence instead of through manual guesswork.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col lg:flex-row items-stretch gap-0 border border-[var(--card-border)] rounded-2xl overflow-hidden bg-[var(--surface)]"
      >
        {/* Left Panel */}
        <motion.div 
          style={{ y: smYLeft }}
          className="lg:w-[240px] p-8 border-b lg:border-b-0 lg:border-r border-[var(--card-border)] bg-[rgba(255,255,255,0.02)] z-10"
        >
          <motion.h3 variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] text-[var(--text-primary)] mb-6 uppercase">INQUIRY SOURCES</motion.h3>
          <motion.ul variants={stagger} className="space-y-3 mb-6">
            {["Website forms", "Ad campaign leads", "WhatsApp inquiries", "Calls and contact forms", "Referrals or portal leads"].map((item, idx) => (
              <motion.li variants={fadeUp} key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] mt-1.5 shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.p variants={fadeUp} className="text-[11px] text-[var(--text-muted)] italic leading-relaxed">
            These represent the entry points into the automated flow.
          </motion.p>
        </motion.div>

        {/* 5 Step Cards */}
        <div className="flex-grow flex flex-col md:flex-row">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp}
              className="flex-1 flex flex-col min-w-[200px]"
            >
              <GlowCard 
                className="h-full p-8 border-b md:border-b-0 md:border-r border-[var(--card-border)] last:border-r-0 flex flex-col group !grid-rows-none !rounded-none" 
                customSize 
                glowColor="blue"
              >
                <div className="w-8 h-8 rounded-[6px] border border-[var(--card-border)] bg-[var(--bg)] text-[var(--text-secondary)] flex items-center justify-center text-[11px] font-medium mb-6 group-hover:border-[var(--accent-blue)] group-hover:text-[var(--accent-blue)] transition-colors">
                  {step.num}
                </div>
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-[0.15em] font-bold mb-2 block text-left">
                  {step.label}
                </span>
                <h4 className="text-[16px] font-bold text-[var(--text-primary)] mb-4 leading-tight text-left tracking-tight">{step.title}</h4>
                <p className="text-[13px] text-[var(--text-secondary)] leading-[1.6] mb-8 flex-grow text-left">
                  {step.body}
                </p>
                <div className="pt-6 border-t border-[var(--card-border)] text-left">
                  <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                    {step.metric}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Right Panel */}
        <motion.div 
          style={{ y: smYRight }}
          className="lg:w-[240px] p-8 border-t lg:border-t-0 lg:border-l border-[var(--card-border)] bg-[rgba(255,255,255,0.02)] z-10"
        >
          <motion.h3 variants={fadeUp} className="text-[11px] font-bold tracking-[0.2em] text-[var(--text-primary)] mb-6 uppercase">TEAM OUTPUT</motion.h3>
          <motion.ul variants={stagger} className="space-y-3 mb-6">
            {["Qualified record", "CRM updated", "Owner assigned", "Alert or task triggered", "Sales-ready handoff"].map((item, idx) => (
              <motion.li variants={fadeUp} key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] mt-1.5 shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.p variants={fadeUp} className="text-[11px] text-[var(--text-muted)] italic leading-relaxed">
            These are the results delivered to your sales team.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}

