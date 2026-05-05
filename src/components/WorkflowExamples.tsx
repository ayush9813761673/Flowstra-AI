import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeUp, stagger } from '../constants';
import { GlowCard } from './ui/spotlight-card';

const examples = [
  {
    id: "01",
    badge: "High-intent routing",
    title: "High-intent inquiry routing",
    body: "A website or ad lead enters intake, qualification checks confirm urgency, and the workflow routes the opportunity before response time slips.",
    trigger: "Form, ad, or portal inquiry lands",
    logic: "Qualification checks, CRM update, owner assignment, and alert fire in sequence",
    outcome: "Owner receives a sales-ready record with context and next step attached"
  },
  {
    id: "02",
    badge: "WhatsApp flow",
    title: "WhatsApp qualification flow",
    body: "A WhatsApp conversation is structured through guided prompts so the team gets qualification detail without manually triaging every message.",
    trigger: "New WhatsApp inquiry starts the conversation",
    logic: "Prompts capture intent, budget, timeline, and fit before deciding the route",
    outcome: "Qualified inquiry enters the right follow-up path with cleaner context"
  },
  {
    id: "03",
    badge: "CRM + handoff",
    title: "Sales handoff after form submission",
    body: "A form submission updates the CRM, sets the right owner and stage, and moves the team straight into the next conversation instead of admin cleanup.",
    trigger: "Web inquiry or inbound call is logged",
    logic: "Record sync, stage change, note creation, and task activation happen together",
    outcome: "The team opens one clean record instead of rebuilding the lead story manually"
  }
];

export function WorkflowExamples() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="outcomes" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--card-border)] bg-[var(--surface)] w-fit mb-6">
          <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
          <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-medium">WORKFLOW EXAMPLES</span>
        </motion.div>
        
        <motion.h2 variants={fadeUp} className="text-4xl md:text-[60px] font-bold tracking-tight text-[var(--text-primary)] leading-tight max-w-[420px] mb-6">
          Inside a Flowstra Workflow
        </motion.h2>
        
        <motion.div variants={fadeUp} className="flex flex-col gap-1 max-w-[600px]">
          <p className="text-[15px] text-[var(--text-secondary)]">
            These are example implementations, not client case studies. Each one shows the trigger, the system logic, and what reaches the team at handoff.
          </p>
          <p className="text-[12px] text-[var(--text-muted)] mt-2">
            Use them as practical models for how inquiry handling becomes cleaner, faster, and easier to manage.
          </p>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8">
        {/* Left Column: Example Cards */}
        <div className="space-y-4">
          {examples.map((example, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveTab(idx)}
              className="cursor-pointer"
            >
              <GlowCard 
                className={`w-full text-left p-6 transition-all relative !grid-rows-none ${activeTab === idx ? 'border-[var(--accent-blue)] bg-[rgba(59,130,246,0.03)]' : 'hover:border-[var(--card-border-hover)]'}`}
                customSize
                glowColor="blue"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-medium">EXAMPLE {example.id}</span>
                  <span className="px-2 py-1 rounded bg-[var(--card)] border border-[var(--card-border)] text-[9px] uppercase tracking-wider text-[var(--text-secondary)]">
                    {example.badge}
                  </span>
                </div>
                <h3 className="text-[18px] font-semibold text-[var(--text-primary)] mb-3">{example.title}</h3>
                <p className="text-[14px] text-[var(--text-secondary)] mb-6 leading-relaxed">{example.body}</p>
                
                <div className="space-y-3 pt-6 border-t border-[var(--card-border)]">
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider pt-0.5">TRIGGER</span>
                    <span className="text-[13px] text-[var(--text-secondary)]">{example.trigger}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider pt-0.5 whitespace-nowrap">SYSTEM LOGIC</span>
                    <span className="text-[13px] text-[var(--text-secondary)]">{example.logic}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider pt-0.5 whitespace-nowrap">TEAM OUTCOME</span>
                    <span className="text-[13px] text-[var(--text-secondary)]">{example.outcome}</span>
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>

        {/* Right Column: Workflow View Panel */}
        <div>
          <GlowCard className="bg-[var(--bg)] p-8 flex flex-col relative overflow-hidden min-h-[500px] !grid-rows-none" customSize glowColor="blue">
            {/* Header */}
            <div className="flex items-center justify-between mb-10 pb-4 border-b border-[var(--card-border)]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--text-muted)] opacity-30" />
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--text-muted)] opacity-30" />
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--text-muted)] opacity-30" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--text-muted)]">WORKFLOW VIEW</span>
            </div>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-grow space-y-12"
            >
              {/* Captured Inquiry Section */}
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--text-muted)] uppercase block mb-6">CAPTURED INQUIRY</span>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-x-12 gap-y-4">
                    <div className="space-y-1">
                      <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider block">Inquiry source</span>
                      <span className="text-[14px] text-[var(--text-primary)]">Website form + WhatsApp</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider block">Intent status</span>
                      <span className="text-[14px] text-[var(--accent-blue)] font-medium">Sales-ready</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {["Qualification", "Budget + timeline captured", "Next step", "Assign owner + trigger task"].map((pill, i) => (
                      <div key={i} className={`px-3 py-1.5 rounded-md border border-[var(--card-border)] bg-[var(--surface)] text-[12px] ${i % 2 === 0 ? 'text-[var(--text-secondary)]' : 'text-[var(--text-primary)]'}`}>
                        {pill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CRM Sync Section */}
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--text-muted)] uppercase block mb-6">CRM SYNC</span>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-[var(--accent-blue)] flex items-center justify-center text-[10px] text-white">✓</div>
                    <span className="text-[14px] text-[var(--text-primary)]">Contact record created and source captured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded bg-[var(--accent-blue)] flex items-center justify-center text-[10px] text-white">✓</div>
                    <span className="text-[14px] text-[var(--text-primary)]">Owner, stage, and next task updated in CRM</span>
                  </div>
                </div>
              </div>

              {/* Next-Step Activation Section */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--text-muted)] uppercase">NEXT-STEP ACTIVATION</span>
                  <span className="px-2 py-0.5 rounded-full bg-[var(--accent-blue-dim)] text-[var(--accent-blue)] text-[9px] font-bold uppercase tracking-wider">Executing</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[var(--card)] border border-[var(--card-border)] flex items-center justify-center text-[10px] font-bold text-[var(--text-secondary)]">AR</div>
                    <span className="text-[13px] text-[var(--text-primary)]">Assigned: Team Owner</span>
                  </div>
                  <div className="h-4 w-px bg-[var(--card-border)]" />
                  <span className="text-[13px] text-[var(--text-secondary)]">Matching Logic: Intent + territory + availability</span>
                </div>
                
                <div className="mt-8 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }} 
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"
                    />
                  </div>
                  <span className="text-[12px] text-[var(--text-muted)] italic">Triggering internal alert and sales follow-up task...</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </GlowCard>
      </div>
    </div>
  </section>
  );
}
