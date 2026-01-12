import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // later you can connect backend / emailjs etc
    alert("Form submitted!");
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        {/* Left: Form */}
        <div className={styles.formCard}>
          <h2 className={styles.heading}>Contact Us</h2>
          <p className={styles.subtext}>
            Book an appointment or ask us anything. We’ll get back to you soon.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Name */}
            <div className={styles.fieldGroup}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email & Phone in row */}
            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  required
                />
              </div>
            </div>

            {/* Date & Time in row */}
            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label htmlFor="date">Preferred Date</label>
                <input id="date" type="date" required />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="time">Preferred Time</label>
                <input id="time" type="time" required />
              </div>
            </div>

            {/* Treatment dropdown */}
            <div className={styles.fieldGroup}>
              <label htmlFor="treatment">Treatment</label>
              <select id="treatment" required>
                <option value="">Select treatment</option>
                <option value="hairtreatment">Hair Treatment</option>
                <option value="skintreatment">Skin Treatment</option>
              </select>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div>

        {/* Right: Map */}
        <div className={styles.mapCard}>
          <h3 className={styles.mapHeading}>Find Us</h3>
          <p className={styles.mapText}>We’re located here.</p>

          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.555196240993!2d79.54481187605182!3d11.621874213618868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54b1fa5f54e4c5%3A0x81b7ed99a77b9c06!2sAdvanced%20GroHair%20%26%20GloSkin%20-%20Neyveli!5e1!3m2!1sen!2sin!4v1767948294992!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            />
          </div>
        </div>
        <div className={styles.contactInfoGrid}>
          <div className={styles.infoBox}>
            <span className={styles.iconWrap}>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </span>
            <p className={styles.infoTitle}>Phone</p>
            <p className={styles.infoValue}>+9196375 56789</p>
          </div>

          <div className={styles.infoBox}>
            <span className={styles.iconWrap}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <p className={styles.infoTitle}>Email</p>
            <p className={styles.infoValue}>grohairgloskin@gmail.com</p>
          </div>

          <div className={styles.infoBox}>
            <span className={styles.iconWrap}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <p className={styles.infoTitle}>Address</p>
            <p className={styles.infoValue}>
              1st floor, No. 15/4 A1, Chennai-Kumbakonam Main Rd, near Suzuki
              Motorcycle, Ashok Nagar, Vadakuthu, Neyveli T.S, Tamil Nadu 607308
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
