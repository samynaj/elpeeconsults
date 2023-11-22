import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Index = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setOpen(open);
  }, [open]);

  return (
    <div className={styles.root}>
      <div className={styles.navbar}>
        <Link href="/">
          <div
            data-aos="zoom-out-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            className={styles.logo}
          >
            <img src="/assets/unnamed.png" alt="" width={180} height={80} />
            {/* <p>Elpeeconsults</p> */}
          </div>
        </Link>
        <div
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className={`${styles.nav} ${open ? styles.show : styles.hide}`}
        >
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/about">
            <span>About</span>
          </Link>
          <Link href="/#services">
            <span>Services</span>
          </Link>
          <Link href="/#team">
            <span>Our Team</span>
          </Link>
          <Link href="/#contact">
            <span>Contacts</span>
          </Link>
        </div>
        <div className={styles.hamburgerBtn}>
          <button
            className={`hamburger hamburger--emphatic ${
              open ? "is-active" : ""
            }`}
            aria-label="navigation button"
            onClick={() => setOpen(!open)}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
