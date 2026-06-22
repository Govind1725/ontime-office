'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Workflow.module.css';

const steps = [
  { step: '01', label: 'Consult', desc: 'We understand your office needs and requirements.' },
  { step: '02', label: 'Curate', desc: 'We select the best products from 50+ premium brands.' },
  { step: '03', label: 'Quote', desc: 'Transparent pricing with enterprise volume discounts.' },
  { step: '04', label: 'Deliver', desc: 'Pan-India delivery within 24-48 hours.' },
  { step: '05', label: 'Support', desc: 'Dedicated account management and after-sales care.' },
];

export default function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the workflow section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 20%'],
  });

  // Mapped scaleX for the progress track line
  const scaleX = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  // Step 1 animations linked to scroll progress
  const y1 = useTransform(scrollYProgress, [0.15, 0.23], [30, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.15, 0.23], [0, 1]);
  const bg1 = useTransform(scrollYProgress, [0.20, 0.25], ['#FFFFFF', '#2563EB']);
  const border1 = useTransform(scrollYProgress, [0.20, 0.25], ['var(--color-border)', '#2563EB']);
  const color1 = useTransform(scrollYProgress, [0.20, 0.25], ['var(--color-text-light)', '#FFFFFF']);
  const shadow1 = useTransform(scrollYProgress, [0.20, 0.25], ['0 0px 0px rgba(0,0,0,0)', '0 4px 16px rgba(37, 99, 235, 0.35)']);

  // Step 2 animations linked to scroll progress
  const y2 = useTransform(scrollYProgress, [0.30, 0.38], [30, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.30, 0.38], [0, 1]);
  const bg2 = useTransform(scrollYProgress, [0.35, 0.40], ['#FFFFFF', '#2563EB']);
  const border2 = useTransform(scrollYProgress, [0.35, 0.40], ['var(--color-border)', '#2563EB']);
  const color2 = useTransform(scrollYProgress, [0.35, 0.40], ['var(--color-text-light)', '#FFFFFF']);
  const shadow2 = useTransform(scrollYProgress, [0.35, 0.40], ['0 0px 0px rgba(0,0,0,0)', '0 4px 16px rgba(37, 99, 235, 0.35)']);

  // Step 3 animations linked to scroll progress
  const y3 = useTransform(scrollYProgress, [0.45, 0.53], [30, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.53], [0, 1]);
  const bg3 = useTransform(scrollYProgress, [0.50, 0.55], ['#FFFFFF', '#2563EB']);
  const border3 = useTransform(scrollYProgress, [0.50, 0.55], ['var(--color-border)', '#2563EB']);
  const color3 = useTransform(scrollYProgress, [0.50, 0.55], ['var(--color-text-light)', '#FFFFFF']);
  const shadow3 = useTransform(scrollYProgress, [0.50, 0.55], ['0 0px 0px rgba(0,0,0,0)', '0 4px 16px rgba(37, 99, 235, 0.35)']);

  // Step 4 animations linked to scroll progress
  const y4 = useTransform(scrollYProgress, [0.60, 0.68], [30, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.60, 0.68], [0, 1]);
  const bg4 = useTransform(scrollYProgress, [0.65, 0.70], ['#FFFFFF', '#2563EB']);
  const border4 = useTransform(scrollYProgress, [0.65, 0.70], ['var(--color-border)', '#2563EB']);
  const color4 = useTransform(scrollYProgress, [0.65, 0.70], ['var(--color-text-light)', '#FFFFFF']);
  const shadow4 = useTransform(scrollYProgress, [0.65, 0.70], ['0 0px 0px rgba(0,0,0,0)', '0 4px 16px rgba(37, 99, 235, 0.35)']);

  // Step 5 animations linked to scroll progress
  const y5 = useTransform(scrollYProgress, [0.75, 0.83], [30, 0]);
  const opacity5 = useTransform(scrollYProgress, [0.75, 0.83], [0, 1]);
  const bg5 = useTransform(scrollYProgress, [0.80, 0.85], ['#FFFFFF', '#2563EB']);
  const border5 = useTransform(scrollYProgress, [0.80, 0.85], ['var(--color-border)', '#2563EB']);
  const color5 = useTransform(scrollYProgress, [0.80, 0.85], ['var(--color-text-light)', '#FFFFFF']);
  const shadow5 = useTransform(scrollYProgress, [0.80, 0.85], ['0 0px 0px rgba(0,0,0,0)', '0 4px 16px rgba(37, 99, 235, 0.35)']);

  const stepsData = [
    { y: y1, opacity: opacity1, bg: bg1, border: border1, color: color1, shadow: shadow1 },
    { y: y2, opacity: opacity2, bg: bg2, border: border2, color: color2, shadow: shadow2 },
    { y: y3, opacity: opacity3, bg: bg3, border: border3, color: color3, shadow: shadow3 },
    { y: y4, opacity: opacity4, bg: bg4, border: border4, color: color4, shadow: shadow4 },
    { y: y5, opacity: opacity5, bg: bg5, border: border5, color: color5, shadow: shadow5 },
  ];

  return (
    <section className={styles.workflow} ref={containerRef}>
      <div className="container">
        <div className={styles.header}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.span>
          <motion.h2
            className={`section-title ${styles.headerCenter}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            From Inquiry to Delivery
          </motion.h2>
          <motion.p
            className="section-subtitle"
            style={{ margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A streamlined 5-step process designed for enterprise efficiency.
          </motion.p>
        </div>

        <div className={styles.track}>
          <div className={styles.trackLine}>
            <motion.div
              className={styles.trackLineFill}
              style={{ scaleX, originX: 0 }}
            />
          </div>

          {steps.map((s, i) => {
            const data = stepsData[i];
            return (
              <motion.div
                key={s.step}
                className={styles.step}
                style={{ opacity: data.opacity, y: data.y }}
              >
                <motion.div
                  className={styles.stepCircle}
                  style={{
                    backgroundColor: data.bg,
                    borderColor: data.border,
                    color: data.color,
                    boxShadow: data.shadow,
                  }}
                >
                  {s.step}
                </motion.div>
                <div>
                  <div className={styles.stepLabel}>{s.label}</div>
                  <div className={styles.stepDesc}>{s.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
