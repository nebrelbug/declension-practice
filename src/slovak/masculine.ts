import { createNounDeclension } from '../utilities';

export let pán = createNounDeclension(
  'ma',
  [
    ['pán', 'pána', 'pánu/ovi', 'pána', 'páne!', 'pánu/ovi', 'pánem'],
    [
      'páni/ové',
      'pánů',
      'pánům',
      'pány',
      'páni/ové!',
      'pánech',
      'pány', // 'pány/ama'
    ],
  ],
  'lord',
  'lords'
);

export let hrad = createNounDeclension(
  'mi',
  [
    ['hrad', 'hradu', 'hradu', 'hrad', 'hrade!', 'hradě/u', 'hradem'],
    [
      'hrady',
      'hradů',
      'hradům',
      'hrady',
      'hrady!',
      'hradech',
      'hrady', // 'hrady/ama'
    ],
  ],
  'castle',
  'castles'
);

export let muž = createNounDeclension(
  'ma',
  [
    ['muž', 'muže', 'muži/ovi', 'muže', 'muži!', 'muži/ovi', 'mužem'],
    [
      'muži',
      'mužů',
      'mužům',
      'muže',
      'muži!',
      'mužích',
      'muži', // 'muži/ema'
    ],
  ],
  'man',
  'men'
);

export let soudce = createNounDeclension(
  'ma',
  [
    [
      'soudce',
      'soudce',
      'soudci/ovi',
      'soudce',
      'soudce!',
      'soudci/ovi',
      'soudcem',
    ],
    [
      'soudci/ové',
      'soudců',
      'soudcům',
      'soudce',
      'soudci/ovi!',
      'soudcích',
      'soudci', // 'soudci/ema'
    ],
  ],
  'judge',
  'judges'
);

export let stroj = createNounDeclension(
  'mi',
  [
    ['stroj', 'stroje', 'stroji', 'stroj', 'stroji!', 'stroji', 'strojem'],
    [
      'stroje',
      'strojů',
      'strojům',
      'stroje',
      'stroje!',
      'strojích',
      'stroji', // 'stroji/ema'
    ],
  ],
  'machine',
  'machines'
);

export let předseda = createNounDeclension(
  'ma',
  [
    [
      'předseda',
      'předsedy',
      'předsedovi',
      'předsedu',
      'předsedo!',
      'předsedovi',
      'předsedou',
    ],
    [
      'předsedové',
      'předsedů',
      'předsedům',
      'předsedy',
      'předsedové!',
      'předsedech',
      'predsedy', // 'předsedy/ama'
    ],
  ],
  'chairman',
  'chairmen'
);
