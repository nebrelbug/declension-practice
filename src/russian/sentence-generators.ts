import type { comboType, generatedSentences } from '../sentence-tools';

import type { declensionName } from '../types';

import { prepositions } from './prepositions';

import {
  masculineNouns,
  neuterNouns,
  feminineNouns,
  basicAdjectives,
  possessivePronouns,
  nounPossessives,
  to,
} from './index';

import { shuffleArray } from '../utilities';

import {
  filterNouns,
  getPrepositions,
  settingIsOn,
  sentenceGenerator,
} from '../sentence-tools';

export function generateSentences(declensions, settings): generatedSentences {
  let res = [];

  if (settingIsOn(settings, 'phraseOptions', 'basic')) {
    res = res.concat(generateBasicSentences(declensions, settings));
  }

  if (settingIsOn(settings, 'phraseOptions', 'possessive-pronouns')) {
    res = res.concat(generatePossessivePronounSentences(declensions, settings));
  }

  if (settingIsOn(settings, 'phraseOptions', 'noun-possessives')) {
    res = res.concat(generateNounPossessiveSentences(declensions, settings));
  }

  if (settings.randomize) {
    res = shuffleArray(res);
  }

  return res;
}

export function generateBasicSentences(declensions, settings) {
  let res = sentenceGenerator(declensions, settings, (dec: declensionName) => {
    let possiblePreps = getPrepositions(prepositions, dec, settings);

    if (dec === '5')
      return [
        [false],
        filterNouns(masculineNouns, neuterNouns, feminineNouns, settings),
      ] as Array<Array<comboType>>;

    return [
      possiblePreps,
      settings.includeTo ? [to] : ['a'],
      settings.includeAdjectives ? basicAdjectives : [false],
      filterNouns(masculineNouns, neuterNouns, feminineNouns, settings),
    ] as Array<Array<comboType>>;
  });

  return res;
}

export function generatePossessivePronounSentences(declensions, settings) {
  let res = sentenceGenerator(declensions, settings, (dec: declensionName) => {
    let possiblePreps = getPrepositions(prepositions, dec, settings);

    if (dec === '5') return [[]];

    return [
      possiblePreps,
      possessivePronouns,
      filterNouns(masculineNouns, neuterNouns, feminineNouns, settings),
    ] as Array<Array<comboType>>;
  });

  return res;
}

export function generateNounPossessiveSentences(declensions, settings) {
  let res = sentenceGenerator(declensions, settings, (dec: declensionName) => {
    let possiblePreps = getPrepositions(prepositions, dec, settings);

    if (dec === '5') return [[]];

    return [
      possiblePreps,
      nounPossessives,
      filterNouns(masculineNouns, neuterNouns, feminineNouns, settings),
    ] as Array<Array<comboType>>;
  });

  return res;
}
