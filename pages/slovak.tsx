import useLocalStorageState from "use-local-storage-state"

import {
  defaultDeclensionsSlovak,
  defaultSettingsSlovak,
  version
} from "../src/default-config"
import { generateSentences } from "../src/slovak/sentence-generators"
import { shuffle } from "../src/utilities"

import { PageLayout } from "../components/layout"
import { SettingsModal } from "../components/modal"
import { Quiz } from "../components/quiz"

export default function Home() {
  const [declensions, setDeclensions] = useLocalStorageState(
    "slovak-declensions" + version,
    {
      defaultValue: defaultDeclensionsSlovak
    }
  )

  const [settings, setSettings] = useLocalStorageState(
    "slovak-settings" + version,
    {
      defaultValue: defaultSettingsSlovak
    }
  )

  let res = generateSentences(declensions, settings)

  return (
    <PageLayout title="Decline Slovak" suffix="Slovak Quiz" center>
      <SettingsModal
        declensions={declensions}
        settings={settings}
        lang="slovak"
        updateDeclensions={setDeclensions}
        updateSettings={setSettings}
      />
      <Quiz arrayOfPairs={shuffle(res)} isRussian={false} />
    </PageLayout>
  )
}
