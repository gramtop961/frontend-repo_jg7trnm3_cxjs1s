import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function NarrativeSection() {
  const refProblem = useRef(null);
  const inViewProblem = useInView(refProblem, { once: true, margin: '-100px' });
  const refSolution = useRef(null);
  const inViewSolution = useInView(refSolution, { once: true, margin: '-100px' });

  return (
    <section className="relative w-full bg-white">
      {/* Problem: From Chaos to Clarity */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">From Chaos to Clarity</h2>
            <p className="mt-4 text-gray-600">Your tools aren&apos;t the problem — the lack of connection is.</p>
            <div className="mt-6 flex items-center gap-2 text-amber-600">
              <AlertTriangle className="h-5 w-5" />
              <span className="text-sm">Disconnected systems. Missed opportunities. Noise.</span>
            </div>
          </div>
          <div ref={refProblem} className="relative h-64 md:h-80">
            {/* Greyscale collision animation */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: (i % 2 === 0 ? -1 : 1) * 80, y: (i * 10) - 40, rotate: -8, opacity: 0 }}
                animate={inViewProblem ? { x: [ (i % 2 === 0 ? -80 : 80), (i % 3 === 0 ? 50 : -30), 0 ], y: [ -20, 10, 0 ], rotate: [ -8, 8, 0 ], opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: i * 0.05, ease: 'easeInOut' }}
                className="absolute rounded-lg bg-gradient-to-br from-gray-200 to-gray-100 border border-gray-300/60 shadow-sm"
                style={{ width: 80 + (i % 3) * 20, height: 36 + (i % 2) * 10, left: `${10 + (i * 8)}%`, top: `${10 + (i * 4)}%` }}
              />
            ))}
            {/* Error flashes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inViewProblem ? { opacity: [0, 1, 0, 1, 0] } : {}}
              transition={{ duration: 1.6 }}
              className="absolute right-6 top-6 text-xs px-2 py-1 rounded bg-red-50 text-red-700 border border-red-200"
            >
              Error: Sync failed
            </motion.div>
          </div>
        </div>
      </div>

      {/* Solution: We Connect. Vera Commands. You Grow. */}
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div ref={refSolution} className="relative h-64 md:h-80">
            {/* Central hub */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inViewSolution ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 shadow-lg"
            />
            {/* Relinking lines */}
            {[...Array(6)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ width: 0, opacity: 0 }}
                animate={inViewSolution ? { width: `${40 + i * 8}%`, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                className="absolute left-1/2 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500"
                style={{ transform: `rotate(${i * 25}deg) translateX(-50%)` }}
              />
            ))}
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">We Connect. Vera Commands. You Grow.</h3>
            <div className="mt-6 space-y-4">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-xl border border-gray-200 p-4 bg-white">
                <p className="text-gray-900 font-medium">Connect</p>
                <p className="text-sm text-gray-600">Systems sync in real time across phone, CRM, broadband, and email.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-xl border border-gray-200 p-4 bg-white">
                <p className="text-gray-900 font-medium">Command</p>
                <p className="text-sm text-gray-600">Vera AI orchestrates data in and out, automating the busywork.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} className="rounded-xl border border-gray-200 p-4 bg-white">
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                  <p className="text-gray-900 font-medium">Grow</p>
                </div>
                <p className="text-sm text-gray-600">Dashboards light up as metrics trend upward — consistently.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
