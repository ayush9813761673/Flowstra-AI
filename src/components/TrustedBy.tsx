import React from 'react';

export function TrustedBy() {
  const logos = [
    "Zapier", "Make.com", "OpenAI", "Anthropic", "HubSpot",
    "Zapier", "Make.com", "OpenAI", "Anthropic", "HubSpot",
    "Zapier", "Make.com", "OpenAI", "Anthropic", "HubSpot"
  ];
  return (
    <section className="w-full border-b border-white/5 bg-black/30 py-10 overflow-hidden relative flex flex-col items-center">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: flex;
          width: 200%;
          animation: marquee-scroll 40s linear infinite;
        }
      `}</style>
      <p className="text-center text-[10px] font-semibold tracking-widest text-[var(--text-muted)] uppercase mb-8">
        POWERING WORKFLOWS WITH
      </p>
      <div className="relative flex w-full max-w-[100vw] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-transparent to-[var(--bg)] z-10 pointer-events-none" />
        <div className="marquee-container">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex-1 flex justify-center min-w-[200px] grayscale opacity-40 hover:opacity-100 transition-opacity duration-300">
              <span className="text-xl font-bold tracking-tight text-white/70">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
