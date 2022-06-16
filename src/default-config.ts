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

export let possessivesOptions = [
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
  possessives: [
    { value: 'noun-possessives', label: 'noun possessives' },
    { value: 'possessive-pronouns', label: 'possessive pronouns' },
  ],
  prepositions: [{ value: 'key-prepositions', label: 'key prepositions' }],
  includeTo: true,
  includeAdjectives: true,
  includePronouns: true,
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

export let defaultSettingsSlovak = {
  plural: true,
  randomize: true,
  nounPatterns: { value: 'all', label: 'All' },
  gender: { value: 'all', label: 'All' },
  possessives: { value: 'all', label: 'All' },
  prepositions: { value: 'all', label: 'All' },
  includeTo: true,
  includeAdjectives: true,
  includePronouns: true,
};
