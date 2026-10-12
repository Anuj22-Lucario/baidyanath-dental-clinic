import {
  Sparkles,
  Stethoscope,
  Bone,
  Smile,
  Baby,
  ScanLine,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Sparkles,
    title: 'Teeth Whitening & Laser Dentistry',
    description:
      'Advanced laser whitening for a brighter, stain-free smile in a single visit.',
  },
  {
    icon: Stethoscope,
    title: 'Root Canal Treatment & Fillings',
    description:
      'Pain-free RCT and tooth-colored fillings using the latest rotary endodontic technology.',
  },
  {
    icon: Bone,
    title: 'Implants, Dentures & Bridges',
    description:
      'Permanent dental implants and custom dentures to restore full chewing function.',
  },
  {
    icon: Smile,
    title: 'Braces, Aligners, Veneers & Crowns',
    description:
      'Straighten, reshape, and perfect your smile with braces, clear aligners, and veneers.',
  },
  {
    icon: Baby,
    title: "Pediatric Dental Care & Oral Surgery",
    description:
      'Gentle kids dentistry and expert oral surgical procedures in a child-friendly environment.',
  },
  {
    icon: ScanLine,
    title: 'X-ray, Bonding & Check-ups',
    description:
      'Digital X-rays, cosmetic bonding, and comprehensive routine dental examinations.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
            Our Services
          </span>
          <h2 className="section-title mt-4">
            Comprehensive Dental Care Under One Roof
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From routine cleanings to advanced surgical procedures — every treatment
            delivered with precision, comfort, and care.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Hover gradient accent */}
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-primary-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-600/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                </div>

                <h3 className="relative mt-5 text-lg font-bold text-slate-850">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
