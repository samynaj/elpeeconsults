import { useEffect } from 'react'
import Image from 'next/image'
import React, { useRef } from 'react'
import styles from './index.module.scss'
import Typewriter from 'typewriter-effect';
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className={styles.root}>
            <div
                data-aos="zoom-in-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
                className={styles.type}
            >
                <Image src="/assets/sep-line-white.png" alt="" width='600px' height={8} />
                <Typewriter
                    options={{
                        strings: ['Construction',
                            'Architecture',
                            'General Merchant',
                            'Supply of Hardwares',
                            '& Softwares.'
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
                <Image src="/assets/sep-line-white.png" alt="" width='600px' height={8} />
            </div>
            <p
                data-aos='fade-up'
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
            >Commitment to meeting our customers satisfaction: quality, timely schedule, safety; accompanied with our partners to success in order to obtain trust adn a long term partnership </p>
            <button data-aos='flip-right' data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">View all services</button>
        </div>
    )
}

export default Index