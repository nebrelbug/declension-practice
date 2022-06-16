import { createNounDeclension } from '../utilities';

export var žena = createNounDeclension(
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
);

export var růže = createNounDeclension(
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
);

// add ulice

export var píseň = createNounDeclension(
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
);

export var kost = createNounDeclension(
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
);
