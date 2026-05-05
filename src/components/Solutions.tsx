import React from 'react';
import { motion } from 'motion/react';
import { fadeUp, stagger } from '../constants';
import { CardHeader } from './CardHeader';
import { GlowCard } from './ui/spotlight-card';
import { ArrowDownToLine, BrainCircuit, RefreshCw, Route, FastForward, BellRing } from 'lucide-react';

const solutions = [
  {
    icon: ArrowDownToLine,
    label: "LEAD INTAKE",
    badge: "INTAKE",
    title: "Lead Intake Systems",
    body: "Pull web forms, calls, WhatsApp messages, ads, and referrals into one intake flow the moment an inquiry arrives.",
    handles: "Entry capture, source tagging, and duplicate control",
    bullets: ["Website, form, and portal intake", "Calls, WhatsApp, and referral capture", "Normalized records from first touch"]
  },
  {
    icon: BrainCircuit,
    label: "QUALIFICATION LOGIC",
    badge: "QUALIFICATION",
    title: "AI Qualification Logic",
    body: "Capture intent, structure buyer detail, and separate strong opportunities from low-fit noise before the team starts chasing.",
    handles: "Intent capture, fit checks, and path decisions",
    bullets: ["Budget, timeline, urgency, and fit capture", "AI-led qualification prompts", "Qualified, nurture, or low-fit paths"]
  },
  {
    icon: RefreshCw,
    label: "CRM SYNC",
    badge: "CRM",
    title: "CRM Sync Workflows",
    body: "Create or update records automatically so source, stage, ownership, notes, and next-step status stay accurate as the inquiry moves.",
    handles: "Record creation, updates, and pipeline hygiene",
    bullets: ["Contact and deal creation", "Stage, source, and owner updates", "Timeline notes synced into CRM"]
  },
  {
    icon: Route,
    label: "ROUTING RULES",
    badge: "ROUTING",
    title: "Routing and Ownership",
    body: "Move the inquiry to the right rep, team, or service line based on source, territory, availability, or qualification status.",
    handles: "Assignment logic and escalation rules",
    bullets: ["Territory and service-line routing", "Owner assignment by rule", "Priority and escalation branches"]
  },
  {
    icon: FastForward,
    label: "FOLLOW-UP WORKFLOWS",
    badge: "FOLLOW-UP",
    title: "Follow-up Automation",
    body: "Trigger reminders, next-step messages, and response-aware follow-up so warm inquiries do not stall between touches.",
    handles: "Timing logic after response, silence, or no-show",
    bullets: ["Response-aware follow-up", "Reminder and re-engagement paths", "No-show and inactivity triggers"]
  },
  {
    icon: BellRing,
    label: "ALERTS AND HANDOFFS",
    badge: "HANDOFF",
    title: "Alerts and Handoffs",
    body: "Send the team the right context when a lead becomes actionable so handoff is faster, cleaner, and easier to act on.",
    handles: "Internal alerts, notes, and clean transfer",
    bullets: ["Internal alerts with qualification context", "Rep notes and next-action transfer", "Sales-ready handoff logic"]
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--card-border)] bg-[var(--surface)] w-fit mx-auto mb-6">
          <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
          <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-medium">WHAT WE AUTOMATE</span>
        </motion.div>
        
        <motion.h2 variants={fadeUp} className="text-4xl md:text-[56px] font-extrabold tracking-tighter text-[var(--text-primary)] mb-6 leading-tight">
          What Flowstra Automates
        </motion.h2>
        
        <motion.p variants={fadeUp} className="text-base text-[var(--text-secondary)] max-w-[560px] mx-auto">
          Flowstra builds the workflow layers behind intake, qualification, CRM updates, routing, follow-up, alerts, and clean sales handoff.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {solutions.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div key={idx} variants={fadeUp}>
              <GlowCard className="p-6 flex flex-col h-full !grid-rows-none" customSize glowColor="blue">
                <CardHeader label={item.label} badge={item.badge} />
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--accent-blue-dim)] border border-blue-500/20 text-blue-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-[20px] font-bold tracking-tight text-[var(--text-primary)] leading-snug">{item.title}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-grow">
                  {item.body}
                </p>
                
                <div className="pt-6 border-t border-[var(--card-border)]">
                  <div className="mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-[var(--text-muted)] block mb-1">HANDLES</span>
                    <p className="text-[14px] text-[var(--text-primary)] font-medium">{item.handles}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)] mt-1.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
