import { Cross, Phone, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL, MAPS_LINK } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-850 pb-20 pt-14 text-slate-300 lg:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                <Cross className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-white">Baidyanath Dental</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Advanced, pain-free dental care in Lucknow. Open 24 hours with expert
              specialists and modern equipment.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#home" className="transition-colors hover:text-primary-400">Home</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary-400">Services</a></li>
              <li><a href="#reviews" className="transition-colors hover:text-primary-400">Reviews</a></li>
              <li><a href="#location" className="transition-colors hover:text-primary-400">Location</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-primary-400">
                  Sector 2, Vrindavan Colony, Lucknow 226029
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary-400" />
                <a href={PHONE_TEL} className="text-slate-400 transition-colors hover:text-primary-400">099355 71741</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-accent-green-light" />
                <span className="text-slate-400">Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-700 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Baidyanath Dental Clinic. All rights reserved.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-primary-400 transition-colors hover:text-primary-300"
          >
            Book an appointment →
          </a>
        </div>
      </div>
    </footer>
  );
}
