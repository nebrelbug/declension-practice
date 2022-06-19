import type { comboType, generatedSentences } from '../sentence-tools';

import type { declensionName } from '../types';

import { prepositions } from './prepositions';

import {
  masculineNouns,
  neuterNouns,
  feminineNouns,
  basicAdjectives,
  to,
} from './index';

import { shuffleArray } from '../utilities';

import {
  filterNouns,
  getPrepositions,
  sentenceGenerator,
} from '../sentence-tools';

export function generateSentences(declensions, settings): generatedSentences {
  let res = [];
  res = res.concat(generateBasicSentences(declensions, settings));

  if (settings.randomize) {
    res = shuffleArray(res);
  }

  return res;
}

export function generateBasicSentences(declensions, settings) {
  let res = sentenceGenerator(declensions, settings, (dec: declensionName) => {
    let possiblePreps = getPrepositions(prepositions, dec, settings);

    return [
      possiblePreps,
      settings.includeTo ? [to] : ['a'],
      settings.includeAdjectives ? basicAdjectives : [false],
      filterNouns(masculineNouns, neuterNouns, feminineNouns, settings),
    ] as Array<Array<comboType>>;
  });

  return res;
}
