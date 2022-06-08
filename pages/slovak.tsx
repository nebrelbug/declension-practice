import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/quiz.module.css';
import { useState } from 'react';
import { generateSimpleSentences } from '../src/sentence-generators';
import { useControls, Leva } from 'leva';

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
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const config = useControls(
    'Spring',
    {
      A: { value: 0, min: 0, max: 1 },
      mass: { value: 1, min: 1, max: 10 },
      tension: { value: 170, min: 1, max: 200 },
      friction: { value: 26, min: 1, max: 30 },
    },
    { collapsed: true }
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Decline | Slovak</title>
      </Head>

      <Leva titleBar={false}></Leva>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">Decline</Link> Slovak
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
