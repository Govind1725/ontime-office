'use client';

import { motion } from 'framer-motion';
import styles from './Brands.module.css';

const brands = [
  { name: 'HP', label: 'Printing & Computing' },
  { name: 'Dell', label: 'IT Infrastructure' },
  { name: 'Canon', label: 'Imaging Solutions' },
  { name: 'Logitech', label: 'Peripherals' },
  { name: 'Godrej', label: 'Furniture & Security' },
  { name: 'Avery', label: 'Labeling Solutions' },
  { name: '3M', label: 'Office Essentials' },
  { name: 'Epson', label: 'Printing Solutions' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

export default function Brands() {
  return (
    <section className={styles.brands}>
      <div className={styles.brandsBg} />
      <div className="container">
        <div className={styles.header}>
          <motion.span
            className="section-label"
            style={{ color: '#06B6D4' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Partners
          </motion.span>
          <motion.h2
            className={`section-title ${styles.headerTitle}`}
            style={{ margin: '0 auto var(--space-lg)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Premium Brands We Represent
          </motion.h2>
          <motion.p
            className={`section-subtitle ${styles.headerSubtitle}`}
            style={{ margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Authorized partners of the world&apos;s leading office and technology brands.
          </motion.p>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              className={styles.brandCard}
              variants={cardVariants}
            >
              <span className={styles.brandName}>{brand.name}</span>
              <span className={styles.brandLabel}>{brand.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
