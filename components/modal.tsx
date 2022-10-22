import 'react-responsive-modal/styles.css';

import { useState } from 'react';
import {
  Button,
  DeclensionToggle,
  Checkbox,
  closeIcon,
} from '../components/modal-button';
import { Modal } from 'react-responsive-modal';

import {
  nounPatternOptions,
  nounPatternOptionsRussian,
  genderOptions,
  numberOptions,
  phraseOptionsCzech,
  phraseOptionsSlovak,
  phraseOptionsRussian,
  prepositionOptions,
} from '../src/default-config';

import { settingIsOn } from '../src/sentence-tools';

import { SelectComponent } from './select';

console.log(phraseOptionsRussian);

export function SettingsModal({
  declensions,
  settings,
  updateDeclensions,
  updateSettings,
  lang,
}) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  function toggleDec(dec) {
    updateDeclensions((oldDeclensions) => {
      return { ...oldDeclensions, [dec]: !oldDeclensions[dec] };
    });
  }

  function toggleCheckbox(key) {
    updateSettings((oldSettings) => {
      return { ...oldSettings, [key]: !oldSettings[key] };
    });
  }

  function changeDropdown(key, newValue) {
    updateSettings((oldSettings) => {
      return { ...oldSettings, [key]: newValue };
    });
  }

  function DToggle({ name, title }) {
    return (
      <DeclensionToggle
        name={title}
        value={declensions[name]}
        onToggle={() => {
          toggleDec(name);
        }}
      />
    );
  }

  return (
    <>
      <Button onClick={onOpenModal} />
      {open && (
        <Modal open={open} onClose={onCloseModal} closeIcon={closeIcon} center>
          <div>
            <h2 className="text-xl font-bold py-2">Declensions</h2>

            <DToggle name="1" title={lang === 'russian' ? 'nom.' : '1'} />
            <DToggle name="2" title={lang === 'russian' ? 'gen.' : '2'} />
            <DToggle name="3" title={lang === 'russian' ? 'dat.' : '3'} />
            <DToggle name="4" title={lang === 'russian' ? 'acc.' : '4'} />
            <DToggle
              name="4-M"
              title={lang === 'russian' ? 'acc. m.' : '4-M'}
            />
            {lang === 'czech' && <DToggle name="5" title="5" />}
            <DToggle name="6" title={lang === 'russian' ? 'prep.' : '6'} />
            <DToggle name="7" title={lang === 'russian' ? 'ins.' : '7'} />
          </div>
          <hr />
          <div>
            <h2 className="text-xl font-bold py-2">Options</h2>

            <SelectComponent
              options={
                lang === 'russian'
                  ? nounPatternOptionsRussian
                  : nounPatternOptions
              }
              name="Nouns"
              value={settings.nounPatterns}
              onChange={(newValue) => {
                changeDropdown('nounPatterns', newValue);
              }}
            />

            <SelectComponent
              options={genderOptions}
              name="Gender"
              value={settings.gender}
              onChange={(newValue) => {
                changeDropdown('gender', newValue);
              }}
            />

            <SelectComponent
              options={
                lang === 'slovak'
                  ? phraseOptionsSlovak
                  : lang === 'russian'
                  ? phraseOptionsRussian
                  : phraseOptionsCzech
              }
              name="Phrases"
              value={settings.phraseOptions}
              onChange={(newValue) => {
                changeDropdown('phraseOptions', newValue);
              }}
            />

            <SelectComponent
              options={numberOptions}
              name="Number"
              value={settings.numberOptions}
              onChange={(newValue) => {
                changeDropdown('numberOptions', newValue);
              }}
            />

            <SelectComponent
              options={prepositionOptions}
              name="Prepositions"
              value={settings.prepositions}
              onChange={(newValue) => {
                changeDropdown('prepositions', newValue);
              }}
            />
          </div>
          <hr />
          <div>
            <h2 className="text-xl font-bold py-2">Options</h2>
            <Checkbox
              value={settings.randomize}
              name="Randomize Phrases"
              onToggle={() => {
                toggleCheckbox('randomize');
              }}
            />
            {settingIsOn(settings, 'phraseOptions', 'basic') && (
              <>
                <Checkbox
                  value={settings.includeTo}
                  name={
                    lang === 'russian'
                      ? 'Include Demonstrative'
                      : "Include 'To'"
                  }
                  onToggle={() => {
                    toggleCheckbox('includeTo');
                  }}
                />
                <Checkbox
                  value={settings.includeAdjectives}
                  name="Include Adjectives"
                  onToggle={() => {
                    toggleCheckbox('includeAdjectives');
                  }}
                />
              </>
            )}
          </div>
          <br />
        </Modal>
      )}
    </>
  );
}
