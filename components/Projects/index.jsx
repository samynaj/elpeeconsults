import Image from 'next/image'
import React from 'react'
import styles from './index.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCube, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const Index = () => {
    return (
        <div id='projects' className={styles.root}>
            <div className={styles.bg}>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <h2 data-aos='flip-left'
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="3000">Our Projects</h2>
                        <div></div>
                        <p>Get an overview of some of our current projects</p>
                    </div>
                    <div data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className={styles.right}>
                        <Swiper
                            style={{ zIndex: 0 }}
                            // breakpoints={{
                            //     // when window width is >= 640px
                            //     640: {
                            //         width: 640,
                            //         slidesPerView: 1,
                            //     },
                            //     // when window width is >= 768px
                            //     768: {
                            //         width: 768,
                            //         slidesPerView: 2,
                            //     },
                            //     1260: {
                            //         width: 1260,
                            //         slidesPerView: 3,
                            //     },
                            // }}
                            // spaceBetween={0}
                            effect={"cube"}
                            grabCursor={true}
                            cubeEffect={{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={true}
                            modules={[Navigation, EffectCube, Autoplay]}
                            className={styles.swiper_container}
                        >
                            <SwiperSlide><img src="/assets/pro5 (1).jpeg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img src="/assets/pro5 (4).jpeg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/assets/pro5 (13).jpeg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/assets/pro5 (10).jpeg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/assets/pro5 (14).jpeg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/assets/pro5 (2).jpeg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/assets/pro5 (11).jpeg" alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index