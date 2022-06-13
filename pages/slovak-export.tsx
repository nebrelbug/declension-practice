import { PageLayout } from '../components/layout';

import { generateSimpleSentences } from '../src/slovak/sentence-generators';

let res = generateSimpleSentences();

function arrayLoop(arr) {
  return (
    <>
      {Object.keys(arr).map((i) => (
        <p>{arr[i][0] + ' - ' + arr[i][1]}</p>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <PageLayout
      title="Export Slovak Declensions"
      suffix="Export Slovak Declensions"
      center={false}
    >
      {arrayLoop(res)}
    </PageLayout>
  );
}
