import { MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL } from '@/lib/constants';

export default function StickyFooter() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur-md shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] lg:hidden">
      <div className="grid grid-cols-2 gap-px bg-slate-200">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-accent-green py-3.5 text-white transition-colors active:bg-accent-green-dark"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm font-bold">WhatsApp</span>
        </a>
        <a
          href={PHONE_TEL}
          className="flex items-center justify-center gap-2 bg-primary-600 py-3.5 text-white transition-colors active:bg-primary-700"
        >
          <Phone className="h-5 w-5" />
          <span className="text-sm font-bold">Call Now</span>
        </a>
      </div>
    </div>
  );
}
