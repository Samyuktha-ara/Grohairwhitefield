import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // later you can connect backend / emailjs etc
    alert("Form submitted! (you can handle this later)");
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3546.939232706588!2d79.136112!3d10.773315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab962ed07ae27%3A0x301c1c67f63e3b6c!2sAdvanced%20GroHair%20%26%20GloSkin%20-%20Thanjavur!5e1!3m2!1sen!2sin!4v1764052023250!5m2!1sen!2sin"
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
    <p className={styles.infoValue}>+918098756789</p>
  </div>

  <div className={styles.infoBox}>
    <span className={styles.iconWrap}>
      <FontAwesomeIcon icon={faEnvelope} />
    </span>
    <p className={styles.infoTitle}>Email</p>
    <p className={styles.infoValue}>grohairgloskintnj@gmail.com</p>
  </div>

  <div className={styles.infoBox}>
    <span className={styles.iconWrap}>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
    </span>
    <p className={styles.infoTitle}>Address</p>
    <p className={styles.infoValue}>3,1st Floor,Philomena Hotel and Apartment,Arulananda Nagar,Thanjavur,Tamil Nadu-613007</p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
