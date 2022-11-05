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
            <Image src="/assets/sep-line-white.png" alt="" width='600px' height={8} />
            <div  data-aos="flip-down" className={styles.type} >
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
            </div>
            <Image src="/assets/sep-line-white.png" alt="" width='600px' height={8} />
            <p>Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum.</p>
            <button>View all services</button>
        </div>
    )
}

export default Index