import React from 'react';
import { motion } from 'motion/react';
import { fadeUp, stagger } from '../constants';
import { CardHeader } from './CardHeader';
import { GlowCard } from './ui/spotlight-card';

const buildIncludes = [
  { label: "LEAD INTAKE", value: "Web forms, calls, WhatsApp, ad leads, referrals, and portal inquiries" },
  { label: "AI QUALIFICATION", value: "Intent questions, buying timeline, urgency checks, and lead scoring" },
  { label: "CRM SYNC", value: "Contact creation, stage updates, notes, owner assignment, and source tagging" },
  { label: "ROUTING RULES", value: "Assignment by territory, team, urgency, service line, or qualification status" },
  { label: "FOLLOW-UP LOGIC", value: "Internal alerts, rep reminders, nurture sequences, and handoff triggers" },
  { label: "PIPELINE VISIBILITY", value: "Status tracking, ownership clarity, response monitoring, and cleaner records" }
];

const numberedSteps = [
  { num: "01", title: "Workflow audit", desc: "Review how inquiries enter, who touches them, and where follow-up breaks down." },
  { num: "02", title: "Process mapping", desc: "Map the exact sequence of capture, qualification, routing, and handoff logic." },
  { num: "03", title: "System design", desc: "Define the workflow rules, integrations, decision points, and ownership structure." },
  { num: "04", title: "Setup and integration", desc: "Connect forms, CRM, WhatsApp, alerts, and internal systems to the new workflow." },
  { num: "05", title: "Logic testing", desc: "Test lead paths, data sync, alerts, and handoff rules before anything goes live." },
  { num: "06", title: "Launch and refinement", desc: "Deploy the system, review real usage, and tighten the workflow where needed." }
];

export function Implementation() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--card-border)] bg-[var(--surface)] w-fit mx-auto mb-6">
          <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
          <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-medium">IMPLEMENTATION</span>
        </motion.div>
        
        <motion.h2 variants={fadeUp} className="text-4xl md:text-[52px] font-bold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-6">
          How the Workflow <br /> Gets Scoped and Built
        </motion.h2>
        
        <motion.p variants={fadeUp} className="text-base text-[var(--text-secondary)] max-w-[640px] mx-auto mb-2">
          Flowstra is a custom implementation service built around how inquiries enter, how teams qualify them, and how clean handoff should work in practice.
        </motion.p>
        <motion.p variants={fadeUp} className="text-xs text-[var(--text-muted)]">
          This shows a typical implementation model, not a packaged template or claimed client result.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Left Card: Typical Build Includes */}
        <motion.div variants={fadeUp}>
          <GlowCard className="p-8 h-full !grid-rows-none" customSize glowColor="blue">
            <CardHeader label="TYPICAL BUILD" badge="WORKFLOW SCOPE" />
            <h3 className="text-[18px] font-semibold text-[var(--text-primary)] mb-3">What a Typical Build Includes</h3>
            <p className="text-[14px] text-[var(--text-secondary)] mb-8">
              Most Flowstra builds combine intake, qualification, CRM updates, routing rules, and follow-up logic around the way the team already works.
            </p>
            
            <div className="space-y-0">
              {buildIncludes.map((row, idx) => (
                <div key={idx} className="flex items-start justify-between py-4 border-b border-[var(--card-border)] last:border-0">
                  <span className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] w-1/3 pt-0.5">
                    {row.label}
                  </span>
                  <span className="text-[14px] text-[var(--text-secondary)] w-2/3">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </GlowCard>
        </motion.div>

        {/* Right Card: Numbered Steps */}
        <motion.div variants={fadeUp}>
          <GlowCard className="p-8 h-full !grid-rows-none" customSize glowColor="blue">
            <CardHeader label="DELIVERY APPROACH" badge="DELIVERY MODEL" />
            <h3 className="text-[18px] font-semibold text-[var(--text-primary)] mb-3">How Implementation Runs</h3>
            <p className="text-[14px] text-[var(--text-secondary)] mb-8">
              Every project is built around real operating flow, not generic AI prompts or off-the-shelf automation templates.
            </p>
            
            <div className="space-y-6">
              {numberedSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="shrink-0 w-7 h-7 rounded-[6px] border border-[var(--card-border)] bg-[var(--surface)] text-[var(--text-secondary)] flex items-center justify-center text-[10px] font-medium leading-none group-hover:border-[var(--accent-blue)] transition-colors">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-[14px] font-medium text-[var(--text-primary)] mb-1">{step.title}</h4>
                    <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlowCard>
        </motion.div>
      </motion.div>
      
      {/* Two cards side by side below */}
      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
      >
        <motion.div variants={fadeUp}>
          <GlowCard className="p-8 h-full !grid-rows-none" customSize glowColor="blue">
            <CardHeader label="MANUAL FRICTION" badge="BEFORE AUTOMATION" />
            <h3 className="text-[18px] font-semibold text-[var(--text-primary)] mb-6">Where the Workflow Removes Drag</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <div className="space-y-4">
                {["Slow lead response from shared inboxes", "Qualification handled by whoever responds first", "Missed follow-up after the first inquiry"].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] mt-1.5 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {["Scattered lead data across forms and chat threads", "Delayed handoffs between teams", "Poor visibility into who owns the next step"].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] mt-1.5 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlowCard>
        </motion.div>

        <motion.div variants={fadeUp}>
          <GlowCard className="p-8 h-full !grid-rows-none" customSize glowColor="blue">
            <CardHeader label="PIPELINE FIT" badge="OPERATING FLOW" />
            <h3 className="text-[18px] font-semibold text-[var(--text-primary)] mb-6">How the Workflow Fits the Pipeline</h3>
            <div className="space-y-4">
              {[
                { label: "ENTRY POINT", value: "New inquiries enter through forms, calls, WhatsApp, ads, or referral sources." },
                { label: "DECISION LAYER", value: "Qualification, routing, and assignment rules decide what happens next." },
                { label: "SYSTEM RECORD", value: "CRM records, notes, owner fields, and next steps stay current automatically." },
                { label: "TEAM HANDOFF", value: "The team receives a cleaner record with context, ownership, and the right next action." }
              ].map((row, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] shrink-0 w-[110px] pt-1">
                    {row.label}
                  </span>
                  <span className="text-[14px] text-[var(--text-secondary)]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </GlowCard>
        </motion.div>
      </motion.div>
      
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16 flex flex-col items-center justify-center gap-4"
      >
        <a href="https://cal.com/ayush-yadav/15min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold tracking-tight hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <div className="text-lg font-bold leading-none">Book a Call</div>
        </a>
        <p className="text-[12px] text-[var(--text-muted)] tracking-wide text-center">
          Free 15-min workflow audit • No commitment
        </p>
      </motion.div>
    </section>
  );
}
