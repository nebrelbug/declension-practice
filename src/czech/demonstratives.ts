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

export let jenž = createDeclension(
  [
    [
      ['jenž', 'jenž', 'jež', 'jež'],
      ['jehož', 'jehož', 'jehož', 'jíž'],
      ['jemuž', 'jemuž', 'jemuž', 'jíž'],
      ['jehož', 'jejž', 'jež', 'již'],
      ['jenž', 'jenž', 'jež', 'jež'],
      ['němž', 'němž', 'němž', 'níž'],
      ['jímž', 'jímž', 'jímž', 'jíž'],
    ],
    [
      ['již', 'jež', 'jež', 'jež'],
      'jichž',
      'jimž',
      'jež',
      ['již', 'jež', 'jež', 'jež'],
      'nichž',
      'jimiž', // *dual 'jimaž'
    ],
  ],
  'that',
  'those'
);
