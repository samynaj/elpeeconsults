import { useEffect } from "react";
import styles from "./index.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { SlLocationPin, SlEarphones, SlClock } from "react-icons/sl";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

const Index = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="contact" className={styles.root}>
      <h2
        data-aos="flip-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        Contact Us
      </h2>
      <div className={styles.container}>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={styles.left}
        >
          <SlLocationPin size={40} color="red" />
          <div className={styles.desc}>
            <h5>WE ARE HERE</h5>
            <p>2nd floor, ULO Building, Wuse Zone 5, Abuja.</p>
            {/* <p>Abeken str 5 49082 Osnabrück, Germany.</p> */}
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={styles.center}
        >
          <SlEarphones size={40} color="red" />
          <div className={styles.desc}>
            <h5>CALL US</h5>
            <div>
              <p>Phone: +2348155572626</p>
              <p>Mobile: +2348099226221</p>
              {/* <p>Fax: +2348133997250</p> */}
            </div>
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={styles.right}
        >
          <SlClock size={40} color="red" />
          <div className={styles.desc}>
            <h5>WORKING HOURS</h5>
            <div>
              <p>Monday-Friday: 08:00AM - 05:00PM</p>
              <p>Saturday: 10:00AM - 02:00PM</p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className={styles.connect}
      >
        <div className={styles.top}>
          <h3>GET CONNECTED</h3>
          <hr />
          <p>
            You can also send us a message on any of our social media handles
            below.
          </p>
        </div>
        <div className={styles.socials}>
          <Link href="https://facebook.com/" target="_blank">
            <MdFacebook className={styles.icon} size={30} />
          </Link>
          <Link href="https://facebook.com/" target="_blank">
            <AiFillTwitterCircle className={styles.icon} size={30} />
          </Link>
          <Link
            href="https://instagram.com/elpee_consults?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
          >
            <AiFillInstagram className={styles.icon} size={30} />
          </Link>
          <Link href="https://facebook.com/" target="_blank">
            <IoLogoWhatsapp className={styles.icon} size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
