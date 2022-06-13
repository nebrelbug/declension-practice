import { PageLayout } from '../components/layout';

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
    <PageLayout
      title="Export Czech Declensions"
      suffix="Export Czech Declensions"
      center={false}
    >
      {arrayLoop(res)}
    </PageLayout>
  );
}
