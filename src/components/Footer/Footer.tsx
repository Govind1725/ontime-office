'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  MessageCircle,
  Play,
  Mail,
  ArrowRight,
} from 'lucide-react';
import styles from './Footer.module.css';

const solutions = [
  { label: 'Office Stationery', href: '#solutions' },
  { label: 'IT Accessories', href: '#solutions' },
  { label: 'Office Furniture', href: '#solutions' },
  { label: 'Printing Solutions', href: '#solutions' },
  { label: 'Security Systems', href: '#solutions' },
];

const company = [
  { label: 'About Us', href: '#about' },
  { label: 'Careers', href: '#' },
  { label: 'Our Partners', href: '#brands' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src="/images/logo.png" alt="Ontime Office Solutions" className={styles.logoImg} />
            </div>
            <p className={styles.brandDesc}>
              India&apos;s trusted enterprise office solutions provider.
              Delivering excellence to 500+ corporate clients across 50+ cities.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <Globe size={16} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <MessageCircle size={16} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <Play size={16} />
              </a>
              <a href="mailto:enterprise@ontimeoffice.in" className={styles.socialLink} aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className={styles.columnTitle}>Solutions</h4>
            <div className={styles.columnLinks}>
              {solutions.map((link) => (
                <a key={link.label} href={link.href} className={styles.columnLink}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={styles.columnTitle}>Company</h4>
            <div className={styles.columnLinks}>
              {company.map((link) => (
                <a key={link.label} href={link.href} className={styles.columnLink}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={styles.columnTitle}>Newsletter</h4>
            <div className={styles.newsletter}>
              <p className={styles.newsletterDesc}>
                Get enterprise offers, product launches, and tips delivered to
                your inbox.
              </p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  className={styles.newsletterInput}
                  placeholder="your@email.com"
                />
                <button className={styles.newsletterBtn}>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            &copy; {new Date().getFullYear()} Ontime Office Solutions Pvt. Ltd.
            All rights reserved.
          </span>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
            <a href="#" className={styles.legalLink}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
