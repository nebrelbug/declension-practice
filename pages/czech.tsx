import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { generateSimpleSentences } from '../src/czech/sentence-generators';
import { Leva, useControls, folder } from 'leva';
import { PageLayout } from '../components/layout';
import { Quiz } from '../components/quiz';
import { shuffle } from '../src/utilities';

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

  {
    /* <Leva
        // collapsed
        hideCopyButton
        titleBar={{ title: 'Config', filter: false }}
      ></Leva> */
  }

  return (
    <PageLayout title="Decline Czech" suffix="Czech Quiz" center>
      <Quiz arrayOfPairs={shuffle(res)} />
    </PageLayout>
  );
}
