import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import whiteningImage from '@/assets/images/smile-transformations/image.png';
import alignersImage from '@/assets/images/smile-transformations/image copy.png';
import restorationImage from '@/assets/images/smile-transformations/image copy 2.png';

const TRANSFORMATIONS = [
  {
    title: 'Teeth Whitening',
    eyebrow: 'Brighter, confident smiles',
    description: 'Professional smile care focused on a clean, natural-looking finish and patient comfort.',
    image: whiteningImage,
    alt: 'Baidyanath Dental Clinic team and treatment space',
    detail: 'Personalized consultation, gentle care, and clear guidance for maintaining your brighter smile.',
  },
  {
    title: 'Dental Aligners & Braces',
    eyebrow: 'Straighter smiles, made personal',
    description: 'Explore modern orthodontic care with treatment planning tailored to your bite and goals.',
    image: alignersImage,
    alt: 'ClearPath certification displayed at Baidyanath Dental Clinic',
    detail: 'Ask Dr. Akhilesh Saini about clear aligner and braces options during your consultation.',
  },
  {
    title: 'Tooth Restoration',
    eyebrow: 'Comfortable, complete care',
    description: 'Modern equipment and precise treatment help restore function while protecting your smile.',
    image: restorationImage,
    alt: 'Modern dental treatment chair and equipment',
    detail: 'From fillings and crowns to advanced restorative care, every plan starts with a careful assessment.',
  },
];

export default function SmileTransformations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TRANSFORMATIONS[activeIndex];

  return (
    <section id="results" className="bg-primary-50/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-primary-700 shadow-soft">
            <Sparkles className="h-4 w-4" />
            Treatment Results
          </span>
          <h2 className="section-title mt-4">Smile Transformations & Results</h2>
          <p className="mt-4 text-lg text-slate-600">
            Explore the care, technology, and expertise behind confident smiles at Baidyanath Dental Clinic.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-slate-900 shadow-card-hover sm:min-h-[480px]">
            {TRANSFORMATIONS.map((item, index) => (
              <img
                key={item.title}
                src={item.image}
                alt={item.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                  index === activeIndex ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">{active.eyebrow}</p>
              <h3 className="mt-2 text-3xl font-bold text-white">{active.title}</h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-200">{active.detail}</p>
            </div>
          </div>

          <div className="grid gap-4">
            {TRANSFORMATIONS.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group flex items-center gap-4 rounded-2xl bg-white p-4 text-left shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover ${
                    isActive ? 'ring-2 ring-primary-500 ring-offset-2' : ''
                  }`}
                  aria-pressed={isActive}
                >
                  <img src={item.image} alt="" className="h-24 w-24 shrink-0 rounded-xl object-cover" />
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-base font-bold text-slate-850">{item.title}</span>
                      <ArrowUpRight className={`h-5 w-5 shrink-0 transition-transform ${isActive ? 'text-primary-600' : 'text-slate-300 group-hover:text-primary-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-500">{item.description}</span>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent-green-dark">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Personalized care
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
