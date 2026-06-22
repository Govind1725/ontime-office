'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  Stethoscope,
  GraduationCap,
  Factory,
  Banknote,
  ShoppingBag,
  Hotel,
  Glasses,
} from 'lucide-react';
import styles from './Industries.module.css';

const industries = [
  {
    icon: Building2,
    title: 'Corporate & IT',
    desc: 'End-to-end office solutions for tech parks and corporate headquarters.',
    clients: '200+',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    desc: 'Specialized supplies for hospitals, clinics, and healthcare facilities.',
    clients: '80+',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'Comprehensive solutions for universities, schools, and training centers.',
    clients: '60+',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    desc: 'Industrial-grade supplies for factories and production units.',
    clients: '50+',
  },
  {
    icon: Banknote,
    title: 'Banking & Finance',
    desc: 'Secure, compliant solutions for financial institutions and banks.',
    clients: '40+',
  },
  {
    icon: ShoppingBag,
    title: 'Retail',
    desc: 'Point-of-sale supplies and retail operation essentials.',
    clients: '30+',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    desc: 'Premium supplies for hotels, resorts, and hospitality chains.',
    clients: '25+',
  },
  {
    icon: Glasses,
    title: 'Professional Services',
    desc: 'Tailored solutions for law firms, consultancies, and agencies.',
    clients: '35+',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

export default function Industries() {
  return (
    <section id="industries" className={styles.industries}>
      <div className="container">
        <div className={styles.header}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.span>
          <motion.h2
            className={`section-title ${styles.headerCenter}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Trusted Across Sectors
          </motion.h2>
          <motion.p
            className="section-subtitle"
            style={{ margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From IT parks to hospitals, we tailor our solutions to meet the
            unique demands of every industry.
          </motion.p>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                className={styles.card}
                variants={cardVariants}
              >
                <div className={styles.iconWrap}>
                  <Icon size={20} />
                </div>
                <h3 className={styles.cardTitle}>{ind.title}</h3>
                <p className={styles.cardDesc}>{ind.desc}</p>
                <div className={styles.cardStats}>
                  <div className={styles.cardStat}>
                    <div className={styles.cardStatNumber}>{ind.clients}</div>
                    <div className={styles.cardStatLabel}>Clients</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
