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

  createNounDeclension(
    'n',
    'advanced',
    [
      ['téma', 'tématu', 'tématu', 'téma', 'téma!', 'tématu', 'tématem'],
      ['témata', 'témat', 'tématům', 'témata', 'témata!', 'tématech', 'tématy'],
    ],
    'theme',
    'themes'
  ),

  createNounDeclension(
    'n',
    'irregular',
    [['dítě', 'dítěte', 'dítěti', 'dítě', 'dítě!', 'dítěti', 'dítětem'], []],
    'child',
    'children'
  ),

  createNounDeclension(
    'n',
    'advanced',
    [
      ['muzeum', 'muzea', 'muzeu', 'muzeum', 'muzeum!', 'muzeu', 'muzeem'],
      ['muzea', 'muzeí', 'muzeím', 'muzea', 'muzea!', 'muzeích', 'muzei'],
    ],
    'museum',
    'museums'
  ),

  createNounDeclension(
    'n',
    'advanced',
    [
      ['drama', 'dramatu', 'dramatu', 'drama', 'drama!', 'dramatu', 'dramatem'],
      [
        'dramata',
        'dramat',
        'dramatům',
        'dramata',
        'dramata!',
        'dramatech',
        'dramaty',
      ],
    ],
    'drama',
    'dramas'
  ),

  createNounDeclension(
    'n',
    'irregular',
    [['ucho', 'ucha', 'uchu', 'ucho', 'ucho!', 'uchu', 'uchem'], []],
    'ear',
    'ears'
  ),

  createNounDeclension(
    'n',
    'irregular',
    [['oko', 'oka', 'oku', 'oko', 'oko!', 'oku', 'okem'], []],
    'eye',
    'eyes'
  ),
];
