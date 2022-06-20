import { createDeclension } from '../utilities';

export let to = createDeclension(
  [
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
  ],
  'that',
  'those'
);
