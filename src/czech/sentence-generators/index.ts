import { prepositions } from '../prepositions';
import { allNouns, basicAdjectives, to, všechno } from '../index';
import { cartesian } from '../../utilities';

import {
  declensionList,
  genderList,
  getItem,
  declensionToNumber,
  getPrepositions,
  transformArray,
} from './tools';

import type { comboType } from '../../types';

let [první, malý] = basicAdjectives;

let onlyUseDefault = false;

export function generateSentences(declensions, settings) {
  let res: Array<Array<comboType>> = [];

  for (let dec of declensionList) {
    if (declensions[dec]) {
      let declensionNumber = declensionToNumber(dec);

      let possiblePreps = getPrepositions(dec, onlyUseDefault);
      let combos: comboType = cartesian([
        [true, false],
        [declensionNumber],
        possiblePreps,
        [to],
        basicAdjectives,
        allNouns,
      ]);

      res = res.concat(combos);
    }
  }

  let newRes = res.map(function (sent) {
    let [plural, caseNumber, ...array] = sent;

    let [englishSentence, langSentence] = transformArray(
      { plural: plural, caseNumber: caseNumber },
      array
    );

    return [englishSentence, langSentence];
  });

  return newRes;
}
