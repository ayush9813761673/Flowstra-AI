import React from 'react';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[rgba(5,5,10,0.85)] backdrop-blur-[12px] border-b border-[var(--card-border)]">
      <div className="flex items-center gap-3">
        <div className="flex flex-col gap-1 w-5">
          <div className="h-0.5 w-full bg-blue-500 rounded-full" />
          <div className="h-0.5 w-3/4 bg-white rounded-full opacity-60" />
          <div className="h-0.5 w-full bg-blue-400 rounded-full" />
        </div>
        <span className="text-white font-bold text-xl tracking-tighter">Flowstra</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-[var(--text-secondary)] text-[13px] font-bold tracking-tight uppercase opacity-80">
        <a href="#solutions" className="hover:text-[var(--text-primary)] transition-colors">Solutions</a>
        <a href="#outcomes" className="hover:text-[var(--text-primary)] transition-colors">Outcomes</a>
        <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">About</a>
      </div>

      <a 
        href="https://cal.com/ayush-yadav/15min?overlayCalendar=true"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--text-primary)] text-[var(--bg)] hover:bg-white transition-colors"
      >
        Book a Call
      </a>
    </nav>
  );
}
