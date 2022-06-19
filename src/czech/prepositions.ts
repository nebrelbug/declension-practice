import type { preposition } from '../types';

let prep2: preposition[] = [
  {
    preposition: 'bez',
    case: '2',
    english: 'without',
    default: true,
  },
  {
    preposition: 'během',
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
    preposition: 'kolem',
    case: '2',
    english: 'around (kolem)',
  },
  {
    preposition: 'místo',
    case: '2',
    english: 'instead of',
  },
  {
    preposition: 'od',
    case: '2',
    english: 'from',
  },
  {
    preposition: 'ohledně',
    case: '2',
    english: 'concerning',
  },
  {
    preposition: 'okolo',
    case: '2',
    english: 'around (okolo)',
  },
  {
    preposition: 'podél',
    case: '2',
    english: 'along',
  },
  {
    preposition: 'podle',
    case: '2',
    english: 'according to',
  },
  {
    preposition: 'pomocí',
    case: '2',
    english: 'with help of',
  },
  {
    preposition: 'prostřednictvím',
    case: '2',
    english: 'by the means of',
  },
  {
    preposition: 'stran',
    case: '2',
    english: 'of party/group',
  },
  {
    preposition: 'u',
    case: '2',
    english: 'at/by',
  },
  {
    preposition: 'uprostřed',
    case: '2',
    english: 'in the middle of',
  },
  {
    preposition: 'včetně',
    case: '2',
    english: 'including',
  },
  {
    preposition: 'vedle',
    case: '2',
    english: 'next to',
  },
  {
    preposition: 'z(e)',
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
    preposition: 'díky',
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
    preposition: 'k(e)',
    case: '3',
    english: 'to/towards',
  },
];

let prep4: preposition[] = [
  {
    preposition: 'skrze',
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
