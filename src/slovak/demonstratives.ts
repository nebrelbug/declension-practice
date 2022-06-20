import { createDeclension } from '../utilities';

import type { declensionArray } from '../types';

var toArray: declensionArray = [
  [
    ['ten', 'ten', 'to', 'tá'],
    ['toho', 'toho', 'toho', 'tej'],
    ['tomu', 'tomu', 'tomu', 'tej'],
    ['toho', 'ten', 'to', 'tú'],
    false,
    ['tom', 'tom', 'tom', 'tej'],
    ['tým', 'tým', 'tým', 'tou'],
  ],
  [
    ['tí', 'tie', 'tie', 'tie'],
    'tých',
    'tým',
    ['tých', 'tie', 'tie', 'tie'],
    false,
    'tých',
    'tými',
  ],
];

export let to = createDeclension(toArray, 'that', 'those');
