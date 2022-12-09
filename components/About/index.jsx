import { useEffect } from 'react'
import styles from './index.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from 'next/router';


const Index = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const router = useRouter()
  return (
    <div className={styles.root}>
      <div
        data-aos="flip-left" 
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" 
        className={styles.left}
      >
        <h2
          data-aos='flip-left'
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >About Us</h2>
        <span></span>
        <p>WE ARE THE LEADERS IN THE CONSTRUCTION INDUSTRY!</p>
      </div>
      <div
        className={styles.right}
      >
        <p
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >We take pride in our products and our services, and we are dedicated to meeting the needs of our customers. With our extensive selection of construction and general merchandise, we are sure to have exactly what you need. </p>
        <button
          data-aos='flip-right'
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          onClick={() => router.push('/about')}
        >Read more</button>
      </div>
    </div>
  )
}

export default Index