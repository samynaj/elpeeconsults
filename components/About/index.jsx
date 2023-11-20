import { useEffect } from "react";
import styles from "./index.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";

const Index = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const router = useRouter();
  return (
    <div className={styles.root}>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className={styles.left}
      >
        <h2
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          About Us
        </h2>
        <span></span>
        <p>
          we elevate your success by surpassing goals and setting new standards
          in the dynamic business landscape.
        </p>
      </div>
      <div className={styles.right}>
        <p
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          We are a business transformation and human capital development firm,
          delivering professional and dedicated training and turnaround
          consulting services to both private and public organizations.
        </p>
        {/* <p
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          At the core of our mission is a deep-seated belief in the pivotal role
          of people as a fundamental investment in every institution. We are
          resolute in our commitment to adding substantial value to these
          esteemed institutions through targeted interventions in staff
          development, idea generation, process definition, and strategic
          planning. Our ultimate aim is to facilitate favorable results that
          propel organizational growth.
        </p> */}
        <button
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          onClick={() => router.push("/about")}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default Index;
