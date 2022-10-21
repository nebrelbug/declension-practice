import useLocalStorageState from 'use-local-storage-state';

import { generateSentences } from '../src/russian/sentence-generators';
import { arrayLoop } from '../src/utilities';
import {
  version,
  defaultDeclensionsRussian,
  defaultSettingsRussian,
} from '../src/default-config';

import { PageLayout } from '../components/layout';
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
    <PageLayout
      title="Export Russian Declensions"
      suffix="Export Russian Declensions"
      center={false}
    >
      <SettingsModal
        declensions={declensions}
        settings={settings}
        slovak={false}
        updateDeclensions={setDeclensions}
        updateSettings={setSettings}
      />
      <h2 className="text-lg font-bold mt-4 mb-4">
        {res.length} phrases generated
      </h2>
      {arrayLoop(res)}
    </PageLayout>
  );
}
