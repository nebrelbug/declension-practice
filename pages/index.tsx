import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/home.module.css';

function Card({ title, description, link }) {
  return (
    <Link href={link}>
      <a className={styles.card}>
        <h3 className="font-bold">{title + ' '}&rarr;</h3>
        <p>{description}</p>
      </a>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-2">
      <Head>
        <title>Decline</title>
      </Head>

      <main className="flex flex-col flex-1 justify-center items-center py-20">
        <h1 className="m-0 leading-normal text-6xl text-center font-bold">
          Welcome to <span className="text-schnazzy-blue">Decline</span>
        </h1>

        <p className="text-center text-2xl">
          Your tool to practice Czech and Slovak declension patterns
        </p>

        <div className="grid gap-4 grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 mt-12">
          <Card
            title="Czech"
            description="Practice Czech declensions"
            link="/czech"
          />
          <Card
            title="Slovak"
            description="Practice Slovak declensions"
            link="/slovak"
          />
          <Card
            title="Czech - Export"
            description="Practice Czech declensions"
            link="/czech-export"
          />
          <Card
            title="Slovak - Export"
            description="Practice Czech declensions"
            link="slovak-export"
          />
        </div>
      </main>

      <footer className="w-full h-24 flex justify-center items-center border border-solid border-[#eaeaea]">
        Created with&nbsp;<b>next.new</b>&nbsp;by Ben Gubler
      </footer>
    </div>
  );
}
