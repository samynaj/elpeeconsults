import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/About'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emwesto</title>
        <meta name="description" content="Global Service Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Layout>
          <Hero />
          <About />
          <div className={styles.core}>
            <div className={styles.left}>
              <h3>RENOVATION BUILDINGS</h3>
              <span></span>
              <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus.</p>
            </div>
            <div className={styles.center}>
              <h3>DESIGN AND BUILDING</h3>
              <span></span>
              <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus.</p>
            </div>
            <div className={styles.right}>
              <h3>PAINTING AND ROOFING</h3>
              <span></span>
              <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus.</p>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  )
}
