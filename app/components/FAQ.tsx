"use client";
import React, { useState } from "react";

const FAQS = [
  { q: "What areas do you serve?", a: "We service major cities and surrounding areas across the UK, USA, Canada, and Australia. Enter your postcode to check availability." },
  { q: "Are your cleaning products safe for children and pets?", a: "Yes. We use eco-friendly, non-toxic products safe for homes with children and pets. Tell us about any allergies in the booking form." },
  { q: "How do I book or reschedule a cleaning?", a: "Book online via our form, email us, or chat on WhatsApp. To reschedule, contact us 24 hours before your appointment." },
  { q: "Are your cleaners insured and background-checked?", a: "All team members are fully insured, background-checked, and trained to deliver hotel-standard cleaning." },
  { q: "What if I am not satisfied with the cleaning?", a: "We offer a satisfaction guarantee — contact us within 24 hours and we will return to make it right at no extra cost." },
  { q: "Do I need to be home during the cleaning?", a: "No — we can work with access instructions and provide secure, photographed handovers. Let us know your preference when booking." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-[#0A1F44]">Frequently Asked Questions</h3>
        <div className="mt-6 space-y-3">
          {FAQS.map((f, i) => {
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <div key={i} className="border rounded-lg overflow-hidden">
                <button
                  id={btnId}
                  aria-controls={panelId}
                  aria-expanded={openIndex === i}
                  className="w-full text-left px-4 py-3 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpenIndex(openIndex === i ? null : i);
                    }
                  }}
                >
                  <span className="font-medium text-[#0A1F44]">{f.q}</span>
                  <span className="text-gray-500" aria-hidden>{openIndex === i ? '−' : '+'}</span>
                </button>

                <div id={panelId} role="region" aria-labelledby={btnId} className={`${openIndex === i ? 'block' : 'hidden'} px-4 pb-4 text-gray-700`}>
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
