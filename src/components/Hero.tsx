import { Star, Clock, MessageCircle, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL } from '@/lib/constants';

const HERO_IMG =
  'https://images.pexels.com/photos/305567/pexels-photo-305567.jpeg?auto=compress&cs=tinysrgb&w=1200';

const TRUST_ITEMS = [
  'Pain-Free Treatments',
  'Expert Specialists',
  'Transparent Pricing',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white pt-28 pb-16 sm:pt-32 lg:pt-36"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-primary-100/60 blur-3xl" />
        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-accent-green/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="animate-fade-in-up">
            {/* Rating badge */}
            <div className="mb-5 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-primary-200 bg-white px-4 py-2 shadow-soft">
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-slate-850">5.0</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-500">
                  (347+ Google Reviews)
                </span>
              </div>
              <span className="h-4 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
                </span>
                <span className="text-sm font-semibold text-accent-green-dark">
                  Open 24 Hours
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-slate-850 sm:text-5xl lg:text-[3.25rem]">
              Advanced, 24/7{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-primary-600">Pain-Free</span>
                <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-primary-200/50" />
              </span>{' '}
              Dental Care in Lucknow
            </h1>

            {/* Subheadline */}
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Affordable and transparent dental treatments by expert specialists.
              Consultation fee starting at just{' '}
              <span className="font-semibold text-primary-700">₹300</span>.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
              </a>
              <a href={PHONE_TEL} className="btn-outline text-base">
                <Phone className="h-5 w-5" />
                Call: 099355 71741
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
              {TRUST_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent-green" />
                  <span className="text-sm font-medium text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in-up [animation-delay:150ms]">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary-900/10">
              <img
                src={HERO_IMG}
                alt="Modern dental clinic at Baidyanath Dental"
                className="h-[380px] w-full object-cover sm:h-[460px] lg:h-[520px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
            </div>

            {/* Floating 24/7 badge */}
            <div className="absolute -left-4 top-6 hidden animate-float rounded-2xl bg-white p-4 shadow-card-hover sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-green/10">
                  <Clock className="h-6 w-6 text-accent-green" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-850">24/7 Emergency</p>
                  <p className="text-xs text-slate-500">Always open for you</p>
                </div>
              </div>
            </div>

            {/* Floating sterilization badge */}
            <div className="absolute -right-4 bottom-6 hidden animate-float rounded-2xl bg-white p-4 shadow-card-hover [animation-delay:1s] sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100">
                  <ShieldCheck className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-850">100% Sterilized</p>
                  <p className="text-xs text-slate-500">Modern equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
