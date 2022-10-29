import React from 'react'
import styles from './index.module.scss'
import {FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram} from 'react-icons/fa'

const Index = () => {
  return (
    <div className={styles.root}>
        <div className={styles.left}>2022 © Copyrights Emwesto</div>
        <div className={styles.center}>
            <span>Contact us</span>
            <span>Disclaimer</span>
            <span>Terms & conditions</span>
        </div>
        <div className={styles.right}>
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaInstagram />
        </div>
    </div>
  )
}

export default Index