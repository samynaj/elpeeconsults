import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emwesto</title>
        <meta name="description" content="Global Service Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
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
        <Footer />
      </main>
    </div>
  )
}
