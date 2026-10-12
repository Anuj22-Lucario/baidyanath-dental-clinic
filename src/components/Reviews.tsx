import { Star, Quote, BadgeCheck } from 'lucide-react';

const REVIEWS = [
  {
    text: 'My experience at Baidyanath Dental Clinic was exceptional. The treatment provided was top-notch, with a focus on patient comfort and care. The prices were very reasonable, making quality dental care accessible to all.',
    author: 'Pallavi Pandey',
    initials: 'PP',
    badge: null,
  },
  {
    text: 'Outstanding Experience at Baidyanath Dental Clinic! One of the most comfortable and satisfying dental experiences I have ever had. A special shout-out to Dr. Akhilesh, who is not only incredibly skilled but also genuinely compassionate.',
    author: 'Ajeet Kumar',
    initials: 'AK',
    badge: 'Local Guide',
  },
  {
    text: 'I had an excellent experience with Dr. Akhilesh Saini. His expertise and dedication were clear from the start. Highly recommend Dr. Saini for anyone seeking knowledgeable and compassionate dental care.',
    author: 'Asheesh Tripathi',
    initials: 'AT',
    badge: null,
  },
  {
    text: 'Very good behaviour of Dr Akhilesh saini and Treatment cost very genuine.',
    author: 'Sajan Sharma',
    initials: 'SS',
    badge: null,
  },
];

const BG_GRADIENTS = [
  'from-primary-500 to-primary-700',
  'from-sky-500 to-primary-600',
  'from-cyan-500 to-primary-600',
  'from-teal-500 to-primary-600',
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-gradient-to-b from-primary-50/50 to-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">
            Patient Reviews
          </span>
          <h2 className="section-title mt-4">What Our Patients Say</h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-slate-850">5.0</span>
            <span className="text-base text-slate-500">· 347+ Google Reviews</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary-100 transition-colors duration-300 group-hover:text-primary-200" />

              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="relative mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                "{review.text}"
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${BG_GRADIENTS[i]} text-sm font-bold text-white shadow-md`}
                >
                  {review.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-850">{review.author}</p>
                  <div className="flex items-center gap-1">
                    {review.badge ? (
                      <>
                        <BadgeCheck className="h-3.5 w-3.5 text-primary-500" />
                        <span className="text-xs text-primary-600">{review.badge}</span>
                      </>
                    ) : (
                      <span className="text-xs text-slate-400">Verified Google Review</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
