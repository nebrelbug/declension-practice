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
