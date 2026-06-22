'use client';

import { motion } from 'framer-motion';
import styles from './LogoWall.module.css';

const logos = [
  'Infosys', 'Zoho', 'Wipro', 'TCS', 'HCL',
  'Tech Mahindra', 'LTI', 'Mindtree', 'Persistent', 'Mphasis',
];

export default function LogoWall() {
  return (
    <section className={styles.wall}>
      <motion.p
        className={styles.label}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Trusted by enterprise teams
      </motion.p>
      <div className={styles.track}>
        {[...logos, ...logos].map((name, i) => (
          <div key={`${name}-${i}`} className={styles.logoItem}>
            <span className={styles.logoText}>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
