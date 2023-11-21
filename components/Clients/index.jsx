import { useEffect } from "react";
import styles from "./index.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { SlLocationPin, SlEarphones, SlClock } from "react-icons/sl";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from "next/image";

const Index = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="client" className={styles.root}>
      <h2
        data-aos="flip-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        Our Clients
      </h2>
      <div className={styles.red}>
        <div></div>
      </div>
      <div className={styles.container}>
        <div
          data-aos="zoom-out-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Image src="/assets/client1.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Image src="/assets/client2.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Image src="/assets/client3.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Image src="/assets/client4.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Image src="/assets/client5.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Image src="/assets/client6.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Image src="/assets/client7.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Image src="/assets/client8.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Image src="/assets/client9.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Image src="/assets/client10.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Image src="/assets/client11.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Image src="/assets/client12.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Image src="/assets/client13.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Image src="/assets/client14.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Image src="/assets/client15.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Image src="/assets/client16.png" alt="" width={100} height={80} />
        </div>
      </div>
    </div>
  );
};

export default Index;
