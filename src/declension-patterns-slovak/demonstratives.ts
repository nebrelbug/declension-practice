import { createDeclension } from '../utilities';

import type { declensionArray } from '../types';

var všechnoArray: declensionArray = [
  [
    ['všetok', 'všetok', 'všetko', 'všetka'],
    ['všeho', 'všeho', 'všeho', 'vší'],
    ['všemu', 'všemu', 'všemu', 'vší'],
    ['všeho', 'všechen', 'všechno', 'všechnu'],
    ['všechen', 'všechen', 'všechno', 'všechna'],
    ['všem', 'všem', 'všem', 'vší'],
    ['vším', 'vším', 'vším', 'vší'],
  ],
  [
    ['všichni', 'všechny', 'všechna', 'všechny'],
    'všech',
    'všem',
    ['všechny', 'všechny', 'všechna', 'všechny'],
    ['všichni', 'všechny', 'všechna', 'všechny'],
    'všech',
    'všemi',
  ],
];

var toArray: declensionArray = [
  [
    ['ten', 'ten', 'to', 'ta'],
    ['toho', 'toho', 'toho', 'té'],
    ['tomu', 'tomu', 'tomu', 'té'],
    ['toho', 'ten', 'to', 'tu'],
    ['ten', 'ten', 'to', 'ta'],
    ['tom', 'tom', 'tom', 'té'],
    ['tím', 'tím', 'tím', 'tou'],
  ],
  [
    ['ti', 'ty', 'ta', 'ty'],
    'těch',
    'těm',
    ['ty', 'ty', 'ta', 'ty'],
    ['ti', 'ty', 'ta', 'ty'],
    'těch',
    'těmi', // 'těmi/ěma',
  ],
];

export let to = createDeclension(toArray, 'that', 'those');
export let všechno = createDeclension(všechnoArray, 'all');
