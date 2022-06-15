import useLocalStorageState from 'use-local-storage-state';

import { generateSimpleSentences } from '../src/czech/sentence-generators';
import { PageLayout } from '../components/layout';
import { Quiz } from '../components/quiz';
import { shuffle } from '../src/utilities';
import { SettingsModal } from '../components/modal';

let res = generateSimpleSentences();

export default function Home() {
  const [declensions, setDeclensions] = useLocalStorageState(
    'czech-declensions',
    {
      defaultValue: {
        '1': true,
        '2': false,
        '3': true,
        '4': false,
        '4-M': true,
        '5': true,
        '6': true,
        '7': true,
      },
    }
  );

  const [settings, setSettings] = useLocalStorageState('czech-settings-new', {
    defaultValue: {
      plural: true,
      randomize: true,
      nounPatterns: { value: 'all', label: 'All' },
      gender: { value: 'all', label: 'All' },
      possessives: { value: 'all', label: 'All' },
      prepositions: { value: 'all', label: 'All' },
      includeTo: true,
      includeAdjectives: true,
      includePronouns: true,
    },
  });

  return (
    <PageLayout title="Decline Czech" suffix="Czech Quiz" center>
      <SettingsModal
        declensions={declensions}
        settings={settings}
        slovak={false}
        updateDeclensions={setDeclensions}
        updateSettings={setSettings}
      />
      <Quiz arrayOfPairs={shuffle(res)} />
    </PageLayout>
  );
}
