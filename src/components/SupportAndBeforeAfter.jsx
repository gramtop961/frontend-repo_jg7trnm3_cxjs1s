import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Headphones, Shield } from 'lucide-react';

export default function SupportAndBeforeAfter() {
  return (
    <section className="w-full bg-white">
      <SupportSection />
      <BeforeAfter />
    </section>
  );
}

function SupportSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-semibold text-gray-900">Incredible Support — As the Future Demands</h3>
          <p className="mt-4 text-gray-600">Human expertise with AI vigilance. We&apos;re proactive, not reactive.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-700">
            <span className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200">7-Day Support</span>
            <span className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200">24/7 Monitoring</span>
            <span className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200">Enterprise SLA</span>
          </div>
        </div>
        <div ref={ref} className="relative h-64">
          {/* Glowing continuous support ring */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full border border-gray-200 shadow-inner"
          />
          <motion.div
            animate={{ boxShadow: [
              '0 0 0 0 rgba(59,130,246,0.0)',
              '0 0 0 12px rgba(59,130,246,0.08)',
              '0 0 0 0 rgba(59,130,246,0.0)'
            ]}}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full"
          />

          {/* Icons pulsing around the ring */}
          <PulsingIcon angle={0}><Headphones className="h-5 w-5 text-gray-800" /></PulsingIcon>
          <PulsingIcon angle={120}><Shield className="h-5 w-5 text-gray-800" /></PulsingIcon>
          <PulsingIcon angle={240}><Headphones className="h-5 w-5 text-gray-800" /></PulsingIcon>
        </div>
      </div>
    </div>
  );
}

function PulsingIcon({ angle, children }) {
  const radius = 110;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <div className="rounded-full bg-white border border-gray-200 shadow p-3">{children}</div>
    </motion.div>
  );
}

function BeforeAfter() {
  const [position, setPosition] = useState(50); // percentage
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = Math.min(Math.max(0, (e.clientX - rect.left) / rect.width), 1);
      setPosition(Math.round(x * 100));
    };
    const down = (e) => {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', up);
      handleMove(e);
    };
    const up = () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', up);
    };
    el.addEventListener('mousedown', down);
    return () => {
      el.removeEventListener('mousedown', down);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', up);
    };
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <h3 className="text-3xl font-semibold text-gray-900">Before / After</h3>
      <p className="mt-2 text-gray-600">Drag the slider to reveal the transformation from tangled chaos to unified clarity.</p>
      <div ref={containerRef} className="relative mt-6 h-80 rounded-2xl overflow-hidden border border-gray-200 cursor-col-resize select-none">
        {/* Before: chaos */}
        <div className="absolute inset-0 bg-gray-900">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cable" x1="0" x2="1">
                <stop offset="0%" stopColor="#6b7280" />
                <stop offset="100%" stopColor="#374151" />
              </linearGradient>
            </defs>
            {Array.from({ length: 30 }).map((_, i) => (
              <path key={i} d={`M ${Math.random()*800} ${Math.random()*300} C ${Math.random()*800} ${Math.random()*300}, ${Math.random()*800} ${Math.random()*300}, ${Math.random()*800} ${Math.random()*300}`}
                stroke="url(#cable)" strokeWidth="2" fill="none" opacity="0.6" />
            ))}
          </svg>
        </div>
        {/* After: clarity */}
        <div
          className="absolute inset-0 bg-white"
          style={{ width: `${position}%`, clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />
          <div className="relative h-full w-full p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Calls', 'CRM', 'Email', 'Broadband', 'Automation', 'Analytics'].map((label) => (
                <div key={label} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="h-20 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100" />
                  <p className="mt-3 text-sm text-gray-700">{label} connected</p>
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <p className="text-sm text-gray-600">Clarity powered by Vera AI</p>
            </div>
          </div>
        </div>
        {/* Divider handle */}
        <div className="absolute top-0" style={{ left: `calc(${position}% - 1px)` }}>
          <div className="h-80 w-0.5 bg-gray-300" />
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white border border-gray-200 shadow px-3 py-1 text-xs text-gray-700">
            Drag
          </div>
        </div>
      </div>
    </div>
  );
}
