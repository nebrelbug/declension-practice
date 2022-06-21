import useLocalStorageState from 'use-local-storage-state';

import { generateSentences } from '../src/czech/sentence-generators';
import { arrayLoop } from '../src/utilities';
import {
  version,
  defaultDeclensionsCzech,
  defaultSettingsCzech,
} from '../src/default-config';

import { PageLayout } from '../components/layout';
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
    <PageLayout
      title="Export Czech Declensions"
      suffix="Export Czech Declensions"
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
