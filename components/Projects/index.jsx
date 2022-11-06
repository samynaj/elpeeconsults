import Image from 'next/image'
import React from 'react'
import styles from './index.module.scss'

const Index = () => {
    return (
        <div className={styles.root}>
            <div className={styles.top}>
                <h2>Our Projects</h2>
                <div></div>
                <p>Get an overview of what we do and some of our current projects</p>
            </div>
            <div className={styles.projects}>
                <div className={styles.topP}>
                    <div className={styles.size2}> <img src="/assets/pro1.png" alt="" /></div>
                    <div className={styles.size1}> <img src="/assets/pro2.png" alt="" /></div>
                </div>
                <div className={styles.center}>
                    <div className={styles.size1}> <img src="/assets/pro3.png" alt="" /></div>
                    <div className={styles.size1}> <img src="/assets/pro4.png" alt="" /></div>
                    <div className={styles.size1}> <img src="/assets/pro1.png" alt="" /></div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.size1}> <img src="/assets/pro2.png" alt="" /></div>
                    <div className={styles.size2}> <img src="/assets/pro3.png" alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Index