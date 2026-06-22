'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Package, CheckCircle, Building2, Heart, Zap } from 'lucide-react';
import styles from './CompetitiveEdge.module.css';

const edgeItems = [
  {
    icon: Shield,
    title: 'INDUSTRY EXPERIENCE',
    desc: 'With over a decade of industry expertise, OOS has been helping businesses streamline procurement through reliable products, efficient sourcing, and trusted service across multiple sectors.',
  },
  {
    icon: Package,
    title: 'COMPLETE BUSINESS SOLUTIONS',
    desc: 'From office supplies and IT products to housekeeping materials and industrial essentials, we provide end-to-end solutions under one trusted partner.',
  },
  {
    icon: CheckCircle,
    title: 'CUSTOMIZED FOR YOUR NEEDS',
    desc: 'Every business is unique. Our team carefully understands your requirements and delivers tailored solutions that align with your operational goals and budget.',
  },
  {
    icon: Building2,
    title: 'TRUSTED ACROSS INDUSTRIES',
    desc: 'We proudly support organizations across manufacturing, corporate offices, healthcare, education, hospitality, and industrial sectors with quality products and dependable service.',
  },
  {
    icon: Heart,
    title: 'CUSTOMER-FIRST APPROACH',
    desc: 'Customer satisfaction is at the heart of everything we do. We focus on building long-term relationships through responsiveness, reliability, and consistent quality.',
  },
  {
    icon: Zap,
    title: 'RELIABLE DELIVERY & SUPPORT',
    desc: 'Our dedicated team ensures timely deliveries, product availability, and ongoing support, helping businesses operate smoothly without interruptions.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function CompetitiveEdge() {
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
    <section id="competitive-edge" className={styles.sectionContainer}>
      <div className="container">
        {/* Floating Dark Card Wrapper */}
        <div className={styles.darkCardWrapper}>
          
          {/* Video Background */}
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
            <source src="/videos/edge-bg.webm" type="video/webm" />
          </video>
          <div className={styles.overlay} />

          {/* Foreground Content */}
          <div className={styles.contentContainer}>
            <motion.h2 
              className={styles.title}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Businesses Choose OOS
            </motion.h2>

            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Delivering quality products, dependable service, and tailored business solutions that help organizations operate more efficiently every day.
            </motion.p>

            <motion.div 
              className={styles.list}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {edgeItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={item.title} 
                    className={styles.row}
                    variants={rowVariants}
                  >
                    <div className={styles.iconWrap}>
                      <Icon size={24} />
                    </div>
                    <div className={styles.rowTitle}>
                      {item.title}
                    </div>
                    <div className={styles.rowDesc}>
                      {item.desc}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
