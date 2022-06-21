export let version = '1-9'; // update the version every time there's a breaking change to the structure of localStorage

// TODO: change so that the options are just the different nouns. Use different markers for essential, advanced, etc.
// TODO: do the same thing for prepositions, adjectives, and possessives
export let nounPatternOptions = [
  { value: 'essential', label: 'essential' },
  { value: 'advanced', label: 'advanced' },
  { value: 'irregular', label: 'irregular' },
];

export let genderOptions = [
  { value: 'masculine', label: 'masculine' },
  { value: 'neuter', label: 'neuter' },
  { value: 'feminine', label: 'feminine' },
];

export let numberOptions = [
  { value: 'singular', label: 'singular' },
  { value: 'plural', label: 'plural' },
];

export let phraseOptionsCzech = [
  { value: 'basic', label: 'basic phrases' },
  { value: 'noun-possessives', label: 'noun possessives' },
  { value: 'possessive-pronouns', label: 'possessive pronouns' },
  { value: 'jenž', label: 'jenž' },
];

export let phraseOptionsSlovak = [
  { value: 'basic', label: 'basic phrases' },
  { value: 'noun-possessives', label: 'noun possessives' },
  { value: 'possessive-pronouns', label: 'possessive pronouns' },
];

export let prepositionOptions = [
  { value: 'key-prepositions', label: 'key prepositions' },
  { value: 'other-prepositions', label: 'other prepositions' },
];

export let defaultDeclensionsCzech = {
  '1': true,
  '2': true,
  '3': true,
  '4': true,
  '4-M': true,
  '5': true,
  '6': true,
  '7': true,
};

export let defaultSettingsCzech = {
  plural: true,
  randomize: true,
  nounPatterns: [
    { value: 'essential', label: 'essential' },
    { value: 'advanced', label: 'advanced' },
  ],
  gender: [
    { value: 'masculine', label: 'masculine' },
    { value: 'neuter', label: 'neuter' },
    { value: 'feminine', label: 'feminine' },
  ],
  numberOptions: [
    { value: 'singular', label: 'singular' },
    { value: 'plural', label: 'plural' },
  ],
  phraseOptions: [
    { value: 'basic', label: 'basic phrases' },
    { value: 'possessive-pronouns', label: 'possessive pronouns' },
  ],
  prepositions: [{ value: 'key-prepositions', label: 'key prepositions' }],
  includeTo: true,
  includeAdjectives: true,
};

export let defaultDeclensionsSlovak = {
  '1': true,
  '2': true,
  '3': true,
  '4': true,
  '4-M': true,
  '5': false,
  '6': true,
  '7': true,
};

export let defaultSettingsSlovak = { ...defaultSettingsCzech };
