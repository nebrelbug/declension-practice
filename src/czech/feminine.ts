import { createNounDeclension } from '../utilities';

export let feminineNouns = [
  createNounDeclension(
    'f',
    'essential',
    [
      ['žena', 'ženy', 'ženě', 'ženu', 'ženo!', 'ženě', 'ženou'],
      [
        'ženy',
        'žen',
        'ženám',
        'ženy',
        'ženy!',
        'ženách',
        'ženami', // 'ženami/ama'
      ],
    ],
    'woman',
    'women'
  ),

  createNounDeclension(
    'f',
    'essential',
    [
      ['růže', 'růže', 'růži', 'růži', 'růže!', 'růži', 'růží'],
      [
        'růže',
        'růží',
        'růžím',
        'růže',
        'růže!',
        'růžích',
        'řůžemi', // 'růžemi/ema'
      ],
    ],
    'rose',
    'roses'
  ),

  // add ulice

  createNounDeclension(
    'f',
    'essential',
    [
      ['píseň', 'písně', 'písni', 'píseň', 'písni!', 'písni', 'písní'],
      [
        'písně',
        'písní',
        'písním',
        'písně',
        'písně!',
        'písních',
        'písněmi', // 'písněmi/ěma'
      ],
    ],
    'song',
    'songs'
  ),

  createNounDeclension(
    'f',
    'essential',
    [
      ['kost', 'kosti', 'kosti', 'kost', 'kosti!', 'kosti', 'kostí'],
      [
        'kosti',
        'kostí',
        'kostem',
        'kosti',
        'kosti!',
        'kostech',
        'kostmi', // 'kostmi/ma'
      ],
    ],
    'bone',
    'bones'
  ),

  createNounDeclension(
    'f',
    'irregular',
    [[], ['děti', 'dětí', 'dětem', 'děti', 'děti!', 'dětech', 'dětmi']],
    'child',
    'children'
  ),

  createNounDeclension(
    'f',
    'irregular',
    [
      ['dcera', 'dcery', 'dceři', 'dceru', 'dcero!', 'dceři', 'dcerou'],
      [
        'dcery',
        'dcer',
        'dcerám',
        'dcery',
        'dcery!',
        'dcerách',
        'dcerami', // 'ženami/ama'
      ],
    ],
    'daughter',
    'daughters'
  ),
];
