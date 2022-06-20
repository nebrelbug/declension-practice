import useLocalStorageState from 'use-local-storage-state';

import { generateSentences } from '../src/slovak/sentence-generators';
import { arrayLoop } from '../src/utilities';
import {
  version,
  defaultDeclensionsSlovak,
  defaultSettingsSlovak,
} from '../src/default-config';

import { PageLayout } from '../components/layout';
import { SettingsModal } from '../components/modal';

export default function Home() {
  const [declensions, setDeclensions] = useLocalStorageState(
    'slovak-export-declensions' + version,
    {
      defaultValue: defaultDeclensionsSlovak,
    }
  );

  const [settings, setSettings] = useLocalStorageState(
    'slovak-export-settings' + version,
    {
      defaultValue: defaultSettingsSlovak,
    }
  );

  let res = generateSentences(declensions, settings);

  return (
    <PageLayout
      title="Export Slovak Declensions"
      suffix="Export Slovak Declensions"
      center={false}
    >
      <SettingsModal
        declensions={declensions}
        settings={settings}
        slovak={true}
        updateDeclensions={setDeclensions}
        updateSettings={setSettings}
      />
      {arrayLoop(res)}
    </PageLayout>
  );
}
