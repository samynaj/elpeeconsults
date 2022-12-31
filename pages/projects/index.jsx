import React from 'react'
import styles from './index.module.scss'
import Layout from '../../components/layout'

const Index = () => {
    return (
        <Layout>

        <div id='projects' className={styles.root}>
            <div className={styles.top}>
                <h2>Our Projects</h2>
                <div></div>
                <p>Get an overview of some of our current projects</p>
            </div>
            <div className={styles.projects}>
                <div className={styles.topP}>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className={styles.size2}> <img src="/assets/pro1.png" alt="" /></div>
                    <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className={styles.size1}> <img src="/assets/pro2.png" alt="" /></div>
                </div>
                <div className={styles.center}>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className={styles.size1}> <img src="/assets/pro3.png" alt="" /></div>
                    <div data-aos="flip-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className={styles.size1}> <img src="/assets/pro4.png" alt="" /></div>
                    <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className={styles.size1}> <img src="/assets/pro1.png" alt="" /></div>
                </div>
                <div className={styles.bottom}>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className={styles.size1}> <img src="/assets/pro2.png" alt="" /></div>
                    <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className={styles.size2}> <img src="/assets/pro3.png" alt="" /></div>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default Index