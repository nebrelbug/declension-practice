import 'react-responsive-modal/styles.css';

import { useState } from 'react';
import {
  Button,
  DeclensionToggle,
  Checkbox,
  closeIcon,
} from '../components/modal-button';
import { Modal } from 'react-responsive-modal';
import Select from 'react-select';

import {
  nounPatternOptions,
  genderOptions,
  possessivesOptions,
  prepositionOptions,
} from '../src/default-config';

export function SettingsModal({
  declensions,
  settings,
  updateDeclensions,
  updateSettings,
  slovak,
}) {
  const [open, setOpen] = useState(true);

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

  function DToggle({ name }) {
    return (
      <DeclensionToggle
        name={name}
        value={declensions[name]}
        onToggle={() => {
          toggleDec(name);
        }}
      />
    );
  }

  // plural, randomize, nounPatterns, gender, possessives, prepositions, includeTo, includeAdjectives, includePronouns

  return (
    <>
      <Button onClick={onOpenModal} />
      {open && (
        <Modal open={open} onClose={onCloseModal} closeIcon={closeIcon} center>
          <div>
            <h2 className="text-xl font-bold py-2">Declensions</h2>
            <Checkbox
              value={settings.plural}
              name="Plural"
              onToggle={() => {
                toggleCheckbox('plural');
              }}
            />

            <Checkbox
              value={settings.randomize}
              name="Randomize Phrases"
              onToggle={() => {
                toggleCheckbox('randomize');
              }}
            />

            <DToggle name="1" />
            <DToggle name="2" />
            <DToggle name="3" />
            <DToggle name="4" />
            <DToggle name="4-M" />
            {!slovak && <DToggle name="5" />}
            <DToggle name="6" />
            <DToggle name="7" />
          </div>
          <hr />
          <div>
            <h2 className="text-xl font-bold py-2">Options</h2>
            <label className="block my-2">
              <span>Noun Patterns</span>
              <Select
                options={nounPatternOptions}
                isMulti
                isClearable={false}
                value={settings.nounPatterns}
                onChange={(newValue) => {
                  changeDropdown('nounPatterns', newValue);
                }}
                isSearchable={false}
                className="my-1"
              />
            </label>

            <label className="block my-2">
              <span>Gender</span>
              <Select
                options={genderOptions}
                isMulti
                isClearable={false}
                value={settings.gender}
                onChange={(newValue) => {
                  changeDropdown('gender', newValue);
                }}
                isSearchable={false}
                className="my-1"
              />
            </label>
            <label className="block my-2">
              <span>Possessives</span>
              <Select
                options={possessivesOptions}
                isMulti
                isClearable={false}
                value={settings.possessives}
                onChange={(newValue) => {
                  changeDropdown('possessives', newValue);
                }}
                isSearchable={false}
                className="my-1"
              />
            </label>
            <label className="block my-2">
              <span>Prepositions</span>
              <Select
                options={prepositionOptions}
                isMulti
                value={settings.prepositions}
                onChange={(newValue) => {
                  changeDropdown('prepositions', newValue);
                }}
                isSearchable={false}
                className="my-1"
              />
            </label>
          </div>
          <hr />
          <div>
            <h2 className="text-xl font-bold py-2">Include</h2>
            <Checkbox
              value={settings.includeTo}
              name='"To"'
              onToggle={() => {
                toggleCheckbox('includeTo');
              }}
            />
            <Checkbox
              value={settings.includeAdjectives}
              name="Adjectives"
              onToggle={() => {
                toggleCheckbox('includeAdjectives');
              }}
            />
            <Checkbox
              value={settings.includePronouns}
              name="Pronouns"
              onToggle={() => {
                toggleCheckbox('includePronouns');
              }}
            />
          </div>
        </Modal>
      )}
    </>
  );
}
