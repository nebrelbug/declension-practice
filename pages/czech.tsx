import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { generateSimpleSentences } from '../src/sentence-generators';
import { Leva, useControls, folder } from 'leva';
import { Quiz } from '../components/quiz';

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
  // const config = useControls(
  //   'Settings',
  //   {
  //     Randomize: true,
  //     Phrases: folder({
  //       Plural: true,
  //       'Core Patterns': true,
  //       'Less Common Patterns': true,
  //       'Irregular Patterns': true,
  //       Gender: { options: ['All', 'Masculine', 'Feminine', 'Neuter'] },
  //       "'To'": true,
  //       Adjectives: true,
  //       Pronouns: true,
  //       'Possessive Pronouns': true,
  //       'Noun Possessives': true,
  //     }),
  //   },
  //   { collapsed: false }
  // );

  // const declensions = useControls(
  //   'Declensions',
  //   {
  //     '1': true,
  //     '2': true,
  //     '3': true,
  //     '4': true,
  //     '4 (motion)': true,
  //     '5': true,
  //     '6': true,
  //     '7': true,
  //   },
  //   { collapsed: true }
  // );

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

      {/* <Leva
        // collapsed
        hideCopyButton
        titleBar={{ title: 'Config', filter: false }}
      ></Leva> */}

      <main className="flex flex-col flex-1 items-center py-44 w-full">
        <Quiz
          arrayOfPairs={[
            ['hi', 'ahoj'],
            ['hola', 'čau'],
          ]}
        />
      </main>
    </div>
  );
}
