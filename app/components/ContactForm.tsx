"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "House Cleaning", date: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log — you can wire this to an API
    console.log('Contact form submitted', form);
    alert('Thanks — your request has been received. We will contact you shortly.');
  };

  return (
    <section id="contact-form" className="py-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-serif font-semibold text-[#0A1F44] tracking-tight">Contact & Booking</h3>
          <p className="mt-4 text-gray-500 text-lg font-light leading-relaxed">Request a bespoke quote or schedule your cleaning.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 xl:p-14 rounded-3xl shadow-2xl shadow-[#0A1F44]/5 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6" role="form" aria-labelledby="contact-heading">
          <div className="md:col-span-1">
            <label htmlFor="name" className="sr-only">Full name</label>
            <input id="name" name="name" aria-label="Full name" value={form.name} onChange={handleChange} required placeholder="Full Name" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition-all placeholder:text-gray-400" />
          </div>
          
          <div className="md:col-span-1">
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" name="email" aria-label="Email" value={form.email} onChange={handleChange} required placeholder="Email Address" type="email" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition-all placeholder:text-gray-400" />
          </div>
          
          <div className="md:col-span-1">
            <label htmlFor="phone" className="sr-only">Phone number</label>
            <input id="phone" name="phone" aria-label="Phone number" value={form.phone} onChange={handleChange} required placeholder="Phone Number" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition-all placeholder:text-gray-400" />
          </div>
          
          <div className="md:col-span-1">
            <label htmlFor="service" className="sr-only">Service type</label>
            <select id="service" name="service" aria-label="Service type" value={form.service} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition-all text-gray-700">
              <option>House Cleaning</option>
              <option>Office Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Carpet & Upholstery</option>
              <option>Move In / Move Out</option>
              <option>Post-Construction</option>
            </select>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="date" className="sr-only">Preferred date</label>
            <input id="date" name="date" aria-label="Preferred date" value={form.date} onChange={handleChange} placeholder="Preferred Date" type="date" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition-all text-gray-500" />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" name="message" aria-label="Message" value={form.message} onChange={handleChange} placeholder="Any specific requirements or instructions? (Optional)" rows={4} className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent transition-all placeholder:text-gray-400 resize-none" />
          </div>

          <div className="md:col-span-2 flex flex-col md:flex-row items-center gap-6 mt-4">
            <button type="submit" aria-label="Request my free quote" className="w-full md:w-auto px-8 py-4 rounded-full font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#082033] focus-visible:ring-offset-2 transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-[#C9A84C]/20" style={{background:'#C9A84C', color:'#082033'}}>Request My Free Quote</button>
            <a href="https://wa.me/?text=Hi%20SparkleNest!%20I%27d%20like%20to%20chat%20about%20booking" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="w-full md:w-auto ml-0 flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-[#25D366]/20 bg-[#25D366] text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.94 11.94 0 0012 0C5.372 0 .001 5.372.001 12c0 2.116.555 4.163 1.607 5.966L0 24l6.3-1.608A11.94 11.94 0 0012 24c6.627 0 12-5.372 12-12 0-3.205-1.25-6.184-3.48-8.52z" fill="#fff" opacity=".07"/><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.198.297-.768.967-.942 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.884-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.52-.074-.149-.672-1.612-.922-2.206-.242-.579-.487-.5-.672-.51l-.57-.01c-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.72 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.133-.269-.198-.566-.347z" fill="#fff"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
