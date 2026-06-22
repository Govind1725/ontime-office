'use client';

import { motion } from 'framer-motion';
import styles from './Industries.module.css';

const industries = [
  {
    img: '/images/industries/corporate_it.png',
    title: 'Corporate & IT',
    desc: 'End-to-end office solutions for tech parks and corporate headquarters.',
    clients: '200+',
  },
  {
    img: '/images/industries/healthcare.png',
    title: 'Healthcare',
    desc: 'Specialized supplies for hospitals, clinics, and healthcare facilities.',
    clients: '80+',
  },
  {
    img: '/images/industries/education.png',
    title: 'Education',
    desc: 'Comprehensive solutions for universities, schools, and training centers.',
    clients: '60+',
  },
  {
    img: '/images/industries/manufacturing.png',
    title: 'Manufacturing',
    desc: 'Industrial-grade supplies for factories and production units.',
    clients: '50+',
  },
  {
    img: '/images/industries/banking_finance.png',
    title: 'Banking & Finance',
    desc: 'Secure, compliant solutions for financial institutions and banks.',
    clients: '40+',
  },
  {
    img: '/images/industries/retail.png',
    title: 'Retail',
    desc: 'Point-of-sale supplies and retail operation essentials.',
    clients: '30+',
  },
  {
    img: '/images/industries/hospitality.png',
    title: 'Hospitality',
    desc: 'Premium supplies for hotels, resorts, and hospitality chains.',
    clients: '25+',
  },
  {
    img: '/images/industries/professional_services.png',
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
            return (
              <motion.div
                key={ind.title}
                className={styles.card}
                variants={cardVariants}
              >
                <div className={styles.iconWrap}>
                  <img
                    src={ind.img}
                    alt={ind.title}
                    className={styles.cardImage}
                    loading="lazy"
                  />
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
