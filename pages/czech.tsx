import createPersistedState from 'use-persisted-state';

import { generateSimpleSentences } from '../src/czech/sentence-generators';
import { PageLayout } from '../components/layout';
import { Quiz } from '../components/quiz';
import { shuffle } from '../src/utilities';
import { SettingsModal } from '../components/modal';

const useDeclensions = createPersistedState('czech-declensions');
const useSettings = createPersistedState('czech-settings');

let res = generateSimpleSentences();

export default function Home() {
  const [declensions, setDeclensions] = useDeclensions({
    '1': true,
    '2': false,
    '3': true,
    '4': false,
    '4-M': true,
    '5': true,
    '6': true,
    '7': true,
  });

  const [settings, setSettings] = useSettings({
    plural: true,
    randomize: true,
    nounPatterns: 'all',
    gender: 'all',
    possessives: 'all',
    pronouns: 'all',
    includeTo: true,
    includeAdjectives: true,
    includePronouns: true,
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
