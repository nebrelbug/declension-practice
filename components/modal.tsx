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

export function SettingsModal({
  declensions,
  settings,
  updateDeclensions,
  updateSettings,
  slovak,
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
              options={[
                { value: 'all', label: 'All' },
                { value: 'essential', label: 'Essential' },
                { value: 'less-common', label: 'Less Common' },
                { value: 'irregular', label: 'Irregular' },
              ]}
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
              options={[
                { value: 'all', label: 'All' },
                { value: 'masculine', label: 'Masculine' },
                { value: 'neuter', label: 'Neuter' },
                { value: 'feminine', label: 'Feminine' },
              ]}
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
              options={[
                { value: 'all', label: 'All' },
                { value: 'noun-possessives', label: 'Noun Possessives' },
                { value: 'possessive-pronouns', label: 'Possessive Pronouns' },
                { value: 'a', label: 'None' },
              ]}
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
              options={[
                { value: 'all', label: 'All' },
                { value: 'key-prepositions', label: 'Key Prepositions' },
              ]}
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
    </>
  );
}

/* 

  //       "'To'": true,
  //       Adjectives: true,
  //       Pronouns: true,
  //       'Possessive Pronouns': true,
  //       'Noun Possessives': true,
  //     }),
  
  */
