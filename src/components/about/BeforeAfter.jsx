import React from "react";
import styles from "./BeforeAfter.module.css";

const steps = [
  { img: "/src/assets/trans1.jpg",},
  { img: "/src/assets/trans2.jpg", },
  { img: "/src/assets/trans3.jpg" },
  { img: "/src/assets/trans4.jpg",  },
  { img: "/src/assets/trans5.jpg",  },
];

export default function BeforeAfter() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.badge}>Journey & Results</span>
        <h2 className={styles.title}>
          Before ➜ After <span className={styles.gradient}>Evolution</span>
        </h2>
        <p className={styles.subtext}>
          A clear progression — see how each stage evolves into the final polished output.
        </p>
      </div>

      <div className={styles.timeline}>
        {steps.map((step, i) => (
          <div className={styles.card} key={i}>
            <img src={step.img} className={styles.image} alt={step.label} />
            <p className={styles.label}>{step.label}</p>
            {/* {i !== steps.length - 1 && <div className={styles.line}></div>} */}
          </div>
        ))}
      </div>
    </section>
  );
}
