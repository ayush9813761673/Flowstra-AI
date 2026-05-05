import React from 'react';
import { motion } from 'motion/react';
import { fadeUp, stagger } from '../constants';

const results = [
  {
    number: "85%",
    text: "Reduction in Lead Response Time",
    detail: "Immediate automated engagement ensures leads never go cold while waiting for a rep."
  },
  {
    number: "20+",
    text: "Hours saved weekly on manual CRM entry",
    detail: "Automated sync from all channels eliminates manual data entry and human error."
  },
  {
    number: "100%",
    text: "Lead Attribution Accuracy",
    detail: "Perfect tracking from first touch to closed won, synced seamlessly to your CRM."
  }
];

export function Results() {
  return (
    <section id="results" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-16"
      >
        <div className="flex flex-col gap-4 max-w-3xl">
          <motion.p variants={fadeUp} className="text-[12px] font-semibold tracking-widest text-[var(--accent-blue)] uppercase">
            Proven ROI
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Impact by the numbers.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[var(--text-secondary)]">
            Automation isn't just about saving time. It's about building a predictable, scalable revenue engine.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((item, idx) => (
            <motion.div key={idx} variants={fadeUp} className="flex flex-col gap-4 border-l border-[var(--card-border)] pl-6">
              <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
                {item.number}
              </h3>
              <div>
                <p className="text-lg font-medium text-[var(--text-secondary)] mb-2">
                  {item.text}
                </p>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
