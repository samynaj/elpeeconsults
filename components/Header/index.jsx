import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';

const Index = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        setOpen(open)
    }, [open]);


    return (
        <div className={styles.root}>
            <div className={styles.navbar}>
                <Link href='/' >
                    <div
                        data-aos="zoom-out-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000"
                        className={styles.logo}
                    >
                        <Image src='/assets/logo-icon.png' alt='' width={60} height={60} />
                        <p>Emwesto</p>

                    </div>
                </Link>
                <div
                    data-aos="zoom-out-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                    className={`${styles.nav} ${open? styles.show : styles.hide}`}
                >
                    <Link href='/'>
                        <span>Home</span>
                    </Link>
                    <Link href='/about'>
                        <span>About</span>
                    </Link>
                    <Link href='/#services'>
                        <span>Services</span>
                    </Link>
                    <Link href='/projects'>
                        <span>Projects</span>
                    </Link>
                    <Link href='/#contact'>
                        <span>Contacts</span>
                    </Link>
                </div>
                <div className={styles.hamburgerBtn}>
                    <button
                        className={`hamburger hamburger--emphatic ${open? 'is-active' : ''}`} aria-label='navigation button'
                        onClick={() => setOpen(!open)}
                        type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Index