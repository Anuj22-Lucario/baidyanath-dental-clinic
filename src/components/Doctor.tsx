import { BadgeCheck, Clock3, HeartHandshake, MessageCircle, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

const DOCTOR_IMG = '/image.png';

const QUALITIES = [
  {
    icon: Stethoscope,
    title: 'Expert Specialist',
    description: 'Advanced dental expertise with a careful, precise treatment approach.',
  },
  {
    icon: HeartHandshake,
    title: 'Compassionate Care',
    description: 'A calm, genuinely caring chair-side manner that helps patients feel at ease.',
  },
  {
    icon: Sparkles,
    title: 'Personalized Treatment',
    description: 'Thoughtful treatment plans shaped around each patient’s unique dental needs.',
  },
];

const TRUST_BADGES = [
  { icon: BadgeCheck, label: 'Reg. No. 7816' },
  { icon: ShieldCheck, label: 'Certified ClearPath Specialist' },
  { icon: ShieldCheck, label: '100% Sterilized Clinic' },
];

export default function Doctor() {
  return (
    <section id="doctor" className="overflow-hidden bg-slate-850 py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative animate-fade-in-up">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary-600/30 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={DOCTOR_IMG}
                alt="Baidyanath Dental Clinic and Dr. Akhilesh Saini"
                className="h-[380px] w-full object-cover object-center sm:h-[500px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">Dr. Akhilesh Saini</h3>
                <p className="text-sm font-medium text-primary-300">Lead Dentist & Dental Surgeon</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up [animation-delay:120ms]">
            <span className="inline-block rounded-full bg-primary-600/20 px-4 py-1.5 text-sm font-semibold text-primary-300 ring-1 ring-primary-600/30">
              Meet Your Dentist
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Dr. Akhilesh Saini
            </h2>
            <p className="mt-2 text-lg font-medium text-primary-300">
              B.D.S., M.I.D.A. · Dental Surgeon & Oral Care Specialist
            </p>
            <p className="mt-1 text-sm font-medium text-slate-400">Registration No. 7816</p>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              Dr. Akhilesh Saini combines advanced dental expertise with compassionate care and a
              personalized treatment approach. He takes time to understand every patient’s concerns,
              explain treatment clearly, and make quality dental care feel comfortable and accessible.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {TRUST_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-slate-200 ring-1 ring-white/10"
                  >
                    <Icon className="h-4 w-4 text-primary-300" />
                    {badge.label}
                  </span>
                );
              })}
            </div>

            <div className="mt-7 rounded-2xl border border-primary-500/20 bg-primary-950/40 p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Clock3 className="h-4 w-4 text-primary-300" />
                OPD Timings
              </div>
              <div className="mt-3 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                <p>Daily Morning: <span className="font-semibold text-white">11:00 AM – 2:00 PM</span></p>
                <p>Evening: <span className="font-semibold text-white">6:00 PM – 9:00 PM</span></p>
              </div>
              <p className="mt-2 text-xs font-medium text-amber-300">Sunday evening closed</p>
            </div>

            <div className="mt-8 space-y-4">
              {QUALITIES.map((quality) => {
                const Icon = quality.icon;
                return (
                  <div
                    key={quality.title}
                    className="flex items-start gap-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-primary-600/30"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-600/20 ring-1 ring-primary-600/30">
                      <Icon className="h-5 w-5 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{quality.title}</h4>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-400">{quality.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-500 active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              Book a Consultation with Dr. Saini
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
