import React from "react";
import styles from "./index.module.scss";

const Index = () => {
  return (
    <div id="services" className={styles.services}>
      <div className={styles.top}>
        <h2>Our Services</h2>
        <div></div>
        <p>Get an overview of what we do</p>
      </div>
      <div className={styles.core}>
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={styles.center}
        >
          <div className={styles.opaq}></div>
          <h3>HUMAN CAPACITY DEVELOPMENT</h3>
          <span></span>
          <p>
            Invest in the growth and development of your employees, unlocking
            their full potential and fostering a high-performance culture.
          </p>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={styles.left}
        >
          <div className={styles.opaq}></div>
          <h3>STRATEGY</h3>
          <span></span>
          <p>
            Develop effective strategies to optimize business performance, drive
            growth, and stay ahead of the competition.
          </p>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={styles.right}
        >
          <div className={styles.opaq}></div>
          <h3>TRAINING</h3>
          <span></span>
          <p>
            Equip your workforce with the knowledge and skills necessary to
            excel in today&apos;s competitive business landscape.
          </p>
        </div>
      </div>
      <div className={styles.core1}>
        <div
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={styles.left}
        >
          <div className={styles.opaq}></div>
          <h3>TEAM ENHANCEMENT</h3>
          <span></span>
          <p>
            Strengthen team dynamics, improve collaboration, and foster a
            positive work environment for enhanced productivity.
          </p>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={styles.center}
        >
          <div className={styles.opaq}></div>
          <h3>CUSTOMER EXCELLENCE</h3>
          <span></span>
          <p>
            Elevate your customer experience with our tailored strategies,
            ensuring customer satisfaction and loyalty.
          </p>
        </div>
        {/* <div
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={styles.right}
        >
          <h3>PAINTING AND ROOFING</h3>
          <span></span>
          <p>
            We can also supply you with best quality roofing sheets and
            paintings for your building project.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Index;
