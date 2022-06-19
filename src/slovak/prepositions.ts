import type { preposition } from '../types';

let prep2: preposition[] = [
  {
    preposition: 'bez',
    case: '2',
    english: 'without',
    default: true,
  },
];

let prep3: preposition[] = [
  {
    preposition: 'vďaka',
    case: '3',
    english: 'thanks to',
    default: true,
  },
];

let prep4: preposition[] = [
  {
    preposition: 'skrz',
    case: '4',
    english: 'through',
    default: true,
  },
];

let prep4m: preposition[] = [
  {
    preposition: 'za',
    case: '4-M',
    english: '(motion) behind',
    default: true,
  },
];

let prep6: preposition[] = [
  {
    preposition: 'o',
    case: '6',
    english: 'about',
    default: true,
  },
];

let prep7: preposition[] = [
  {
    preposition: 's',
    case: '7',
    english: 'with',
    default: true,
  },
];

export let prepositions = prep2.concat(
  prep3,
  prep4,
  prep4m,
  prep6,
  prep7
) as Array<preposition>;
