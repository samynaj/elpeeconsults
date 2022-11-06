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
                <div data-aos="zoom-out-down" data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000" className={styles.logo}>
                    <Image src='/assets/logo-icon.png' alt='' width={60} height={60} />
                    <p>Emwesto</p>

                </div>
                <div data-aos="zoom-out-left" data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000" className={styles.nav}>
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