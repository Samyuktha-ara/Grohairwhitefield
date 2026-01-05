import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

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
              title="clinic-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.4985790124797!2d77.74722017507636!3d12.967532887347513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0daa11099d79%3A0x476a129c832a9592!2sAdvanced%20GroHair%20%26%20GloSkin%20-%20Whitefield%20-%20Leading%20Hair%20and%20Skin%20Clinic!5e1!3m2!1sen!2sin!4v1767072242399!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            ></iframe>
          </div>

          <div className={styles.contactInfoGrid}>
            <div className={styles.infoBox}>
              <span className={styles.iconWrap}>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <p className={styles.infoTitle}>Phone</p>
              <p className={styles.infoValue}>+9108270556789</p>
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
                11/3, 1st Floor, ELV Amoris, VASWANI PINNACLE, Whitefield Main
                Rd, opposite Borewell Road, Narayanappa Garden, Landmark:Behind,
                Bengaluru, Karnataka 560066
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
