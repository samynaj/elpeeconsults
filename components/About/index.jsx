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
        >Emwesto specializes in providing complete solutions including consulting, design, fabrication and erection of high-quality pre-engineered steel building and steel structure products. We provide customers with full steel structures such as factories, warehouses, high-rise building, heavy industry, shopping mall, exhibition centers, infrastructure (railway stations, airports…). </p>
        <button
          data-aos='flip-right'
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >Read more</button>
      </div>
    </div>
  )
}

export default Index