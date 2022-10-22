import useLocalStorageState from 'use-local-storage-state';

import { generateSentences } from '../src/russian/sentence-generators';
import { shuffle } from '../src/utilities';
import {
  version,
  defaultDeclensionsRussian,
  defaultSettingsRussian,
} from '../src/default-config';

import { PageLayout } from '../components/layout';
import { Quiz } from '../components/quiz';
import { SettingsModal } from '../components/modal';

export default function Home() {
  const [declensions, setDeclensions] = useLocalStorageState(
    'russian-declensions' + version,
    {
      defaultValue: defaultDeclensionsRussian,
    }
  );

  const [settings, setSettings] = useLocalStorageState(
    'russian-settings' + version,
    {
      defaultValue: defaultSettingsRussian,
    }
  );

  let res = generateSentences(declensions, settings);

  return (
    <PageLayout title="Decline Russian" suffix="Russian Quiz" center>
      <SettingsModal
        declensions={declensions}
        settings={settings}
        lang="russian"
        updateDeclensions={setDeclensions}
        updateSettings={setSettings}
      />
      <Quiz arrayOfPairs={shuffle(res)} />
    </PageLayout>
  );
}
