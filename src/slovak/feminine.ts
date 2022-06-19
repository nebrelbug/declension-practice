import { createNounDeclension } from '../utilities';

export let feminineNouns = [
  createNounDeclension(
    'f',
    'essential',
    [
      ['žena', 'ženy', 'žene', 'ženu', false, 'žene', 'ženou'],
      ['ženy', 'žien', 'ženám', 'ženy', false, 'ženách', 'ženami'],
    ],
    'woman',
    'women'
  ),
  createNounDeclension(
    'f',
    'essential',
    [
      ['ulica', 'ulice', 'ulici', 'ulicu', false, 'ulici', 'ulicou'],
      ['ulice', 'ulíc', 'uliciam', 'ulice', false, 'uliciach', 'ulicami'],
    ],
    'street',
    'streets'
  ),
  createNounDeclension(
    'f',
    'essential',
    [
      ['posteľ', 'postele', 'posteli', 'posteľ', false, 'posteli', 'posteľou'],
      [
        'postele',
        'postelí',
        'posteliam',
        'postele',
        false,
        'posteliach',
        'postelami',
      ],
    ],
    'bed',
    'beds'
  ),
  createNounDeclension(
    'f',
    'advanced',
    [
      [
        'reštaurácia',
        'reštaurácie',
        'reštaurácii',
        'reštauráciu',
        false,
        'reštaurácii',
        'reštauráciou',
      ],
      [
        'reštaurácie',
        'reštaurácií',
        'reštauráciám',
        'reštaurácie',
        false,
        'reštauráciách',
        'reštauráciami',
      ],
    ],
    'restaurant',
    'restaurants'
  ),
  createNounDeclension(
    'f',
    'essential',
    [
      ['radosť', 'radosti', 'radosti', 'radosť', false, 'radosti', 'radosťou'],
      [
        'radosti',
        'radostí',
        'radostiam',
        'radosti',
        false,
        'radostiach',
        'radosťami',
      ],
    ],
    'joy',
    'joys'
  ),
];
