import { useState } from 'react';
import { generateSimpleSentences } from '../src/sentence-generators';
import { useControls, Leva } from 'leva';
import { PageLayout } from '../components/layout';
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
    <PageLayout title="Decline Slovak" suffix="Slovak Quiz" center>
      <Quiz
        arrayOfPairs={[
          ['hi', 'ahoj'],
          ['hola', 'čau'],
        ]}
      />
    </PageLayout>
  );
}
