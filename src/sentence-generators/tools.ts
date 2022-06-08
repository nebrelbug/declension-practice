import { prepositions } from '../prepositions';

import {
  nounDeclension,
  declensionArray,
  declensionName,
  gender,
} from '../types';

export let declensionList: Array<declensionName> = [
  '1',
  '2',
  '3',
  '4',
  '4-m',
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

type config = { caseNumber: number; gender: gender; plural: boolean };

export function getItem(noun: declensionArray, config: config): string {
  // console.log('noun: ' + noun);
  let singleDec = config.plural ? noun[1] : noun[0];

  // console.log('single: ' + singleDec);
  let dec = singleDec[config.caseNumber - 1];

  // console.log('dec: ' + dec);

  if (typeof dec === 'string') {
    return dec;
  } else {
    // console.log(dec);
    return dec[genderList[config.gender]];
  }
}

export function transformArray(
  config: config,
  inputArray: Array<declensionArray>
): Array<string> {
  let r = [];
  for (let i = 0; i < inputArray.length; i++) {
    r[i] = getItem(inputArray[i], config);
  }
  return r;
}
