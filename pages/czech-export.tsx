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
    'czech-export-declensions' + version,
    {
      defaultValue: defaultDeclensionsCzech,
    }
  );

  const [settings, setSettings] = useLocalStorageState(
    'czech-export-settings' + version,
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
      {arrayLoop(res)}
    </PageLayout>
  );
}
