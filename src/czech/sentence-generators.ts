import { prepositions } from './prepositions';
import {
  masculineNouns,
  neuterNouns,
  feminineNouns,
  basicAdjectives,
  to,
} from './index';
import { cartesian, shuffleArray } from '../utilities';

import {
  declensionList,
  filterNouns,
  usePlural,
  getPrepositions,
  declensionToNumber,
  transformArray,
} from '../sentence-tools';

import type {
  comboType,
  arrayToParse,
  generatedSentences,
} from '../sentence-tools';

import type { declensionName } from '../types';

export function generateSentences(declensions, settings): generatedSentences {
  let res = [];
  res = res.concat(generateBasicSentences(declensions, settings));

  if (settings.randomize) {
    res = shuffleArray(res);
  }

  return res;
}

export function generateBasicSentences(declensions, settings) {
  let res = sentenceGenerator(
    declensions,
    settings,
    function (dec: declensionName) {
      let possiblePreps = getPrepositions(prepositions, dec, settings);

      return [
        possiblePreps as Array<preposition>,
        settings.includeTo ? [to] : ['a'],
        settings.includeAdjectives ? basicAdjectives : [false],
        filterNouns(masculineNouns, neuterNouns, feminineNouns, settings),
      ] as Array<comboType>;
    }
  );

  return res;
}

type fnReturn = (dec: declensionName) => Array<comboType>;

export function sentenceGenerator(
  declensions,
  settings,
  makeComboArray: fnReturn
) {
  let res: Array<arrayToParse> = [];

  let adjectives = [];

  for (let dec of declensionList) {
    if (declensions[dec]) {
      let declensionNumber = declensionToNumber(dec);

      let comboArray = makeComboArray(dec as declensionName);

      let combos: arrayToParse = cartesian([[declensionNumber], ...comboArray]);

      res = res.concat(combos);
    }
  }

  let singular = usePlural(settings)[0];
  let plural = usePlural(settings)[1];

  let newRes = res.reduce(function (result, sent) {
    let [caseNumber, ...array] = sent;

    if (singular) {
      result.push(
        transformArray({ plural: false, caseNumber: caseNumber }, array)
      );
    }
    if (plural) {
      result.push(
        transformArray({ plural: true, caseNumber: caseNumber }, array)
      );
    }

    return result;
  }, []);

  return newRes;
}
