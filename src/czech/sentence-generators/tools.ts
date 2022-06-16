import { prepositions } from '../prepositions';

import {
  nounDeclension,
  declension,
  declensionArray,
  declensionName,
  gender,
  preposition,
} from '../../types';

export let declensionList: Array<declensionName> = [
  '1',
  '2',
  '3',
  '4',
  '4-M',
  '5',
  '6',
  '7',
];

export function getPrepositions(
  desiredCase: declensionName,
  onlyDefault: boolean
) {
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

export let genderList = {
  ma: 0,
  mi: 1,
  n: 2,
  f: 3,
};

export function declensionToNumber(declensionName: declensionName): number {
  let declensionNumberString = declensionName.replace(/[^1234567]/g, '');
  let declensionNumber = Number(declensionNumberString);
  return declensionNumber;
}

type config = { caseNumber: number; plural: boolean };

export function getItem(
  noun: declensionArray,
  config: config,
  gender: gender
): string {
  let singleDec = config.plural ? noun[1] : noun[0];

  let dec = singleDec[config.caseNumber - 1];

  if (typeof dec === 'string') {
    return dec;
  } else {
    return dec[genderList[gender]];
  }
}

function english(dec: declension, plural: boolean, objective: boolean) {
  if (plural) {
    return dec.pluralDefinition;
  } else {
    return dec.definition;
  }
}

export type comboType = preposition | '' | declension | nounDeclension;

export function transformArray(
  config: config,
  inputArray: Array<comboType>
): [string, string] {
  let englishSentence = [];
  let langSentence = [];
  console.log(inputArray);

  // ts-disable-line
  let noun = inputArray.find(
    (element) => element && (element as nounDeclension).gender
  );

  let gender = (noun as nounDeclension).gender;
  let plural = config.plural;
  let objectiveCase = config.caseNumber !== 1 && config.caseNumber !== 4;

  for (let i = 0; i < inputArray.length; i++) {
    let item = inputArray[i];

    if (item) {
      if ((item as preposition).preposition) {
        englishSentence.push((item as preposition).english);
        langSentence.push((item as preposition).preposition);
      } else if ((item as declension).caseArray) {
        englishSentence.push(
          english(item as declension, plural, objectiveCase)
        );
        langSentence.push(
          getItem((item as declension).caseArray, config, gender)
        );
      }
    }
  }
  return [englishSentence.join(' '), langSentence.join(' ')];
}
