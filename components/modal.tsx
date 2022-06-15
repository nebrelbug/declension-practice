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
  // TODO default false
  const [open, setOpen] = useState(true);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  function toggleDec(dec) {
    updateDeclensions((oldDeclensions) => {
      console.log('h');
      console.log(dec, oldDeclensions);
      return { ...oldDeclensions, [dec]: !oldDeclensions[dec] };
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

  // plural, randomize, nounPatterns, gender, possessives, pronouns, includeTo, includeAdjectives, includePronouns

  return (
    <>
      <Button onClick={onOpenModal} />
      <Modal open={open} onClose={onCloseModal} closeIcon={closeIcon} center>
        <div>
          <h2 className="text-xl font-bold py-2">Declensions</h2>
          <Checkbox value={settings.plural} name="Plural" />

          <Checkbox value={settings.randomize} name="Randomize Phrases" />

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
              isSearchable={false}
              className="my-1"
            />
          </label>
        </div>
        <hr />
        <div>
          <h2 className="text-xl font-bold py-2">Include</h2>
          <Checkbox value={settings.includeTo} name='"To"' />
          <Checkbox value={settings.includeAdjectives} name="Adjectives" />
          <Checkbox value={settings.includePronouns} name="Pronouns" />
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
