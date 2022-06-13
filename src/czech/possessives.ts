import { createDeclension } from '../utilities';

export let můjCZ = createDeclension(
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
);

export let nášCZ = createDeclension(
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
);
