import { Clock, BadgeIndianRupee, ShieldCheck } from 'lucide-react';

const USPS = [
  {
    icon: Clock,
    title: '24/7 Emergency Care',
    description: 'Round-the-clock dental emergency service — we never close.',
    color: 'green',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Consultation @ ₹300 Only',
    description: 'Expert consultation at an unbeatable, transparent price.',
    color: 'primary',
  },
  {
    icon: ShieldCheck,
    title: '100% Sterilized Equipment',
    description: 'State-of-the-art, hygienic tools for your complete safety.',
    color: 'primary',
  },
];

const COLOR_MAP = {
  green: {
    bg: 'bg-accent-green/10',
    text: 'text-accent-green',
    ring: 'ring-accent-green/20',
    bar: 'bg-accent-green',
  },
  primary: {
    bg: 'bg-primary-100',
    text: 'text-primary-600',
    ring: 'ring-primary-200',
    bar: 'bg-primary-600',
  },
};

export default function Highlights() {
  return (
    <section className="relative z-10 -mt-2 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-3">
          {USPS.map((usp, i) => {
            const c = COLOR_MAP[usp.color as keyof typeof COLOR_MAP];
            const Icon = usp.icon;
            return (
              <div
                key={usp.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:shadow-card-hover animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`absolute left-0 top-0 h-1 w-full ${c.bar}`} />
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${c.bg} ring-1 ${c.ring} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`h-7 w-7 ${c.text}`} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-850">{usp.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {usp.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
