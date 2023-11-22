import React from "react";
import styles from "./index.module.scss";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

const Index = () => {
  return (
    <div className={styles.root}>
      <div className={styles.left}>2023 © Copyrights Elpee Consults</div>
      <div className={styles.center}>
        <span>Contact us</span>
        <span>Disclaimer</span>
        <span>Terms & conditions</span>
      </div>
      <div className={styles.right}>
        <Link
          href="https://www.linkedin.com/company/elpee-consults-ltd/"
          target="_blank"
        >
          <FaLinkedinIn className={styles.icon} />
        </Link>
        <Link href="https://twitter.com/" target="_blank">
          <FaTwitter className={styles.icon} />
        </Link>
        <Link
          href="https://instagram.com/elpee_consults?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
        >
          <FaInstagram className={styles.icon} />
        </Link>
      </div>
    </div>
  );
};

export default Index;
