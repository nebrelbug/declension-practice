import Head from 'next/head';
import Link from 'next/link';

import { generateSimpleSentences } from '../src/sentence-generators';

let res = generateSimpleSentences();

function arrayLoop(arr) {
  return (
    <>
      {Object.keys(arr).map((i) => (
        <p>{arr[i]}</p>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Decline | Czech</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">Decline</Link>
        </h1>

        <p className={styles.description}>Practice Czech declension patterns</p>

        <div className={styles.grid}>{arrayLoop(res)}</div>
      </main>

      {/* <footer className={styles.footer}>
        Created with&nbsp;<b>next.new</b>&nbsp;by Ben Gubler
      </footer> */}
    </div>
  );
}
