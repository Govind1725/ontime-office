'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
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
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <video
            ref={videoRef}
            className={styles.bgVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
          >
            <source src="/videos/cta-bg.webm" type="video/webm" />
          </video>
          <div className={styles.overlay} />

          <div className={styles.content}>
            <motion.span
              className={styles.badge}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              LIMITED TIME
            </motion.span>

            <motion.h2
              className={styles.heading}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Transforming Workspaces with{' '}
              <span className={styles.highlight}>OOS</span>
            </motion.h2>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Streamline operations, enhance productivity, and create smarter work
              environments with innovative workspace solutions tailored for modern
              businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#solutions" className={styles.cta}>
                Explore Solutions
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
