import { createNounDeclension } from '../utilities';

export let město = createNounDeclension(
  'n',
  'essential',
  [
    ['město', 'města', 'městu', 'město', 'město!', 'městě/u', 'městem'],
    [
      'města',
      'měst',
      'městům',
      'města',
      'města!',
      'městech',
      'městy', // 'městy/ama'
    ],
  ],
  'city',
  'cities'
);

export let vízum = createNounDeclension(
  'n',
  'advanced',
  [
    ['vízum', 'víza', 'vízu', 'vízum', 'vízum!', 'vízu', 'vízem'],
    [
      'víza',
      'víz',
      'vízům',
      'víza',
      'víza!',
      'vízech',
      'vízy', // 'vízy/ama'
    ],
  ],
  'visa',
  'visas'
);

export let moře = createNounDeclension(
  'n',
  'essential',
  [
    ['moře', 'moře', 'moři', 'moře', 'moře!', 'moři', 'mořem'],
    [
      'moře',
      'moří',
      'mořím',
      'moře',
      'moře!',
      'mořích',
      'moři', // 'moři/ema'
    ],
  ],
  'sea',
  'seas'
);

export let stavení = createNounDeclension(
  'n',
  'essential',
  [
    [
      'stavení',
      'stavení',
      'stavení',
      'stavení',
      'stavení!',
      'stavení',
      'stavením',
    ],
    [
      'stavení',
      'stavení',
      'stavením',
      'stavení',
      'stavení!',
      'staveních',
      'staveními', // 'staveními/íma'
    ],
  ],
  'building',
  'buildings'
);

export let kuře = createNounDeclension(
  'n',
  'advanced',
  [
    ['kuře', 'kuřete', 'kuřeti', 'kuře', 'kuře!', 'kuřeti', 'kuřetem'],
    [
      'kuřata',
      'kuřat',
      'kuřatům',
      'kuřata',
      'kuřata!',
      'kuřatech',
      'kuřaty', // 'kuřaty/ama'
    ],
  ],
  'chick',
  'chicks'
);
