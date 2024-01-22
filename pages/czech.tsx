import useLocalStorageState from "use-local-storage-state"

import { generateSentences } from "../src/czech/sentence-generators"
import {
  defaultDeclensionsCzech,
  defaultSettingsCzech,
  version
} from "../src/default-config"
import { shuffle } from "../src/utilities"

import { PageLayout } from "../components/layout"
import { SettingsModal } from "../components/modal"
import { Quiz } from "../components/quiz"

export default function Home() {
  const [declensions, setDeclensions] = useLocalStorageState(
    "czech-declensions" + version,
    {
      defaultValue: defaultDeclensionsCzech
    }
  )

  const [settings, setSettings] = useLocalStorageState(
    "czech-settings" + version,
    {
      defaultValue: defaultSettingsCzech
    }
  )

  let res = generateSentences(declensions, settings)

  return (
    <PageLayout title="Decline Czech" suffix="Czech Quiz" center>
      <SettingsModal
        declensions={declensions}
        settings={settings}
        lang="czech"
        updateDeclensions={setDeclensions}
        updateSettings={setSettings}
      />
      <Quiz arrayOfPairs={shuffle(res)} isRussian={false} />
    </PageLayout>
  )
}
