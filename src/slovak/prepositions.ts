import type { preposition } from '../types';

// NOTE: for the time being, I'm just going to be doing key prepositions

let prep2: preposition[] = [
  {
    preposition: 'bez',
    case: '2',
    english: 'without',
    default: true,
  },
  {
    preposition: 'počas',
    case: '2',
    english: 'during',
  },
  {
    preposition: 'blízko',
    case: '2',
    english: 'near',
  },
  {
    preposition: 'do',
    case: '2',
    english: 'to/into',
  },
  {
    preposition: 'namiesto',
    case: '2',
    english: 'instead of',
  },
  {
    preposition: 'od',
    case: '2',
    english: 'from',
  },
  {
    preposition: 'ohľadom',
    case: '2',
    english: 'concerning',
  },
  {
    preposition: 'okolo',
    case: '2',
    english: 'around (okolo)',
  },
  {
    preposition: 'pozdĺž',
    case: '2',
    english: 'along',
  },
  {
    preposition: 'podľa',
    case: '2',
    english: 'according to',
  },
  {
    preposition: 'prostredníctvom',
    case: '2',
    english: 'by the means of',
  },
  {
    preposition: 'u',
    case: '2',
    english: 'at/by',
  },
  {
    preposition: 'uprostred',
    case: '2',
    english: 'in the middle of',
  },
  {
    preposition: 'vrátane',
    case: '2',
    english: 'including',
  },
  {
    preposition: 'vedľa',
    case: '2',
    english: 'next to',
  },
  {
    preposition: 'z',
    case: '2',
    english: 'from/out of',
  },
  {
    preposition: 'za',
    case: '2',
    english: 'during the time of',
  },
];

let prep3: preposition[] = [
  {
    preposition: 'vďaka',
    case: '3',
    english: 'thanks to',
    default: true,
  },
  {
    preposition: 'proti',
    case: '3',
    english: 'against',
  },
  {
    preposition: 'k(u)',
    case: '3',
    english: 'to/towards',
  },
  {
    preposition: 'kvôli',
    case: '3',
    english: 'because of',
  },
  {
    preposition: 'naproti',
    case: '3',
    english: 'opposite',
  },
  {
    preposition: 'napriek',
    case: '3',
    english: 'despite',
  },
  {
    preposition: 'oproti',
    case: '3',
    english: 'compared to',
  },
  {
    preposition: 'voči',
    case: '3',
    english: 'towards/with respect to',
  },
];

let prep4: preposition[] = [
  {
    preposition: 'skrz',
    case: '4',
    english: 'through',
    default: true,
  },
  {
    preposition: 'mimo',
    case: '4',
    english: 'outside/except for',
  },
  {
    preposition: 'na',
    case: '4',
    english: 'for (purpose/time)',
  },
  {
    preposition: 'ob',
    case: '4',
    english: 'every 2nd',
  },
  {
    preposition: 'pre',
    case: '4',
    english: 'for the benefit of',
  },
  {
    preposition: 'cez',
    case: '4',
    english: 'over/via',
  },
  {
    preposition: 'za',
    case: '4',
    english: 'on behalf of',
  },
];

let prep4m: preposition[] = [
  {
    preposition: 'za',
    case: '4-M',
    english: '(motion) behind',
    default: true,
  },
  {
    preposition: 'medzi',
    case: '4-M',
    english: '(motion) between',
  },
  {
    preposition: 'na',
    case: '4-M',
    english: '(motion) on',
  },
  {
    preposition: 'nad',
    case: '4-M',
    english: '(motion) over/above',
  },
  {
    preposition: 'pod',
    case: '4-M',
    english: '(motion) under/below',
  },
  {
    preposition: 'pred',
    case: '4-M',
    english: '(motion) in front of',
  },
];

let prep6: preposition[] = [
  {
    preposition: 'o',
    case: '6',
    english: 'about',
    default: true,
  },
  {
    preposition: 'na',
    case: '6',
    english: 'on/at',
  },
  {
    preposition: 'po',
    case: '6',
    english: 'after',
  },
  {
    preposition: 'pri',
    case: '6',
    english: 'at/during',
  },
  {
    preposition: 'v',
    case: '6',
    english: 'in',
  },
];

let prep7: preposition[] = [
  {
    preposition: 's',
    case: '7',
    english: 'with',
    default: true,
  },
  {
    preposition: 'medzi',
    case: '7',
    english: 'between',
  },
  {
    preposition: 'nad',
    case: '7',
    english: 'over/above',
  },
  {
    preposition: 'pod',
    case: '7',
    english: 'under/below',
  },
  {
    preposition: 'pred',
    case: '7',
    english: 'in front of',
  },
  {
    preposition: 'za',
    case: '7',
    english: 'behind',
  },
];

export let prepositions = prep2.concat(
  prep3,
  prep4,
  prep4m,
  prep6,
  prep7
) as Array<preposition>;
