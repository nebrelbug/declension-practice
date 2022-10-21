import type { preposition } from '../types';

// NOTE: for the time being, I'm just going to be doing key prepositions

let prep2: preposition[] = [
  {
    preposition: 'без',
    case: '2',
    english: 'without',
    default: true,
  },
  {
    preposition: 'от',
    case: '2',
    english: 'from',
  },
];

let prep3: preposition[] = [
  {
    preposition: 'вопреки',
    case: '3',
    english: 'despite',
    default: true,
  },
  {
    preposition: 'к',
    case: '3',
    english: 'to/towards',
  },
];

let prep4: preposition[] = [
  {
    preposition: 'через',
    case: '4',
    english: 'through',
    default: true,
  },
];

let prep4m: preposition[] = [
  {
    preposition: 'за',
    case: '4-M',
    english: '(motion) behind',
    default: true,
  },
];

let prep6: preposition[] = [
  {
    preposition: 'о',
    case: '6',
    english: 'about',
    default: true,
  },
  {
    preposition: 'по',
    case: '6',
    english: 'after',
  },
];

let prep7: preposition[] = [
  {
    preposition: 'с',
    case: '7',
    english: 'with',
    default: true,
  },
  {
    preposition: 'между',
    case: '7',
    english: 'between',
  },
];

export let prepositions = prep2.concat(
  prep3,
  prep4,
  prep4m,
  prep6,
  prep7
) as Array<preposition>;
