import { createDeclension } from '../utilities';

import type {
  declensionArray,
  singleDeclension,
  singleDeclensionArray,
} from '../types';

export var softEndings: declensionArray = [
  [
    'í',
    ['ího', 'ího', 'ího', 'í'],
    ['ímu', 'ímu', 'ímu', 'í'],
    ['ího', 'í', 'í', 'í'],
    'í',
    ['ím', 'ím', 'ím', 'í'],
    ['ím', 'ím', 'ím', 'í'],
  ],
  [
    'í',
    'ích',
    'ím',
    'í',
    'í',
    'ích',
    'ími', // 'ími/íma'
  ],
];

export var hardEndings: declensionArray = [
  [
    ['ý', 'ý', 'é', 'á'],
    ['ého', 'ého', 'ého', 'é'],
    ['ému', 'ému', 'ému', 'é'],
    ['ého', 'ý', 'é', 'ou'],
    ['ý', 'ý', 'é', 'á'],
    ['ém', 'ém', 'ém', 'é'],
    ['ým', 'ým', 'ým', 'ou'],
  ],
  [
    ['í', 'é', 'á', 'é'],
    'ých',
    'ým',
    ['é', 'é', 'á', 'é'],
    ['í', 'é', 'á', 'é'],
    'ých',
    'ými', // 'ými/ýma',
  ],
];

let adjectiveEndings = {
  soft: softEndings,
  hard: hardEndings,
};

function getAdjectiveDeclensions(adjectiveRoot: string, type: 'soft' | 'hard') {
  let endings = adjectiveEndings[type];

  let newOuterArray = endings.map(function (decArray: singleDeclensionArray) {
    let newDeclensionArray = decArray.map(function (
      item: singleDeclension
    ): singleDeclension {
      if (typeof item === 'string') {
        return adjectiveRoot + item;
      } else {
        return item.map(function (innerEnding: string): string {
          return adjectiveRoot + innerEnding;
        }) as singleDeclension;
      }
    });
    return newDeclensionArray;
  });

  return newOuterArray as declensionArray;
}

export let basicAdjectives = [
  createDeclension(getAdjectiveDeclensions('prvn', 'soft'), 'first'),
  createDeclension(getAdjectiveDeclensions('mal', 'hard'), 'small'),
];

export let possessivePronouns = [
  createDeclension(
    [
      [
        ['můj', 'můj', 'moje', 'moje'],
        ['mého', 'mého', 'mého', 'mojí'],
        ['mému', 'mému', 'mému', 'mojí'],
        ['mého', 'můj', 'moje', 'moji'],
        ['můj', 'můj', 'moje', 'moje'],
        ['mém', 'mém', 'mém', 'mojí'],
        ['mým', 'mým', 'mým', 'mojí'],
      ],
      [
        ['moji', 'moje', 'moje', 'moje'],
        'mých',
        'mým',
        'moje',
        ['moji', 'moje', 'moje', 'moje'],
        'mých',
        'mými',
      ],
    ],
    'my'
  ),
  createDeclension(
    [
      [
        ['náš', 'náš', 'naše', 'naše'],
        ['našeho', 'našeho', 'našeho', 'naší'],
        ['našemu', 'našemu', 'našemu', 'naší'],
        ['našeho', 'náš', 'naše', 'naši'],
        ['náš', 'náš', 'naše', 'naše'],
        ['našem', 'našem', 'našem', 'naší'],
        ['naším', 'naším', 'naším', 'naší'],
      ],
      [
        ['naši', 'naše', 'naše', 'naše'],
        'našich',
        'našim',
        'naše',
        ['naši', 'naše', 'naše', 'naše'],
        'našich',
        'našimi',
      ],
    ],
    'our'
  ),
];

export let nounPossessives = [
  createDeclension(
    [
      [
        ['Petrův', 'Petrův', 'Petrovo', 'Petrova'],
        ['Petrova', 'Petrova', 'Petrova', 'Petrovy'],
        ['Petrovu', 'Petrovu', 'Petrovu', 'Petrově'],
        ['Petrova', 'Petrův', 'Petrovo', 'Petrovu'],
        ['Petrův', 'Petrův', 'Petrovo', 'Petrova'],
        'Petrově',
        ['Petrovým', 'Petrovým', 'Petrovým', 'Petrovou'],
      ],
      [
        ['Petrovi', 'Petrovy', 'Petrova', 'Petrovy'],
        'Petrových',
        'Petrovým',
        ['Petrovy', 'Petrovy', 'Petrova', 'Petrovy'],
        ['Petrovi', 'Petrovy', 'Petrova', 'Petrovy'],
        'Petrových',
        'Petrovými',
      ],
    ],
    "Petr's"
  ),
  createDeclension(
    [
      [
        ['Evin', 'Evin', 'Evino', 'Evina'],
        ['Evina', 'Evina', 'Evina', 'Eviny'],
        ['Evinu', 'Evinu', 'Evinu', 'Evině'],
        ['Evina', 'Evin', 'Evino', 'Evinu'],
        ['Evin', 'Evin', 'Evino', 'Evina'],
        'Evině',
        ['Eviným', 'Eviným', 'Eviným', 'Evinou'],
      ],
      [
        ['Evini', 'Eviny', 'Evina', 'Eviny'],
        'Eviných',
        'Eviným',
        ['Eviny', 'Eviny', 'Evina', 'Eviny'],
        ['Evini', 'Eviny', 'Evina', 'Eviny'],
        'Eviných',
        'Evinými',
      ],
    ],
    "Eva's"
  ),
];

export let jenž = createDeclension(
  [
    [
      ['jenž', 'jenž', 'jež', 'jež'],
      ['něhož', 'něhož', 'něhož', 'níž'],
      ['němuž', 'němuž', 'němuž', 'níž'],
      ['něhož', 'nějž', 'něž', 'niž'],
      ['jenž', 'jenž', 'jež', 'jež'],
      ['němž', 'němž', 'němž', 'níž'],
      ['nímž', 'nímž', 'nímž', 'níž'],
    ],
    [
      ['již', 'jež', 'jež', 'jež'],
      'nichž',
      'nimž',
      'něž',
      ['již', 'jež', 'jež', 'jež'],
      'nichž',
      'nimiž', // *dual nimaž
    ],
  ],
  'which'
);
