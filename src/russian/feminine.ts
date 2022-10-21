import { createNounDeclension } from '../utilities';

// declensions taken from http://www.study-languages-online.com/russian-nouns-declension.html

export let feminineNouns = [
  createNounDeclension(
    // Animate feminine nouns ending in -a

    'fa',
    'essential',
    [
      ['мамa', 'мамы', 'маме', 'маму', false, 'маме', 'мамой'],
      ['мамы', 'мам', 'мамам', 'мам', false, 'мамах', 'мамами'],
    ],
    'mom',
    'moms'
  ),

  createNounDeclension(
    // Inanimate feminine nouns ending in -а

    'f',
    'essential',
    [
      ['лампa', 'лампы', 'лампе', 'лампу', false, 'лампе', 'лампой'],
      ['лампы', 'ламп', 'лампам', 'лампы', false, 'лампах', 'лампами'],
    ],
    'lamp',
    'lamps'
  ),

  createNounDeclension(
    // Animate feminine nouns ending in -я

    'fa',
    'essential',
    [
      [
        'героиня',
        'героини',
        'героине',
        'героиню',
        false,
        'героине',
        'героиней',
      ],
      [
        'героини',
        'героинь',
        'героиням',
        'героинь',
        false,
        'героинях',
        'героинями',
      ],
    ],
    'heroine',
    'heroines'
  ),

  createNounDeclension(
    // Inanimate feminine noun ending in -я

    'f',
    'essential',
    [
      ['пилюля', 'пилюли', 'пилюле', 'пилюлю', false, 'пилюле', 'пилюлей'],
      ['пилюли', 'пилюль', 'пилюлям', 'пилюли', false, 'пилюлях', 'пилюлями'],
    ],
    'pill',
    'pills'
  ),

  createNounDeclension(
    // Animate feminine nouns ending in -ия

    'fa',
    'essential',
    [
      ['Мария', 'Марии', 'Марии', 'Марию', false, 'Марии', 'Марией'],
      ['Марии', 'Марий', 'Мариям', 'Марий', false, 'Мариях', 'Мариями'],
    ],
    'Maria',
    'Marias'
  ),

  createNounDeclension(
    // Inanimate feminine nouns ending in -ия

    'f',
    'essential',
    [
      [
        'станция',
        'станции',
        'станции',
        'станцию',
        false,
        'станции',
        'станцией',
      ],
      [
        'станции',
        'станций',
        'станциям',
        'станции',
        false,
        'станциях',
        'станциями',
      ],
    ],
    'station',
    'stations'
  ),

  createNounDeclension(
    // Feminine nouns ending in -ь

    'f',
    'essential',
    [
      [
        'площадь',
        'площади',
        'площади',
        'площадь',
        false,
        'площади',
        'площадью',
      ],
      [
        'площади',
        'площадей',
        'площадям',
        'площади',
        false,
        'площадях',
        'площадями',
      ],
    ],
    'square',
    'squares'
  ),

  createNounDeclension(
    // Feminine nouns ending in -ь

    'f',
    'essential',
    [
      ['ночь', 'ночи', 'ночи', 'ночь', false, 'ночи', 'ночью'],
      ['ночи', 'ночей', 'ночам', 'ночи', false, 'ночах', 'ночами'],
    ],
    'night',
    'nights'
  ),

  createNounDeclension(
    // Feminine noun мать

    'fa',
    'essential',
    [
      ['мать', 'матери', 'матери', 'мать', false, 'матери', 'матерью'],
      ['матери', 'матерей', 'матерям', 'матерей', false, 'матерях', 'матерями'],
    ],
    'mother',
    'mothers'
  ),

  createNounDeclension(
    // Feminine noun дочь

    'fa',
    'essential',
    [
      ['дочь', 'дочери', 'дочери', 'дочь', false, 'дочери', 'дочерью'],
      ['дочери', 'дочерей', 'дочерям', 'дочерей', false, 'дочерях', 'дочерями'],
    ],
    'daughter',
    'daughters'
  ),
];
