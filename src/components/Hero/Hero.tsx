'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import styles from './Hero.module.css';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const services = [
  'IT Infrastructure Solutions',
  'Printing Solutions',
  'Hygiene & Facility Care',
  'Housekeeping Solutions',
  'Corporate Pantry Solutions',
  'Workplace Essentials',
  'Professional Manpower Supply',
  'Corporate Procurement Solutions',
];

const TYPING_SPEED = 60;
const DELETING_SPEED = 30;
const PAUSE_MS = 2000;

function Typewriter() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = services[textIndex];

    if (!isDeleting) {
      if (charIndex < current.length) {
        const timer = setTimeout(() => setCharIndex(charIndex + 1), TYPING_SPEED);
        return () => clearTimeout(timer);
      }
      const timer = setTimeout(() => setIsDeleting(true), PAUSE_MS);
      return () => clearTimeout(timer);
    }

    if (charIndex > 0) {
      const timer = setTimeout(() => setCharIndex(charIndex - 1), DELETING_SPEED);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % services.length);
    }, TYPING_SPEED);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <span className={styles.typewriterDynamic}>
      {services[textIndex].substring(0, charIndex)}
      <span className={styles.cursor} />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBg} />

      <motion.div
        className={styles.heroContent}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className={styles.heroBadge}
          variants={fadeUp}
        >
          <span className={styles.heroBadgeDot} />
          India&apos;s Trusted Enterprise Partner
        </motion.div>

        <motion.h1 className={styles.heroTitle} variants={fadeUp}>
          Your Enterprise Office{' '}
          <span className={styles.heroTitleAccent}>Solutions Partner</span>
        </motion.h1>

        <motion.div className={styles.typewriterWrap} variants={fadeUp}>
          <span className={styles.typewriterStatic}>
            Transforming Modern Workplaces Through
          </span>
          <Typewriter />
        </motion.div>

        <motion.p className={styles.heroDescription} variants={fadeUp}>
          From IT infrastructure to facility management, we deliver comprehensive
          workplace solutions to India&apos;s leading enterprises. One source,
          infinite possibilities.
        </motion.p>

        <motion.div className={styles.heroActions} variants={fadeUp}>
          <a href="#solutions" className={styles.heroCta}>
            Explore Solutions
            <ChevronRight size={18} />
          </a>
        </motion.div>

        <motion.div className={styles.trustBadge} variants={fadeUp}>
          <ShieldCheck size={14} className={styles.trustIcon} />
          Trusted by Leading Enterprises Since 2010
        </motion.div>
      </motion.div>
    </section>
  );
}
