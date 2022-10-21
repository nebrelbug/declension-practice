import { createNounDeclension } from '../utilities';

export let masculineNouns = [
  createNounDeclension(
    'ma',
    'essential',
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
  ),

  createNounDeclension(
    'mi',
    'essential',
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
  ),

  createNounDeclension(
    'mi',
    'advanced',
    [
      ['svět', 'světa', 'světu', 'svět', 'světe!', 'světě', 'světem'],
      ['světy', 'světů', 'světům', 'světy', 'světy!', 'světech', 'světy'],
    ],
    'world',
    'worlds'
  ),

  createNounDeclension(
    'ma',
    'essential',
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
  ),

  createNounDeclension(
    'ma',
    'advanced',
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
  ),

  createNounDeclension(
    'mi',
    'essential',
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
  ),

  createNounDeclension(
    'ma',
    'advanced',
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
        'předsedy', // 'předsedy/ama'
      ],
    ],
    'chairman',
    'chairmen'
  ),

  createNounDeclension(
    'ma',
    'advanced',
    [
      ['kluk', 'kluka', 'kluku', 'kluka', 'kluku!', 'kluku', 'klukem'],
      ['kluci', 'kluků', 'klukům', 'kluky', 'kluci!', 'klucích', 'kluky'],
    ],
    'boy',
    'boys'
  ),

  createNounDeclension(
    'mi',
    'advanced',
    [
      ['cyklus', 'cyklu', 'cyklu', 'cyklus', 'cykle!', 'cyklu', 'cyklem'],
      ['cykly', 'cyklů', 'cyklům', 'cykly', 'cykly!', 'cyklech', 'cykly'],
    ],
    'cycle',
    'cycles'
  ),

  createNounDeclension(
    'ma',
    'advanced',
    [
      ['génius', 'génia', 'géniu', 'génia', 'génie!', 'géniu', 'géniem'],
      ['géniové', 'géniů', 'géniům', 'génie', 'géniové!', 'géniích', 'génii'],
    ],
    'genius',
    'geniuses'
  ),

  createNounDeclension(
    'ma',
    'irregular',
    [
      ['bůh', 'boha', 'bohu', 'boha', 'bože!', 'bohu', 'bohem'],
      ['bohové', 'bohů', 'bohům', 'bohy', 'bohové!', 'bozích', 'bohy'],
    ],
    'god',
    'gods'
  ),
  createNounDeclension(
    'ma',
    'irregular',
    [
      [
        'člověk',
        'člověka',
        'člověku',
        'člověka',
        'člověče!',
        'člověku',
        'člověkem',
      ],
      ['lidé/i', 'lidí', 'lidem', 'lidi', 'lidé/i', 'lidech', 'lidmi'],
    ],
    'person',
    'people'
  ),

  createNounDeclension(
    'ma',
    'irregular',
    [
      ['kůň', 'koně', 'koni', 'kůň', 'koni!', 'koni', 'koněm'],
      ['koně', 'koní', 'koním', 'koně', 'koně!', 'koních', 'koni'],
    ],
    'horse',
    'horses'
  ),
];
