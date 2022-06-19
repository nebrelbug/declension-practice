import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const BrowserComponent = dynamic(() => import('./browser-component'), {
  ssr: false,
});

export function PageLayout({ children, title, suffix, center }) {
  return (
    <div className="min-h-screen flex flex-col px-2" id="root">
      <Head>
        <title>{title}</title>
        <script src="node_modules/eruda/eruda.js"></script>
        <script>eruda.init();</script>
      </Head>

      <h1 className="m-0 leading-normal text-3xl font-bold">
        <Link href="/">
          <a className="text-schnazzy-blue hover:underline">Decline</a>
        </Link>
        {' | ' + suffix}
      </h1>

      <main
        className={`flex flex-col flex-1 ${
          center ? 'items-center' : ''
        } py-20 w-full`}
      >
        <BrowserComponent>{children}</BrowserComponent>
      </main>
    </div>
  );
}
