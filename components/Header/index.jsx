import React from 'react'
import styles from './index.module.scss'

const Index = () => {
    return (
        <div className={styles.root}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    Emwesto
                </div>
                <div className={styles.nav}>
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