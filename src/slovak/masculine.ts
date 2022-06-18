import { createNounDeclension } from '../utilities';

export let masculineNouns = [
  createNounDeclension(
    'ma',
    'essential',
    [
      ['chlap', 'chlapa', 'chlapovi', 'chlapa', false, 'chlapovi', 'chlapom'],
      ['chlapi', 'chlapov', 'chlapom', 'chlapov', false, 'chlapoch', 'chlapmi'],
    ],
    'boy',
    'boys'
  ),
  createNounDeclension(
    'ma',
    'advanced',
    [
      ['dedo', 'deda', 'dedovi', 'deda', false, 'dedovi', 'dedom'],
      ['dedovia', 'dedov', 'dedom', 'dedov', false, 'dedoch', 'dedami'],
    ],
    'grandfather',
    'grandfathers'
  ),
  createNounDeclension(
    'ma',
    'essential',
    [
      ['kolega', 'kolegu', 'kolegovi', 'kolegu', false, 'kolegovi', 'kolegom'],
      [
        'kolegovia',
        'kolegov',
        'kolegom',
        'kolegov',
        false,
        'kolegoch',
        'kolegami',
      ],
    ],
    'colleague',
    'colleagues'
  ),
  createNounDeclension(
    'mi',
    'essential',
    [
      ['stôl', 'stola', 'stolu', 'stôl', false, 'stole', 'stolom'],
      ['stoly', 'stolov', 'stolom', 'stoly', false, 'stoloch', 'stolmi'],
    ],
    'table',
    'tables'
  ),
];
