import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

function useCounter(target, start = 0, duration = 1200, trigger = true) {
  const [value, setValue] = useState(start);
  useEffect(() => {
    if (!trigger) return;
    let raf;
    const t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      setValue(Math.round(start + (target - start) * p));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration, trigger]);
  return value;
}

export default function SocialProofCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const leads = useCounter(35, 0, 1200, inView);
  const csat = useCounter(98, 0, 1200, inView);
  const speed = useCounter(42, 0, 1200, inView);

  return (
    <section className="w-full bg-white" id="cta">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Testimonials */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900">Trusted by growth-focused teams</h3>
            <div className="mt-6 space-y-4">
              {[{
                title: 'No Missed Leads',
                quote: 'Envera recovered opportunities we didn\'t know we were losing — our pipeline is healthier than ever.',
                name: 'COO, National Services Brand'
              },{
                title: 'From Firefighting to Focus',
                quote: 'Vera connects our phone, CRM, and email so the team can finally focus on customers, not admin.',
                name: 'Head of Sales, Multi-location Retail'
              }].map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm"
                >
                  <div className="flex items-center gap-2 text-amber-500">
                    {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="h-4 w-4 fill-amber-500" />)}
                  </div>
                  <p className="mt-3 text-gray-900 font-medium">{t.title}</p>
                  <p className="mt-2 text-gray-600">{t.quote}</p>
                  <p className="mt-3 text-sm text-gray-500">{t.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Metrics + CTA */}
          <div ref={ref} className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900">+{leads}%</div>
                <p className="text-sm text-gray-600">Leads Recovered</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900">{csat}%</div>
                <p className="text-sm text-gray-600">CSAT</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-gray-900">-{speed}%</div>
                <p className="text-sm text-gray-600">Response Time</p>
              </div>
            </div>
            <div className="mt-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-medium text-gray-900">Let’s Connect Your Business</p>
                  <p className="text-sm text-gray-600">See Vera in action on desktop and mobile.</p>
                </div>
                <div className="flex items-center gap-3">
                  <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-3 text-sm shadow-sm hover:shadow-md transition-shadow">
                    Book a Demo <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm border border-gray-200 hover:bg-gray-50">
                    Call Us Today
                  </a>
                </div>
              </div>
              {/* Subtle device mock */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-lg h-24 bg-white border border-gray-200 shadow-inner" />
                <div className="rounded-lg h-24 bg-white border border-gray-200 shadow-inner col-span-2" />
                <div className="rounded-lg h-24 bg-white border border-gray-200 shadow-inner col-span-2" />
                <div className="rounded-lg h-24 bg-white border border-gray-200 shadow-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
