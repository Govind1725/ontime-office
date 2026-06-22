'use client';

import { motion } from 'framer-motion';
import styles from './TechSolutions.module.css';

const solutionsList = [
  {
    img: '/images/av_solutions.png',
    title: 'AV SOLUTIONS',
    desc: 'Providing innovative audio-visual solutions tailored for business environments.',
  },
  {
    img: '/images/cloud_solutions.png',
    title: 'CLOUD SOLUTIONS',
    desc: 'Delivering scalable and secure cloud services to enhance performance, flexibility, and business growth.',
  },
  {
    img: '/images/it_disposal.png',
    title: 'IT ASSET DISPOSAL PLANS',
    desc: 'Ensuring secure and environmentally responsible disposal of IT assets.',
  },
  {
    img: '/images/it_infra.png',
    title: 'IT INFRASTRUCTURE SOLUTIONS',
    desc: 'Designing and implementing robust IT infrastructure to support business operations.',
  },
  {
    img: '/images/it_consulting.png',
    title: 'IT CONSULTING SERVICES',
    desc: 'Providing expert advice to align IT strategies with business objectives.',
  },
  {
    img: '/images/managed_it.png',
    title: 'MANAGED IT SERVICES',
    desc: 'Offering reliable comprehensive IT support and management services.',
  },
  {
    img: '/images/networking_sol.png',
    title: 'NETWORKING SOLUTIONS',
    desc: 'Providing networking solutions to ensure seamless connectivity and communication.',
  },
  {
    img: '/images/device_deployment.png',
    title: 'DEVICE DEPLOYMENT & MDM',
    desc: 'Managing the deployment of devices and implementing Mobile Device Management strategies.',
  },
  {
    img: '/images/hr_solutions.png',
    title: 'HR SOLUTIONS',
    desc: 'Expert HR Management Solutions to Recruit Smarter, Hire Better, and Grow Faster.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export default function TechSolutions() {
  return (
    <section id="tech-solutions" className={styles.techSolutions}>
      <div className="container">
        <div className={styles.header}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            OUR SOLUTIONS
          </motion.span>
          <motion.h2
            className={`section-title ${styles.headerCenter}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Empowering Businesses with Cutting-Edge IT Solutions
          </motion.h2>
          <motion.p
            className="section-subtitle"
            style={{ margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive technology services, secure network design, and expert IT advice tailored to accelerate your corporate success.
          </motion.p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {solutionsList.map((sol, index) => (
            <motion.div 
              key={sol.title} 
              className={styles.card}
              variants={cardVariants}
            >
              <div className={styles.imageWrap}>
                <img 
                  src={sol.img} 
                  alt={sol.title} 
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <h3 className={styles.cardTitle}>{sol.title}</h3>
              <p className={sol.title === 'CLOUD SOLUTIONS' ? `${styles.cardDesc} ${styles.cloudDesc}` : styles.cardDesc}>
                {sol.desc}
              </p>
              <a href="#contact" className={styles.cardBtn}>
                Read more
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
