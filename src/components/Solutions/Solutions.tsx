'use client';

import { motion } from 'framer-motion';
import {
  Package,
  Printer,
  Monitor,
  Sofa,
  Shield,
  Headphones,
} from 'lucide-react';
import styles from './Solutions.module.css';

const solutions = [
  {
    icon: Package,
    title: 'Office Stationery',
    desc: 'Premium pens, paper, notebooks, and filing essentials from top global brands delivered to your desk.',
  },
  {
    icon: Printer,
    title: 'Printing & Imaging',
    desc: 'High-performance printers, toners, and managed print services for enterprise efficiency.',
  },
  {
    icon: Monitor,
    title: 'IT & Accessories',
    desc: 'Laptops, monitors, keyboards, and peripheral solutions tailored for corporate environments.',
  },
  {
    icon: Sofa,
    title: 'Office Furniture',
    desc: 'Ergonomic chairs, workstations, and collaborative furniture that elevate workplace wellness.',
  },
  {
    icon: Shield,
    title: 'Security Solutions',
    desc: 'CCTV systems, access control, and surveillance solutions to protect your enterprise assets.',
  },
  {
    icon: Headphones,
    title: 'Audio-Visual',
    desc: 'Conference room setups, projectors, and AV systems for seamless collaboration.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function Solutions() {
  return (
    <section id="solutions" className={styles.solutions}>
      <div className="container">
        <div className={styles.header}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Ecosystem
          </motion.span>
          <motion.h2
            className={`section-title ${styles.headerCenter}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Complete Office Solutions Ecosystem
          </motion.h2>
          <motion.p
            className="section-subtitle"
            style={{ margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Everything your enterprise needs to operate at peak efficiency,
            sourced from one trusted partner.
          </motion.p>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                className={styles.card}
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <div className={styles.iconWrap}>
                  <Icon size={24} />
                </div>
                <h3 className={styles.cardTitle}>{sol.title}</h3>
                <p className={styles.cardDesc}>{sol.desc}</p>
                <span className={styles.cardLink}>
                  Learn more →
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
