import useLocalStorageState from 'use-local-storage-state';

import { generateSentences } from '../src/slovak/sentence-generators';
import { shuffle } from '../src/utilities';
import {
  version,
  defaultDeclensionsSlovak,
  defaultSettingsSlovak,
} from '../src/default-config';

import { PageLayout } from '../components/layout';
import { Quiz } from '../components/quiz';
import { SettingsModal } from '../components/modal';

export default function Home() {
  const [declensions, setDeclensions] = useLocalStorageState(
    'slovak-declensions' + version,
    {
      defaultValue: defaultDeclensionsSlovak,
    }
  );

  const [settings, setSettings] = useLocalStorageState(
    'slovak-settings' + version,
    {
      defaultValue: defaultSettingsSlovak,
    }
  );

  let res = generateSentences(declensions, settings);

  return (
    <PageLayout title="Decline Slovak" suffix="Slovak Quiz" center>
      <SettingsModal
        declensions={declensions}
        settings={settings}
        lang="slovak"
        updateDeclensions={setDeclensions}
        updateSettings={setSettings}
      />
      <Quiz arrayOfPairs={shuffle(res)} />
    </PageLayout>
  );
}
