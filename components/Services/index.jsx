import React from 'react'
import styles from './index.module.scss'

const Index = () => {
    return (
        <div id='services' className={styles.services}>
            <div className={styles.top}>
                <h2>Our Services</h2>
                <div></div>
                <p>Get an overview of what we do</p>
            </div>
            <div className={styles.core}>
                <div
                    data-aos="zoom-in-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className={styles.center}>
                    <h3>General Merchandise</h3>
                    <span></span>
                    <p>We handle supply of general merchandize and all kinds of wholesale goods and items for our customers.</p>
                </div>
                <div
                    data-aos="zoom-in-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className={styles.left}>
                    <h3>Constructions</h3>
                    <span></span>
                    <p>This is our core function as an organization. We can handle all your building construction projects and also building material supply.</p>
                </div>
                <div
                    data-aos="zoom-in-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className={styles.right}>
                    <h3>Supply of Hardwares and Softwares</h3>
                    <span></span>
                    <p>We also handle supply of hardwares and softwares to government parastatals, private organizations, security agencies etc. </p>
                </div>
            </div>
            <div className={styles.core1}>
                <div
                    data-aos="zoom-in-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className={styles.left}>
                    <h3>RENOVATION BUILDINGS</h3>
                    <span></span>
                    <p>Want to renovate or refurbish your building, you can get in touch and we will handle it for you.</p>
                </div>
                <div
                    data-aos="zoom-in-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className={styles.center}>
                    <h3>DESIGN AND BUILDING</h3>
                    <span></span>
                    <p>We can handle your building projects from the design stage up to completion, ensuring we capture your taste and budget.</p>
                </div>
                <div
                    data-aos="zoom-in-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className={styles.right}>
                    <h3>PAINTING AND ROOFING</h3>
                    <span></span>
                    <p>We can also supply you with best quality roofing sheets and paintings for your building project.</p>
                </div>
            </div>
        </div>
    )
}

export default Index