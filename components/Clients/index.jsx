import { useEffect } from "react";
import styles from "./index.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

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
        Collaborations
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
          <img src="/assets/client1.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img src="/assets/client2.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img src="/assets/client3.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img src="/assets/client4.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img src="/assets/client5.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img src="/assets/client6.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img src="/assets/client7.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img src="/assets/client8.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img src="/assets/client9.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img src="/assets/client10.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img src="/assets/client11.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img src="/assets/client12.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img src="/assets/client13.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img src="/assets/client14.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img src="/assets/client15.png" alt="" width={100} height={80} />
        </div>
        <div
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <img src="/assets/client16.png" alt="" width={100} height={80} />
        </div>
      </div>
    </div>
  );
};

export default Index;
