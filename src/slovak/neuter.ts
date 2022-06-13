import { createNounDeclension } from '../utilities';

export let mesto = createNounDeclension(
  'n',
  [
    ['mesto', 'mesta', 'mestu', 'mesto', false, 'meste', 'mestom'],
    ['mestá', 'miest', 'mestám', 'mestá', false, 'mestách', 'mestami'],
  ],
  'city',
  'cities'
);

export let pole = createNounDeclension(
  'n',
  [
    ['pole', 'poľa', 'poľu', 'pole', false, 'poli', 'poľom'],
    ['polia', 'polí', 'poliam', 'polia', false, 'poliach', 'poľami'],
  ],
  'field',
  'fields'
);

export let dievča = createNounDeclension(
  'n',
  [
    [
      'dievča',
      'dievčaťa',
      'dievčaťu',
      'dievča',
      false,
      'dievčati',
      'dievčaťom',
    ],
    [
      'dievčatá',
      'dievčat',
      'dievčatám',
      'dievčatá',
      false,
      'dievčatách',
      'dievčatami',
    ],
  ],
  'girl',
  'girls'
);

export let námestie = createNounDeclension(
  'n',
  [
    [
      'námestie',
      'námestia',
      'námestiu',
      'námestie',
      false,
      'námestí',
      'námestím',
    ],
    [
      'námestia',
      'námestí',
      'námestiam',
      'námestia',
      false,
      'námestiach',
      'námestiami',
    ],
  ],
  'town square',
  'town square'
);

export let jablko = createNounDeclension(
  'n',
  [
    ['jablko', 'jablka', 'jablku', 'jablko', false, 'jablku', 'jablkom'],
    ['jablká', 'jabĺk', 'jablkám', 'jablká', false, 'jablkách', 'jablkami'],
  ],
  'apple',
  'apples'
);

export let múzeum = createNounDeclension(
  'n',
  [
    ['múzeum', 'múzea', 'múzeu', 'múzeum', false, 'múzeu', 'múzeom'],
    ['múzeá', 'múzeí', 'múzeám', 'múzeá', false, 'múzeách', 'múzeami'],
  ],
  'museum',
  'museums'
);
