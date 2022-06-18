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

import type { comboType } from '../sentence-tools';

type arrayToParse = [number, ...Array<comboType>];

let onlyUseDefault = false;

export function generateSentences(declensions, settings) {
  let res: Array<arrayToParse> = [];

  for (let dec of declensionList) {
    if (declensions[dec]) {
      let declensionNumber = declensionToNumber(dec);

      let possiblePreps = getPrepositions(prepositions, dec, onlyUseDefault);
      let combos: arrayToParse = cartesian([
        [declensionNumber],
        possiblePreps,
        settings.includeTo ? [to] : ['a'],
        settings.includeAdjectives ? basicAdjectives : [false],
        // [...masculineNouns, ...neuterNouns, ...feminineNouns],
        filterNouns(masculineNouns, neuterNouns, feminineNouns, settings),
      ]);

      res = res.concat(combos);
    }
  }

  let singular = usePlural(settings)[0];
  let plural = usePlural(settings)[1];

  let newRes = res.reduce(function (result, sent) {
    let [caseNumber, ...array] = sent;

    if (singular) {
      let [englishSingularSentence, langSingularSentence] = transformArray(
        { plural: false, caseNumber: caseNumber },
        array
      );
      result.push([englishSingularSentence, langSingularSentence]);
    }
    if (plural) {
      let [englishSingularSentence, langSingularSentence] = transformArray(
        { plural: true, caseNumber: caseNumber },
        array
      );
      result.push([englishSingularSentence, langSingularSentence]);
    }

    return result;
  }, []);

  if (settings.randomize) {
    newRes = shuffleArray(newRes);
  }

  return newRes;
}
