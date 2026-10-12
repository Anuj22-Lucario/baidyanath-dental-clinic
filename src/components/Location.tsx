import { MapPin, Phone, Clock, MessageCircle, Navigation } from 'lucide-react';
import {
  WHATSAPP_URL,
  PHONE_TEL,
  MAPS_LINK,
} from '@/lib/constants';

const ADDRESS =
  'GF-07, First Square Complex, Raibareli Rd, near Millenium Club, behind Dental College, Vrindavan Yojna-2, Sector 2, Vrindavan Colony, Lucknow, Uttar Pradesh 226029';

const MAPS_DIRECT_URL = 'https://maps.google.com/?q=Baidyanath+Dental+Clinic+Vrindavan+Colony+Lucknow';

export default function Location() {
  return (
    <section id="location" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
            Visit Us
          </span>
          <h2 className="section-title mt-4">Location & Contact</h2>
          <p className="mt-4 text-lg text-slate-600">
            Conveniently located in Vrindavan Colony, Lucknow. Open 24 hours for your
            convenience.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            {/* Address */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-card">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100">
                <MapPin className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-850">Clinic Address</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{ADDRESS}</p>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Phone */}
            <a
              href={PHONE_TEL}
              className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-card transition-all hover:shadow-card-hover"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100">
                <Phone className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-850">Phone</h3>
                <p className="mt-1 text-sm text-slate-600">099355 71741</p>
                <span className="mt-1 inline-block text-xs font-medium text-primary-600">
                  Tap to call now
                </span>
              </div>
            </a>

            {/* Timing */}
            <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-card">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-green/10">
                <Clock className="h-6 w-6 text-accent-green" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-850">Working Hours</h3>
                <p className="mt-1 text-sm text-slate-600">Open 24 Hours</p>
                <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-accent-green-dark">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
                  </span>
                  Currently Open
                </span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-accent-green p-5 text-white shadow-lg shadow-accent-green/25 transition-all hover:bg-accent-green-dark hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="text-base font-semibold">Chat on WhatsApp</span>
            </a>
          </div>

          {/* Interactive Location Card */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl shadow-card-hover">
            {/* Map-styled visual background */}
            <div className="relative flex-1 min-h-[340px] bg-gradient-to-br from-primary-50 via-sky-50 to-primary-100">
              {/* Grid lines mimicking a map */}
              <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #0284c7 1px, transparent 1px),
                    linear-gradient(to bottom, #0284c7 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Diagonal "road" lines */}
              <svg className="absolute inset-0 h-full w-full opacity-20" preserveAspectRatio="none">
                <line x1="0" y1="60%" x2="100%" y2="40%" stroke="#0284c7" strokeWidth="6" />
                <line x1="20%" y1="0" x2="60%" y2="100%" stroke="#0284c7" strokeWidth="3" />
                <line x1="0" y1="85%" x2="100%" y2="90%" stroke="#0284c7" strokeWidth="2" />
              </svg>
              {/* Water/blob shapes */}
              <div className="absolute -right-12 top-4 h-32 w-32 rounded-full bg-sky-200/40 blur-xl" />
              <div className="absolute bottom-0 left-8 h-24 w-40 rounded-full bg-primary-200/30 blur-lg" />

              {/* Pin marker */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                <div className="relative flex flex-col items-center">
                  <div className="absolute -bottom-1 h-3 w-3 animate-ping rounded-full bg-primary-500 opacity-60" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 shadow-xl shadow-primary-600/40 ring-4 ring-white">
                    <MapPin className="h-7 w-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="mt-1 h-2 w-1 bg-primary-600/40" />
                  <div className="h-1.5 w-1.5 rounded-full bg-primary-600/30" />
                </div>
              </div>

              {/* Label near pin */}
              <div className="absolute left-1/2 top-[55%] -translate-x-1/2 rounded-lg bg-white/90 px-3 py-1.5 text-center shadow-md backdrop-blur-sm">
                <p className="text-xs font-bold text-slate-850">Sector 2, Vrindavan Colony</p>
                <p className="text-[10px] text-slate-500">Lucknow, UP 226029</p>
              </div>
            </div>

            {/* Card footer with info + button */}
            <div className="border-t border-slate-100 bg-white p-5">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                <div>
                  <h3 className="text-sm font-bold text-slate-850">
                    Baidyanath Dental Clinic
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                    Vrindavan Yojna-2, Sector 2, Lucknow
                  </p>
                </div>
              </div>
              <a
                href={MAPS_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 w-full text-base"
              >
                <Navigation className="h-5 w-5" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
