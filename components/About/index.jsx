import React from 'react'
import styles from './index.module.scss'

const Index = () => {
  return (
    <div className={styles.root}>
        <div className={styles.left}>
            <h2>About Us</h2>
            <span></span>
            <p>WE ARE THE LEADERS IN THE CONSTRUCTION INDUSTRY!</p>
        </div>
        <div className={styles.right}>
            <p>Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat.</p>
            <button>Read more</button>
        </div>
    </div>
  )
}

export default Index