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

export let první = createDeclension(
  getAdjectiveDeclensions('cudz', 'soft'),
  'first'
);
export let malý = createDeclension(
  getAdjectiveDeclensions('mal', 'hard'),
  'small'
);
