import { useEffect } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className={styles.root}>
            <div className={styles.navbar}>
                <div data-aos="zoom-out-left" className={styles.logo}>
                    <Image src='/assets/logo.png' alt='' width={80} height={80} />
                </div>
                <div data-aos="zoom-out-right" className={styles.nav}>
                    <span>Home</span>
                    <span>About</span>
                    <span>Services</span>
                    <span>Projects</span>
                    <span>Contacts</span>
                </div>
            </div>
        </div>
    )
}

export default Index