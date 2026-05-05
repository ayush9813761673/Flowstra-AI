import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "./ui/hover-footer";

export function Footer() {
  // Footer link data
  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { label: "CRM Automation", href: "#solutions" },
        { label: "Lead Qualification", href: "#solutions" },
        { label: "Outbound Logic", href: "#solutions" },
        { label: "Pipeline Routing", href: "#solutions" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "Book a Call", href: "https://cal.com/ayush-yadav/15min?overlayCalendar=true", target: "_blank", rel: "noopener noreferrer" },
        { label: "Outcomes", href: "#outcomes" },
        {
          label: "Direct Support",
          href: "https://wa.me/9779813761673?text=Hi%20Ayush%2C%20I%20want%20to%20know%20more%20about%20Flowstra%27s%20automation%20services.",
          target: "_blank",
          rel: "noopener noreferrer",
          pulse: true,
        },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3b82f6]" />,
      text: "rajayush9823@gmail.com",
      href: "mailto:rajayush9823@gmail.com",
    },
    {
      icon: <Phone size={18} className="text-[#3b82f6]" />,
      text: "+977 9813761673",
      href: "tel:+9779813761673",
    },
    {
      icon: <MapPin size={18} className="text-[#3b82f6]" />,
      text: "Directly through WhatsApp",
      href: "https://wa.me/9779813761673?text=Hi%20Ayush%2C%20I%20want%20to%20know%20more%20about%20Flowstra%27s%20automation%20services.",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  // Social media icons (hidden for now)
  const socialLinks: { icon: JSX.Element; label: string; href: string }[] = [];

  return (
    <footer className="bg-[rgba(5,5,10,0.4)] relative h-fit rounded-[32px] overflow-hidden m-6 border border-[var(--card-border)]">
      <div className="max-w-7xl mx-auto px-8 py-16 z-40 relative text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-1 w-5">
                <div className="h-0.5 w-full bg-blue-500 rounded-full" />
                <div className="h-0.5 w-3/4 bg-white rounded-full opacity-60" />
                <div className="h-0.5 w-full bg-blue-400 rounded-full" />
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">Flowstra</span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] max-w-xs">
              Founder-led AI systems that automate lead qualification, routing, and CRM logic around how your team actually operates.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-[var(--text-primary)] text-sm font-bold uppercase tracking-widest mb-8">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label} className="relative w-fit">
                    <a
                      href={link.href}
                      {...(link.target ? { target: link.target, rel: link.rel } : {})}
                      className="text-sm text-[var(--text-secondary)] hover:text-[#3b82f6] transition-colors"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-1 -right-3 w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-[var(--text-primary)] text-sm font-bold uppercase tracking-widest mb-8">
              Contact
            </h4>
            <ul className="space-y-5">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm text-[var(--text-secondary)] group">
                  <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#3b82f6] transition-colors"
                      {...((item as any).target ? { target: (item as any).target, rel: (item as any).rel } : {})}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-[var(--card-border)] my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0 text-[var(--text-muted)] font-medium tracking-wide">
          <div className="flex space-x-8">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#3b82f6] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} FLOWSTRA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[22rem] -mt-36 -mb-24 opacity-80">
        <TextHoverEffect text="FLOWSTRA" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
