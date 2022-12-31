import { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Services from '../components/Services'
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
            <Services />
            <Projects />
            <Contact />
          </div>
        </Layout>
      </main>
    </div >
  )
}
