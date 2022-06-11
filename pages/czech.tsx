import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { generateSimpleSentences } from '../src/sentence-generators';
import { Leva, useControls, folder } from 'leva';

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
    'Settings',
    {
      Randomize: true,
      Phrases: folder({
        Plural: true,
        'Core Patterns': true,
        'Less Common Patterns': true,
        'Irregular Patterns': true,
        Gender: { options: ['All', 'Masculine', 'Feminine', 'Neuter'] },
        "'To'": true,
        Adjectives: true,
        Pronouns: true,
        'Possessive Pronouns': true,
        'Noun Possessives': true,
      }),
    },
    { collapsed: false }
  );

  const declensions = useControls(
    'Declensions',
    {
      '1': true,
      '2': true,
      '3': true,
      '4': true,
      '4 (motion)': true,
      '5': true,
      '6': true,
      '7': true,
    },
    { collapsed: true }
  );

  return (
    <div className="min-h-screen flex flex-col px-2">
      <Head>
        <title>Decline Czech</title>
      </Head>

      <h1 className="m-0 leading-normal text-3xl font-bold">
        <Link href="/">
          <a className="text-schnazzy-blue hover:underline">Decline</a>
        </Link>
        {' | Czech Quiz'}
      </h1>

      <Leva
        // collapsed
        hideCopyButton
        titleBar={{ title: 'Config', filter: false }}
      ></Leva>

      <main className="flex flex-col flex-1 justify-center items-center py-20">
        <h3 className="text-3xl mb-20">The small man</h3>

        <div className="mb-6 w-1/2">
          <input
            type="text"
            id="username-success"
            className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-lg rounded-lg focus:ring-green-500 focus:border-green-500 w-full p-2.5 "
            placeholder=""
          ></input>
          <p className="mt-2 text-sm text-green-600 dark:text-green-500 mb-20">
            <span className="font-medium">Correct!</span> Ten malý muž!
          </p>
          <input
            type="text"
            id="username-error"
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
            placeholder="Bonnie Green"
          ></input>
          <p className="mt-2 text-sm text-red-600 ">
            <span className="font-medium">Oops!</span> Username already taken!
          </p>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        Created with&nbsp;<b>next.new</b>&nbsp;by Ben Gubler
      </footer> */}
    </div>
  );
}
