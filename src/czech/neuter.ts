import { createNounDeclension } from '../utilities';

export let neuterNouns = [
  createNounDeclension(
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
  ),
  createNounDeclension(
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
  ),
  createNounDeclension(
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
  ),
  createNounDeclension(
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
  ),
  createNounDeclension(
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
  ),
];
