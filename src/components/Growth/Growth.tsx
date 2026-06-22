'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import styles from './Growth.module.css';

export default function Growth() {
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
    <section id="growth" className={styles.growth}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Side: Text Content */}
          <motion.div
            className={styles.contentSide}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="section-label">Enterprise Growth</span>
            <h2 className={`section-title ${styles.title}`}>
              Empowering Operations with Integrated Ecosystems
            </h2>
            <p className={styles.text}>
              Since 2010, <span className={styles.highlight}>Ontime Office Solutions Pvt. Ltd.</span> has
              been at the forefront of delivering state-of-the-art office ecosystems and enterprise services
              to businesses across India.
            </p>
            <p className={styles.text}>
              Headquartered in Bangalore, we specialize in providing comprehensive corporate support
              services that empower organizations to achieve operational excellence, minimize overheads,
              and drive sustainable business growth.
            </p>
            <div className={styles.btnContainer}>
              <a href="#solutions" className={styles.ctaButton}>
                What We Deliver
                <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Video Animation */}
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
              >
                <source src="/videos/growth-bg.webm" type="video/webm" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
