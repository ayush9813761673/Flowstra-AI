import React from 'react';
import { motion } from 'motion/react';
import { fadeUp, stagger } from '../constants';
import { CardHeader } from './CardHeader';
import { GlowCard } from './ui/spotlight-card';

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--card-border)] bg-[var(--surface)] w-fit mx-auto mb-6">
          <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
          <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-medium">ABOUT</span>
        </motion.div>
        
        <motion.h2 variants={fadeUp} className="text-4xl md:text-[56px] font-extrabold tracking-tighter text-[var(--text-primary)] mb-6 leading-tight uppercase">
          About Flowstra / Founder Ayush Yadav
        </motion.h2>
        
        <motion.p variants={fadeUp} className="text-base text-[var(--text-secondary)] max-w-[700px] mx-auto">
          Flowstra is a founder-led AI automation business for teams that need better qualification, clearer ownership, and more reliable sales handoff.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Left Card: Founder */}
        <motion.div variants={fadeUp}>
          <GlowCard className="p-8 h-full !grid-rows-none" customSize glowColor="blue">
            <CardHeader label="FOUNDER" badge="AYUSH YADAV" />
            
            <div className="flex flex-col gap-6 items-start">
              <div className="flex-grow">
                <span className="text-[11px] font-bold tracking-widest text-[var(--text-muted)] uppercase block mb-2">FOUNDER & AI SYSTEMS BUILDER</span>
                <h3 className="text-[24px] font-bold text-[var(--text-primary)] mb-4 tracking-tight leading-tight">Ayush Yadav</h3>
                <div className="space-y-4 text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Flowstra is built around practical AI system design, not vague automation promises. Ayush works directly on intake logic, qualification rules, routing structure, and handoff design so each system fits how the team actually operates.
                  </p>
                  <p>
                    Initial scoping, workflow logic, and launch review are handled directly so the system stays close to how the team actually works.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {["Direct workflow scoping", "Logic design review", "Launch oversight"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-[var(--card-border)] bg-[var(--surface)] text-[10px] uppercase font-bold tracking-wider text-[var(--text-secondary)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>

        {/* Right Card: Working Model */}
        <motion.div variants={fadeUp}>
          <GlowCard className="p-8 h-full !grid-rows-none" customSize glowColor="blue">
            <CardHeader label="WORKING MODEL" badge="HOW PROJECTS RUN" />
            <h3 className="text-[18px] font-bold text-[var(--text-primary)] mb-8 tracking-tight leading-tight">How the work stays grounded</h3>
            
            <div className="space-y-8 flex-grow">
              {[
                { label: "WORKFLOW AUDIT", val: "Map where inquiries enter, how the team qualifies them, and where ownership currently breaks down." },
                { label: "SYSTEM DESIGN", val: "Turn that flow into routing rules, qualification logic, CRM updates, alerts, and clean next-step activation." },
                { label: "LAUNCH QUALITY", val: "Test the workflow, refine handoffs, and tighten the system around how the team actually works in practice." }
              ].map((row, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] shrink-0 w-[110px] pt-1">
                    {row.label}
                  </span>
                  <span className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                    {row.val}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--card-border)]">
              <p className="text-[12px] text-[var(--text-muted)] italic">
                That keeps the work practical, founder-led, and tied to real operating flow from the first call through launch and refinement.
              </p>
            </div>
          </GlowCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
