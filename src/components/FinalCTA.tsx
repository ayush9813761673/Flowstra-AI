import React from 'react';
import { motion } from 'motion/react';
import { fadeUp, stagger } from '../constants';
import { GlowCard } from './ui/spotlight-card';

export function FinalCTA() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-[1100px] mx-auto"
      >
        <GlowCard className="bg-[var(--surface)] px-8 py-20 text-center !grid-rows-none" customSize glowColor="blue">
          <motion.div variants={fadeUp} className="flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--card-border)] bg-[var(--bg)] w-fit mx-auto mb-6">
            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
            <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-medium">STRATEGY CALL</span>
          </motion.div>
          
          <motion.h2 variants={fadeUp} className="text-4xl md:text-[64px] font-extrabold tracking-tighter text-[var(--text-primary)] mb-6 leading-tight uppercase">
            Ready to automate the pipeline?
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-base md:text-[18px] text-[var(--text-secondary)] max-w-[700px] mx-auto mb-10 leading-relaxed font-medium">
            Use a strategy call to review inquiry flow, qualification gaps, routing logic, and the follow-up steps your team should no longer be handling manually.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="https://cal.com/ayush-yadav/15min?overlayCalendar=true" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[var(--text-primary)] text-[var(--bg)] font-semibold text-sm hover:bg-white transition-colors w-full sm:w-auto text-center"
            >
              Book a Call
            </a>
            <a 
              href="#solutions"
              className="px-8 py-3.5 rounded-full bg-[var(--surface)] border border-[var(--card-border)] text-[var(--text-primary)] font-semibold text-sm hover:border-[var(--card-border-hover)] transition-colors w-full sm:w-auto text-center"
            >
              See What We Build
            </a>
          </motion.div>
          
          <motion.p variants={fadeUp} className="text-[12px] text-[var(--text-muted)] italic mb-10 max-w-[500px] mx-auto">
            The call is designed to review inquiry flow, identify automation priorities, and clarify the qualification, routing, and handoff logic your team actually needs.
          </motion.p>
          
          <motion.div variants={fadeUp} className="pt-8 border-t border-[var(--card-border)] flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-[var(--text-muted)]">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">FOUNDER-LED DISCOVERY WITH AYUSH YADAV</span>
            <span className="text-[10px]">Prefer WhatsApp?</span>
            <a href="https://wa.me/9779813761673" className="text-[10px] text-[var(--text-primary)] font-bold underline underline-offset-4 decoration-[var(--text-muted)]">Start there for a quicker first question.</a>
          </motion.div>
        </GlowCard>
      </motion.div>
    </section>
  );
}
