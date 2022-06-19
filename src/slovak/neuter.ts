import { createNounDeclension } from '../utilities';

export let neuterNouns = [
  createNounDeclension(
    'n',
    'essential',
    [
      ['mesto', 'mesta', 'mestu', 'mesto', false, 'meste', 'mestom'],
      ['mestá', 'miest', 'mestám', 'mestá', false, 'mestách', 'mestami'],
    ],
    'city',
    'cities'
  ),
  createNounDeclension(
    'n',
    'essential',
    [
      ['pole', 'poľa', 'poľu', 'pole', false, 'poli', 'poľom'],
      ['polia', 'polí', 'poliam', 'polia', false, 'poliach', 'poľami'],
    ],
    'field',
    'fields'
  ),
  createNounDeclension(
    'n',
    'advanced',
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
  ),
  createNounDeclension(
    'n',
    'essential',
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
    'town squares'
  ),
  createNounDeclension(
    'n',
    'advanced',
    [
      ['jablko', 'jablka', 'jablku', 'jablko', false, 'jablku', 'jablkom'],
      ['jablká', 'jabĺk', 'jablkám', 'jablká', false, 'jablkách', 'jablkami'],
    ],
    'apple',
    'apples'
  ),
  createNounDeclension(
    'n',
    'advanced',
    [
      ['múzeum', 'múzea', 'múzeu', 'múzeum', false, 'múzeu', 'múzeom'],
      ['múzeá', 'múzeí', 'múzeám', 'múzeá', false, 'múzeách', 'múzeami'],
    ],
    'museum',
    'museums'
  ),
];
