import { useEffect } from "react";
import React from "react";
import styles from "./index.module.scss";
import Typewriter from "typewriter-effect";
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
      <div className={styles.opaq}></div>
      <div
        data-aos="zoom-in-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        className={styles.type}
      >
        <img src="/assets/sep-line-white.png" alt="" width="600px" height={8} />
        <Typewriter
          options={{
            strings: [
              "Training",
              "Strategy",
              "Human Capacity Development",
              "Team Enhancement",
              "Customer Excellence",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <img src="/assets/sep-line-white.png" alt="" width="600px" height={8} />
      </div>
      <p
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        Empowering organizations through tailored transformation solutions
      </p>
      <button
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        onClick={() => router.push("/#services")}
      >
        View all services
      </button>
    </div>
  );
};

export default Index;
