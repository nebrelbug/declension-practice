import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Decline</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/">Decline</Link>
        </h1>

        <p className={styles.description}>
          Your tool to practice Czech and Slovak declension patterns
        </p>

        <div className={styles.grid}>
          <Link href="/czech">
            <a className={styles.card}>
              <h3>Czech &rarr;</h3>
              <p>Practice Czech declensions</p>
            </a>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Slovak &rarr;</h3>
            <p>Practice Slovak declensions</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Created with&nbsp;<b>next.new</b>&nbsp;by Ben Gubler
      </footer>
    </div>
  );
}
