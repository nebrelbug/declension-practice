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
        'růžemi', // 'růžemi/ema'
      ],
    ],
    'rose',
    'roses'
  ),

  createNounDeclension(
    'f',
    'advanced',
    [
      ['ulice', 'ulice', 'ulici', 'ulici', 'ulice!', 'ulici', 'ulicí'],
      ['ulice', 'ulic', 'ulicím', 'ulice', 'ulice!', 'ulicích', 'ulicemi'],
    ],
    'street',
    'streets'
  ),

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

  createNounDeclension(
    'f',
    'irregular',
    [
      ['ruka', 'ruky', 'ruce', 'ruku', 'ruko!', 'ruce', 'rukou'],
      ['ruce', 'rukou', 'rukám', 'ruce', 'ruce!', 'rukou', 'rukama'],
    ],
    'hand',
    'hands'
  ),

  createNounDeclension(
    'f',
    'irregular',
    [
      ['noha', 'nohy', 'noze', 'nohu', 'noho!', 'noze', 'nohou'],
      ['nohy', 'nohou', 'nohám', 'nohy', 'nohy!', 'nohou', 'nohama'],
    ],
    'leg',
    'legs'
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
    [[], ['uši', 'uší', 'uším', 'uši', 'uši!', 'uších', 'ušima']],
    'ear',
    'ears'
  ),

  createNounDeclension(
    'f',
    'irregular',
    [[], ['oči', 'očí', 'očím', 'oči', 'oči!', 'očích', 'očima']],
    'eye',
    'eyes'
  ),
];
