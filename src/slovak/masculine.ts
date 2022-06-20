import { createNounDeclension } from '../utilities';

export let masculineNouns = [
  createNounDeclension(
    'ma',
    'essential',
    [
      ['chlap', 'chlapa', 'chlapovi', 'chlapa', false, 'chlapovi', 'chlapom'],
      ['chlapi', 'chlapov', 'chlapom', 'chlapov', false, 'chlapoch', 'chlapmi'],
    ],
    'guy',
    'guys'
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
  createNounDeclension(
    'mi',
    'advanced',
    [
      ['dom', 'domu', 'domu', 'dom', false, 'dome', 'domom'],
      ['domy', 'domov', 'domom', 'domy', false, 'domoch', 'domami'],
    ],
    'house',
    'houses'
  ),
  createNounDeclension(
    'mi',
    'advanced',
    [
      ['rok', 'roka', 'roku', 'rok', false, 'roku', 'rokom'],
      ['roky', 'rokov', 'rokom', 'roky', false, 'rokoch', 'rokmi'],
    ],
    'year',
    'years'
  ),
  createNounDeclension(
    'mi',
    'essential',
    [
      ['gauč', 'gauča', 'gauču', 'gauč', false, 'gauči', 'gaučom'],
      ['gauče', 'gaučov', 'gaučom', 'gauče', false, 'gaučoch', 'gaučmi'],
    ],
    'couch',
    'couches'
  ),
  createNounDeclension(
    'ma',
    'irregular',
    [
      ['boh', 'boha', 'bohu', 'boha', 'bože!', 'bohu', 'bohom'],
      ['bohovia', 'bohov', 'bohom', 'bohov', false, 'bohoch', 'bohmi'],
    ],
    'god',
    'gods'
  ),
  createNounDeclension(
    'ma',
    'irregular',
    [
      [
        'človek',
        'človeka',
        'človeku',
        'človeka',
        'človeče!',
        'človeku',
        'človekom',
      ],
      ['ľudia', 'ľudí', 'ľuďom', 'ľudí', false, 'ľuďoch', 'ľuďmi'],
    ],
    'person',
    'people'
  ),
];
