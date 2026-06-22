'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
} from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactBg} />
      <div className="container">
        <motion.span
          className={`section-label ${styles.headerLabel}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.span>
        <motion.h2
          className={`section-title ${styles.headerTitle}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Let&apos;s Discuss Your Enterprise Needs
        </motion.h2>
        <motion.p
          className={`section-subtitle ${styles.headerSubtitle}`}
          style={{ marginBottom: 'var(--space-3xl)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Fill out the form or reach out directly — we respond within 2 hours.
        </motion.p>

        <div className={styles.grid}>
          <motion.div
            className={styles.form}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Full Name</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Your name"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Company</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Company name"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Phone</label>
                <input
                  type="tel"
                  className={styles.input}
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Message</label>
              <textarea
                className={styles.textarea}
                placeholder="Tell us about your requirements..."
              />
            </div>
            <button className={styles.submitBtn}>
              <Send size={16} />
              Send Message
            </button>
          </motion.div>

          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <MapPin size={20} />
              </div>
              <div>
                <div className={styles.infoTitle}>Office Address</div>
                <div className={styles.infoText}>
                  Ontime Office Solutions Pvt. Ltd.<br />
                  Bangalore, Karnataka, India
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Phone size={20} />
              </div>
              <div>
                <div className={styles.infoTitle}>Phone</div>
                <div className={styles.infoText}>
                  +91 1800-123-ONTIME<br />
                  +91 98765 43210
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Mail size={20} />
              </div>
              <div>
                <div className={styles.infoTitle}>Email</div>
                <div className={styles.infoText}>
                  enterprise@ontimeoffice.in<br />
                  support@ontimeoffice.in
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Clock size={20} />
              </div>
              <div>
                <div className={styles.infoTitle}>Business Hours</div>
                <div className={styles.infoText}>
                  Mon – Sat: 9:00 AM – 7:00 PM<br />
                  Sunday: Closed
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

            <div className={styles.mapPlaceholder}>
              Interactive Map — Bangalore, India
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
