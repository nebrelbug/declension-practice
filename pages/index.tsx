import Head from 'next/head';
import Link from 'next/link';

function Card({ title, description, link }) {
  return (
    <Link href={link}>
      <a className="m-4 p-6 text-left text-inherit no-underline border border-solid border-[#eaeaea] rounded-xl hover:ease-in hover:text-schnazzy-blue hover:border-schnazzy-blue">
        <h3 className="font-bold mb-4 text-2xl">{title + ' '}&rarr;</h3>
        <p className="m-0 text-lg">{description}</p>
      </a>
    </Link>
  );
}

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-2"
      id="root"
    >
      <Head>
        <title>Decline</title>
      </Head>

      <main className="flex flex-col flex-1 justify-center items-center py-20">
        <h1 className="m-0 leading-tight text-6xl text-center font-bold pb-4">
          Welcome to <span className="text-schnazzy-blue">Decline</span>
        </h1>

        <p className="text-center text-2xl mt-3">
          Your tool to practice Czech and Slovak declension patterns
        </p>

        <div className="grid gap-4 grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 mt-12">
          <Card
            title="Czech"
            description="Practice Czech declensions in quiz form"
            link="/czech"
          />
          <Card
            title="Slovak"
            description="Practice Slovak declensions in quiz form"
            link="/slovak"
          />
          <Card
            title="Czech - Export"
            description="Export Czech declensions to a list"
            link="/czech-export"
          />
          <Card
            title="Slovak - Export"
            description="Export Slovak declensions to a list"
            link="slovak-export"
          />
          {/* <Card
            title="Russian"
            description="Practice Russian declensions in quiz form"
            link="/russian"
          />
          <Card
            title="Russian - Export"
            description="Export Russian declensions to a list"
            link="/russian-export"
          /> */}
        </div>
      </main>

      <footer className="w-full h-24 flex justify-center items-center border border-solid border-[#eaeaea]">
        Created with&nbsp;<b>next.new</b>&nbsp;{/*by Ben Gubler*/}
      </footer>
    </div>
  );
}
