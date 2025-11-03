import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Wifi, Database, LineChart, ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const FloatingIcon = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: [ -6, 6, -6 ], opacity: 1 }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
    className={`rounded-full p-3 backdrop-blur-md bg-white/60 shadow-sm border border-white/40 ${className}`}
  >
    {children}
  </motion.div>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient light overlay for premium feel (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90" />

      {/* Content Layer */}
      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
            One Partner. Every Tool. <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">Future-Ready.</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Envera unifies phone, CRM, broadband, and email into a single AI-driven ecosystem — transforming chaos into clarity.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-3 text-sm md:text-base shadow-sm hover:shadow-md transition-shadow">
              Book a Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm md:text-base border border-gray-200 hover:bg-gray-50">
              Call Us Today
            </a>
          </div>
        </motion.div>

        {/* Central AI orb and orbiting system */}
        <div className="relative mt-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-blue-600 via-indigo-500 to-blue-400 shadow-lg shadow-blue-500/20 border border-white/60"
            aria-label="Vera AI"
          />
          {/* Orbits */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-56 w-56 rounded-full border border-gray-200/70" />
          </div>

          {/* Floating icons positioned around the orb */}
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-6">
              <FloatingIcon delay={0.2}><Phone className="h-5 w-5 text-gray-700" /></FloatingIcon>
            </div>
            <div className="absolute right-6 top-1/3">
              <FloatingIcon delay={0.6}><Mail className="h-5 w-5 text-gray-700" /></FloatingIcon>
            </div>
            <div className="absolute left-6 bottom-1/3">
              <FloatingIcon delay={0.4}><Wifi className="h-5 w-5 text-gray-700" /></FloatingIcon>
            </div>
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-6">
              <FloatingIcon delay={0.8}><Database className="h-5 w-5 text-gray-700" /></FloatingIcon>
            </div>
          </div>

          {/* Metrics rising */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { label: 'Leads Recovered', value: '+35%' },
              { label: 'Response Time', value: '-42%' },
              { label: 'Customer Satisfaction', value: '98%' },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="rounded-xl border border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-4 text-center"
              >
                <div className="text-2xl font-semibold text-gray-900">{m.value}</div>
                <div className="text-sm text-gray-600">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Micro hint */}
        <div className="mt-10 flex items-center justify-center gap-2 text-gray-500 text-sm">
          <LineChart className="h-4 w-4" />
          Purposeful motion: a story from chaos to clarity
        </div>
      </div>
    </section>
  );
}
