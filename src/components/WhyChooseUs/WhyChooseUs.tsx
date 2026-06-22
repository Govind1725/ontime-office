'use client';

import { motion } from 'framer-motion';
import {
  Clock,
  Shield,
  Truck,
  HeadphonesIcon,
  PackageCheck,
  Award,
} from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const features = [
  {
    icon: Clock,
    title: '15+ Years of Trust',
    desc: 'Over 15 years of enterprise excellence across India.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    desc: 'Every product undergoes rigorous quality checks before delivery.',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    desc: 'Serving 50+ cities with our own logistics network.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    desc: 'Enterprise account managers assigned to every client.',
  },
  {
    icon: PackageCheck,
    title: 'Bulk Order Expertise',
    desc: 'Seamless handling of large-scale corporate procurement.',
  },
  {
    icon: Award,
    title: 'Brand Authorizations',
    desc: 'Direct partnerships with 50+ global brands.',
  },
];

const stats = [
  { label: 'Client Retention Rate', value: '94%' },
  { label: 'Average Delivery Time', value: '24hrs' },
  { label: 'Order Accuracy', value: '99.7%' },
  { label: 'Cities Covered', value: '50+' },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.why}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Built for Enterprise Excellence
        </motion.h2>

        <div className={styles.grid}>
          <div className={styles.features}>
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  className={styles.feature}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className={styles.featureIcon}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className={styles.featureTitle}>{feat.title}</h4>
                    <p className={styles.featureDesc}>{feat.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className={styles.statsPanel}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`section-title ${styles.statsTitle}`}>
              By the Numbers
            </h3>
            <div className={styles.statsList}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statRow}>
                  <span className={styles.statRowLabel}>{stat.label}</span>
                  <span className={`${styles.statRowValue} ${styles.statRowValueAccent}`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
