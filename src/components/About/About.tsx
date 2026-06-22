'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import styles from './About.module.css';

const counters = [
  { number: 15, suffix: '+', label: 'Years of Excellence' },
  { number: 1000, suffix: '+', label: 'Products Delivered' },
  { number: 500, suffix: '+', label: 'Corporate Clients' },
  { number: 50, suffix: '+', label: 'Cities Served' },
];

function Counter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const display = isInView ? target : 0;

  return (
    <div className={styles.counterCard}>
      <div className={styles.counterNumber}>
        <motion.span
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {display.toLocaleString()}
        </motion.span>
        <span className={styles.counterPlus}>{suffix}</span>
      </div>
      <div className={styles.counterLabel}>{label}</div>
    </div>
  );
}

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => video.play().catch(() => {});
    play();
    const handleVisibility = () => { if (!video.paused) video.play().catch(() => {}); };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.contentSide}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              India&apos;s Premier Office Solutions Provider
            </h2>
            <p className={styles.text}>
              For over{' '}
              <span className={styles.highlight}>15 years</span>, Ontime Office
              Solutions has been the backbone of corporate India, delivering
              everything from premium stationery to cutting-edge IT infrastructure.
            </p>
            <p className={styles.text}>
              With a network spanning{' '}
              <span className={styles.highlight}>50+ cities</span> and a catalog
              of <span className={styles.highlight}>1000+ products</span>, we
              ensure your office never misses a beat.
            </p>

            <div className={styles.counters}>
              {counters.map((c) => (
                <Counter key={c.label} target={c.number} suffix={c.suffix} label={c.label} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.visualSide}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.videoWrapper}>
              <video
                ref={videoRef}
                className={styles.video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                disablePictureInPicture
              >
                <source src="/videos/about-bg.webm" type="video/webm" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
