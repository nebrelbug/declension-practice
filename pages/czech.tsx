import useLocalStorageState from 'use-local-storage-state';

import { generateSentences } from '../src/czech/sentence-generators';
import { shuffle } from '../src/utilities';
import {
  version,
  defaultDeclensionsCzech,
  defaultSettingsCzech,
} from '../src/default-config';

import { PageLayout } from '../components/layout';
import { Quiz } from '../components/quiz';
import { SettingsModal } from '../components/modal';

export default function Home() {
  const [declensions, setDeclensions] = useLocalStorageState(
    'czech-declensions' + version,
    {
      defaultValue: defaultDeclensionsCzech,
    }
  );

  const [settings, setSettings] = useLocalStorageState(
    'czech-settings' + version,
    {
      defaultValue: defaultSettingsCzech,
    }
  );

  let res = generateSentences(declensions, settings);

  return (
    <PageLayout title="Decline Czech" suffix="Czech Quiz" center>
      <SettingsModal
        declensions={declensions}
        settings={settings}
        lang="czech"
        updateDeclensions={setDeclensions}
        updateSettings={setSettings}
      />
      <Quiz arrayOfPairs={shuffle(res)} />
    </PageLayout>
  );
}
