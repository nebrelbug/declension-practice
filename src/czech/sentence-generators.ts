import { prepositions } from './prepositions';
import { allNouns, basicAdjectives, to, všechno } from './index';
import { cartesian } from '../utilities';

import {
  declensionList,
  genderList,
  getItem,
  declensionToNumber,
  transformArray,
} from '../sentence-tools';

import type { comboType } from '../sentence-tools';

import type { declensionName } from '../types';

type arrayToParse = [boolean, number, ...comboType];

let [první, malý] = basicAdjectives;

let onlyUseDefault = false;

function getPrepositions(desiredCase: declensionName, onlyDefault: boolean) {
  if (desiredCase === '1' || desiredCase === '5') {
    return [''];
  }

  return prepositions.filter(function (prep) {
    if (
      prep.case === desiredCase &&
      (!onlyDefault || (onlyDefault && prep.default))
    ) {
      return true;
    }
  });
}

export function generateSentences(declensions, settings) {
  let res: Array<arrayToParse> = [];

  for (let dec of declensionList) {
    if (declensions[dec]) {
      let declensionNumber = declensionToNumber(dec);

      let possiblePreps = getPrepositions(dec, onlyUseDefault);
      let combos: arrayToParse = cartesian([
        settings.plural ? [true, false] : [false],
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
