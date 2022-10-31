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
        </Layout>
      </main>
    </div>
  )
}
