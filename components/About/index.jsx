import { useEffect } from 'react'
import styles from './index.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";


const Index = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className={styles.root}>
      <div data-aos="fade-down-right" className={styles.left}>
        <h2>About Us</h2>
        <span></span>
        <p>WE ARE THE LEADERS IN THE CONSTRUCTION INDUSTRY!</p>
      </div>
      <div data-aos="fade-down-left" className={styles.right}>
        <p>Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat.</p>
        <button>Read more</button>
      </div>
    </div>
  )
}

export default Index