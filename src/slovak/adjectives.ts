import { createDeclension } from '../utilities';

import type {
  declensionArray,
  singleDeclension,
  singleDeclensionArray,
} from '../types';

export var softEndings: declensionArray = [
  [
    ['í', 'í', 'ie', 'ia'],
    ['ieho', 'ieho', 'ieho', 'ia'],
    ['iemu', 'iemu', 'iemu', 'ej'],
    ['ieho', 'í', 'ie', 'iu'],
    false,
    ['om', 'om', 'om', 'ej'],
    ['ím', 'ím', 'ím', 'ou'],
  ],
  [
    ['í', 'ie', 'ie', 'ie'],
    'ích',
    'ím',
    ['ích', 'ie', 'ie', 'ie'],
    false,
    'ích',
    'ími',
  ],
];

export var hardEndings: declensionArray = [
  [
    ['ý', 'ý', 'é', 'á'],
    ['ého', 'ého', 'ého', 'ej'],
    ['ému', 'ému', 'ému', 'ej'],
    ['ého', 'ý', 'é', 'ú'],
    false,
    ['om', 'om', 'om', 'ej'],
    ['ým', 'ým', 'ým', 'ou'],
  ],
  [
    ['í', 'é', 'é', 'é'],
    'ých',
    'ým',
    ['ých', 'é', 'é', 'é'],
    false,
    'ých',
    'ými',
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
      if (typeof item === 'boolean') {
        return item;
      } else if (typeof item === 'string') {
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
  createDeclension(getAdjectiveDeclensions('cudz', 'soft'), 'first'),
  createDeclension(getAdjectiveDeclensions('mal', 'hard'), 'small'),
];

export let possessivePronouns = [
  createDeclension(
    [
      [
        ['môj', 'môj', 'moje', 'moja'],
        ['môjho', 'môjho', 'môjho', 'mojej'],
        ['môjmu', 'môjmu', 'môjmu', 'mojej'],
        ['môjho', 'môj', 'moje', 'moju'],
        false,
        ['mojom', 'mojom', 'mojom', 'mojej'],
        ['mojím', 'mojím', 'mojím', 'mojou'],
      ],
      [
        ['moji', 'moje', 'moje', 'moje'],
        'mojich',
        'mojim',
        ['mojich', 'moje', 'moje', 'moje'],
        false,
        'mojich',
        'mojimi',
      ],
    ],
    'my'
  ),
  createDeclension(
    [
      // náš follows môj, just with an "á" where môj has an "ô"
      [
        ['náš', 'náš', 'naše', 'naša'],
        ['nášho', 'nášho', 'nášho', 'našej'],
        ['nášmu', 'nášmu', 'nášmu', 'našej'],
        ['nášho', 'náš', 'naše', 'našu'],
        false,
        ['našom', 'našom', 'našom', 'našej'],
        ['naším', 'naším', 'naším', 'našou'],
      ],
      [
        ['naši', 'naše', 'naše', 'naše'],
        'našich',
        'našim',
        ['našich', 'naše', 'naše', 'naše'],
        false,
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
        ['Petrov', 'Petrov', 'Petrovo', 'Petrova'],
        ['Petrova', 'Petrova', 'Petrova', 'Petrovy'],
        ['Petrovu', 'Petrovu', 'Petrovu', 'Petrově'],
        ['Petrova', 'Petrův', 'Petrovo', 'Petrovu'],
        false,
        'Petrově',
        ['Petrovým', 'Petrovým', 'Petrovým', 'Petrovou'],
      ],
      [
        ['Petrovi', 'Petrovy', 'Petrova', 'Petrovy'],
        'Petrových',
        'Petrovým',
        ['Petrovy', 'Petrovy', 'Petrova', 'Petrovy'],
        false,
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
        false,
        'Evině',
        ['Eviným', 'Eviným', 'Eviným', 'Evinou'],
      ],
      [
        ['Evini', 'Eviny', 'Evina', 'Eviny'],
        'Eviných',
        'Eviným',
        ['Eviny', 'Eviny', 'Evina', 'Eviny'],
        false,
        'Eviných',
        'Evinými',
      ],
    ],
    "Eva's"
  ),
];
