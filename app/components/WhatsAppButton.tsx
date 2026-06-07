"use client";
import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      aria-label="Chat on WhatsApp"
      href="https://wa.me/?text=Hi%20SparkleNest!%20I%27d%20like%20to%20book%20a%20cleaning%20service."
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-6 z-50 shadow-lg rounded-full p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      style={{ background: '#25D366' }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.372 0 .001 5.372.001 12c0 2.116.555 4.163 1.607 5.966L0 24l6.3-1.608A11.94 11.94 0 0012 24c6.627 0 12-5.372 12-12 0-3.205-1.25-6.184-3.48-8.52z" fill="#fff" opacity=".07"/>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.198.297-.768.967-.942 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.884-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.52-.074-.149-.672-1.612-.922-2.206-.242-.579-.487-.5-.672-.51l-.57-.01c-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.72 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.133-.269-.198-.566-.347z" fill="#fff"/>
      </svg>
    </a>
  );
}
