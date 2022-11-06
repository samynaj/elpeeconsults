import { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Emwesto</title>
        <meta name="description" content="Global Service Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Layout>
          <div className={styles.body}>
            <Hero />
            <About />
            <div className={styles.core}>
              <div 
                // data-aos="zoom-out-left" 
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000" 
                className={styles.left}>
                <h3>RENOVATION BUILDINGS</h3>
                <span></span>
                <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus.</p>
              </div>
              <div 
                // data-aos="zoom-out-up" 
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000" 
                className={styles.center}>
                <h3>DESIGN AND BUILDING</h3>
                <span></span>
                <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus.</p>
              </div>
              <div 
                // data-aos="zoom-out-right" 
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000" 
                className={styles.right}>
                <h3>PAINTING AND ROOFING</h3>
                <span></span>
                <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus.</p>
              </div>
            </div>
            <Projects />
            <Contact />
          </div>
        </Layout>
      </main>
    </div>
  )
}
