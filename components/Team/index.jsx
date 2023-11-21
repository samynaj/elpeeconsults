import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCube, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const Index = () => {
  return (
    <div id="team" className={styles.root}>
      <div className={styles.bg}>
        <div className={styles.top}>
          <h2
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            Our Core Team
          </h2>
          <div></div>
          <p>Get an overview of some of our core team members</p>
        </div>
        <div className={styles.content}>
          <div
            data-aos="fade-out"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className={styles.right}
          >
            <Swiper
              style={{ zIndex: 0 }}
              //   effect={"cube"}
              //   grabCursor={true}
              //   cubeEffect={{
              //     shadow: true,
              //     slideShadows: true,
              //     shadowOffset: 20,
              //     // shadowScale: 0.94,
              //   }}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              pagination={true}
              modules={[Navigation, Autoplay]}
              className={styles.swiper_container}
            >
              <SwiperSlide className={styles.contentFlex}>
                <img src="/assets/team1.png" alt="" />
                <div className={styles.text}>
                  <h5>Dr Lanre Phillips</h5>
                  <p>
                    Dr. Lanre Phillips is a visionary leader, boasting an
                    illustrious career spanning over 25 years across dynamic
                    industries such as FMCG, Banking, Telecommunications, and
                    Information Technology. Widely acclaimed for his strategic
                    acumen, Dr. Phillips is a mastermind in driving
                    organizational growth through the twin pillars of human
                    capacity development and flawless strategic implementation.
                  </p>
                  <p>
                    His impactful collaborations with NGOs and accelerators
                    across the African continent underscore his commitment to
                    operational excellence. A two-time TEDx speaker, Dr.
                    Phillips not only shares his insights but actively shapes
                    the discourse on leadership and innovation. As the
                    distinguished CEO/Principal Partner at Elpee Consults, he
                    continues to spearhead transformative initiatives, leaving
                    an indelible mark on the business landscape.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.contentFlex}>
                <img src="/assets/team2.png" alt="" />
                <div className={styles.text}>
                  <h5>JT Oshoke Abu</h5>
                  <p>
                    JT Oshoke is a Certified Human Resource Professional, a
                    Career Coach, a Corporate Trainer, and a Public Speaker. He
                    holds M.Ed in Administration and Planning as well as a B.Sc
                    in Education. He is an Associate Member of the Chartered
                    Institute of Personnel Management Nigeria, CIPM.
                  </p>
                  <p>
                    With over 15 years of progressive work experience, he has a
                    background in banking (Relationship Management & Customer
                    Service) from Bank PHB and ASO Savings and Loans Plc, Human
                    Resource Management in the International Development sector
                    as well as experience in Management and HR Consulting where
                    he has worked with numerous clienteles across sectors.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.contentFlex}>
                <img src="/assets/team3.png" alt="" />
                <div className={styles.text}>
                  <h5>Tare Okene SHRM-CP</h5>
                  <p>
                    Tare is a passionate and result-driven Human Resource
                    professional with a proven track record in aligning HR
                    strategy and operations with organizational goals. She has
                    collaborated extensively with line managers and employees to
                    drive HR priorities and operations.
                  </p>
                  <p>
                    She leverages her background in Sociology and Anthropology,
                    to bring a unique perspective to Human Resource practice,
                    enabling her to understand human behaviour and
                    organizational dynamics. Editha-Rose&apos;s years of
                    experience in Human Resources spans across; Consulting,
                    Renewable Energy, and Agricultural Supply Chain sectors
                    where she delivered exceptional value.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.contentFlex}>
                <img src="/assets/team4.png" alt="" />
                <div className={styles.text}>
                  <h5>David Olatunji</h5>
                  <p>
                    David Olatunji is a highly accomplished teacher, trainer,
                    and business leader with a proven track record of driving
                    growth through impactful training strategies. Recognized for
                    his self-motivation, passion, and strong problem-solving
                    skills, he has received intensive training in Belgium,
                    Germany, and the United Kingdom. David specializes in
                    repositioning companies by enhancing corporate culture,
                    leadership, and governance, offering services such as Board
                    Advisory, Governance Audits, Board Induction, Evaluation,
                    and Training on both local and global scales.
                  </p>
                  <p>
                    As a dedicated and proactive leader, David Olatunji&apos;s
                    expertise lies in developing and implementing high-impact
                    training strategies that elevate brand reputation, enhance
                    Board competence, and foster revenue growth. His
                    contributions extend to reshaping organizations through his
                    involvement in Board Advisory and Governance Audits, as well
                    as facilitating Board Induction, Evaluation, and Training
                    initiatives globally and locally.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
