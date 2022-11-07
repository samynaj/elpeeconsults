import { useEffect } from 'react'
import styles from './index.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import { SlLocationPin, SlEarphones, SlClock } from 'react-icons/sl'
import { MdFacebook } from 'react-icons/md'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'

const Index = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div id='contact' className={styles.root}>
            <h2 data-aos='flip-down' data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">Contact Us</h2>
            <div className={styles.container}>
                <div data-aos='flip-left' data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className={styles.left}>
                    <SlLocationPin size={40} color="orange" />
                    <div className={styles.desc}>
                        <h5>WE ARE HERE</h5>
                        <p>908 New Hampshire Avenue
                            Northwest #100, Washington, DC
                            20037, United States</p>
                    </div>
                </div>
                <div data-aos='flip-up' data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className={styles.center}>
                    <SlEarphones size={40} color="orange" />
                    <div className={styles.desc}>
                        <h5>CALL US</h5>
                        <div>
                            <p>Phone: +23486000000</p>
                            <p>Mobile: +23486000000</p>
                            <p>Fax: +23486000000</p>
                        </div>
                    </div>
                </div>
                <div data-aos='flip-right' data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className={styles.right}>
                    <SlClock size={40} color="orange" />
                    <div className={styles.desc}>
                        <h5>WORKING HOURS</h5>
                        <div>
                            <p>Monday-Friday: 09:00AM - 05:00PM</p>
                            <p>Saturday: 10:00AM - 03:00PM</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className={styles.connect}>
                <div className={styles.top}>
                    <h3>GET CONNECTED</h3>
                    <hr />
                    <p>You can also send us a message on any of our social media handles below.</p>
                </div>
                <div className={styles.socials}>
                    <MdFacebook className={styles.icon} size={30} />
                    <AiFillTwitterCircle className={styles.icon} size={30} />
                    <AiFillInstagram className={styles.icon} size={30} />
                    <IoLogoWhatsapp className={styles.icon} size={30} />
                </div>
            </div>
        </div>
    )
}

export default Index