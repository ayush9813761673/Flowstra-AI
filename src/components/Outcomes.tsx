import React from 'react';
import { motion } from 'motion/react';
import { fadeUp, stagger } from '../constants';
import { GlowCard } from './ui/spotlight-card';

const outcomes = [
  {
    title: "Faster Response",
    body: "Intake capture and internal alerts reduce the lag between a new inquiry landing and the team taking action.",
    tags: ["FROM INTAKE", "ALERT LOGIC"],
    metrics: ["FIRST-", "RESPONSE SPEED"]
  },
  {
    title: "Better Qualification",
    body: "Qualification logic surfaces the inquiries with real intent before reps burn time on weak-fit leads.",
    tags: ["FROM FIT +", "URGENCY CHECKS"],
    metrics: ["OPPORTUNITY", "QUALITY"]
  },
  {
    title: "Cleaner CRM",
    body: "Source, owner, stage, and notes stay updated automatically as the inquiry moves through the workflow.",
    tags: ["FROM SYNC +", "RECORD RULES"],
    metrics: ["CRM", "ACCURACY"]
  },
  {
    title: "Fewer Handoffs",
    body: "Routing rules and next-step activation remove the back-and-forth that usually slows down ownership.",
    tags: ["FROM ROUTING", "+ ASSIGNMENT"],
    metrics: ["HANDOFF", "QUALITY"]
  },
  {
    title: "Clearer Pipeline",
    body: "The team can see status, owner, and next action without reconstructing the lead story from scattered notes.",
    tags: ["FROM LIVE", "WORKFLOW STATE"],
    metrics: ["PIPELINE", "CLARITY"]
  },
  {
    title: "More Selling Time",
    body: "With qualification, updates, and reminders handled automatically, reps spend more time in conversations that can close.",
    tags: ["FROM LESS", "ADMIN DRAG"],
    metrics: ["TEAM", "CAPACITY"]
  }
];

export function Outcomes() {
  return (
    <section id="outcomes" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--card-border)] bg-[var(--surface)] w-fit mx-auto mb-6">
          <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
          <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-medium">RESULTS</span>
        </motion.div>
        
        <motion.h2 variants={fadeUp} className="text-4xl md:text-[64px] font-extrabold tracking-tighter text-[var(--text-primary)] mb-6 leading-tight uppercase">
          Business Outcomes
        </motion.h2>
        
        <motion.p variants={fadeUp} className="text-base text-[var(--text-secondary)] max-w-[700px] mx-auto">
          When intake, qualification, sync, routing, and follow-up happen in one system, the team gets cleaner execution and less admin drag.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {outcomes.map((item, idx) => (
          <motion.div key={idx} variants={fadeUp}>
            <GlowCard className="p-6 flex flex-col h-full !grid-rows-none" customSize glowColor="blue">
              <h3 className="text-[18px] font-bold text-[var(--text-primary)] mb-4 tracking-tight leading-tight">{item.title}</h3>
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6 flex-grow">
                {item.body}
              </p>
              
              <div className="flex items-center justify-between border-t border-[var(--card-border)] pt-5">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] block">Source tag</span>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold text-[var(--text-primary)] uppercase tracking-wider">
                        • {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] block">Metric label</span>
                  <div className="flex flex-wrap justify-end gap-1">
                    {item.metrics.map((metric, mIdx) => (
                      <span key={mIdx} className="text-[10px] font-bold text-[var(--text-primary)] uppercase tracking-wider">
                        • {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
