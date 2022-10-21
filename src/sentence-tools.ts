import {
  nounDeclension,
  declension,
  declensionArray,
  declensionName,
  gender,
  preposition,
} from './types';

import { cartesian } from './utilities';

var a = require('indefinite');

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

export let genderList = {
  ma: 0,
  mi: 1,
  n: 2,
  f: 3,
  fa: 3,
};

export function declensionToNumber(declensionName: declensionName): number {
  let declensionNumberString = declensionName.replace(/[^1234567]/g, '');
  let declensionNumber = Number(declensionNumberString);
  return declensionNumber;
}

type config = { caseNumber: number; plural: boolean };

export function settingIsOn(settings, field, value) {
  if (settings[field].some((e) => e.value === value)) {
    return true;
  }

  return false;
}

export function filterNouns(
  masculineNouns,
  neuterNouns,
  feminineNouns,
  settings
) {
  let essential = settingIsOn(settings, 'nounPatterns', 'essential');
  let advanced = settingIsOn(settings, 'nounPatterns', 'advanced');
  let irregular = settingIsOn(settings, 'nounPatterns', 'irregular');

  let masculine = settingIsOn(settings, 'gender', 'masculine');
  let neuter = settingIsOn(settings, 'gender', 'neuter');
  let feminine = settingIsOn(settings, 'gender', 'feminine');

  let res = [];
  if (masculine) {
    res = res.concat(masculineNouns);
  }
  if (neuter) {
    res = res.concat(neuterNouns);
  }
  if (feminine) {
    res = res.concat(feminineNouns);
  }

  res = res.filter((e) => {
    if (!essential && e.type === 'essential') return false;
    if (!advanced && e.type === 'advanced') return false;
    if (!irregular && e.type === 'irregular') return false;
    return true;
  });

  return res;
}

export function usePlural(settings): [boolean, boolean] {
  let singular = settingIsOn(settings, 'numberOptions', 'singular');

  let plural = settingIsOn(settings, 'numberOptions', 'plural');

  return [singular, plural];
}

export function usePrepositions(settings): [boolean, boolean] {
  let keyPrepositions = settingIsOn(
    settings,
    'prepositions',
    'key-prepositions'
  );

  let otherPrepositions = settingIsOn(
    settings,
    'prepositions',
    'other-prepositions'
  );

  return [keyPrepositions, otherPrepositions];
}

export function getPrepositions(
  prepositions: Array<preposition>,
  desiredCase: declensionName,
  settings
) {
  if (desiredCase === '1' || desiredCase === '5') {
    return [''];
  }

  let [keyPrepositions, otherPrepositions] = usePrepositions(settings);

  return prepositions.filter(function (prep) {
    if (prep.case === desiredCase) {
      if (prep.default && keyPrepositions) {
        return true;
      }

      if (!prep.default && otherPrepositions) {
        return true;
      }
      return false;
    }
  });
}

export function getItem(
  noun: declensionArray,
  config: config,
  gender: gender
): string {
  let singleDec = config.plural ? noun[1] : noun[0];

  if (singleDec.length > 0) {
    let dec = singleDec[config.caseNumber - 1];

    if (typeof dec === 'string') {
      return dec;
    } else {
      if (config.caseNumber - 1 === 4 && gender === 'fa') {
        return dec[genderList[0]]; // animate form for Russian
      }
      return dec[genderList[gender]];
    }
  }
}

function english(dec: declension, plural: boolean, objective: boolean) {
  if (plural) {
    return dec.pluralDefinition;
  } else {
    return dec.definition;
  }
}

export type comboType =
  | preposition
  | declension
  | nounDeclension
  | 'a'
  | ','
  | false;

export type arrayToParse = [number, ...Array<comboType>];

export type generatedSentences = Array<[string, string]>;

export function transformArray(
  config: config,
  inputArray: Array<comboType>
): [string, string] | false {
  let englishSentence = [];
  let langSentence = [];

  // ts-disable-line
  let noun = inputArray.find(
    (element) => element && (element as nounDeclension).gender
  ) as nounDeclension;

  if (
    !(noun.gender && config.plural && noun.caseArray[1].length === 0) &&
    !(noun.gender && !config.plural && noun.caseArray[0].length === 0)
  ) {
    let gender = (noun as nounDeclension).gender;
    let plural = config.plural;
    let objectiveCase = config.caseNumber !== 1 && config.caseNumber !== 4;
    let useIndefinite = false;

    for (let i = 0; i < inputArray.length; i++) {
      let item = inputArray[i];

      if (item) {
        if (item === 'a') {
          useIndefinite = true;
        } else if (item === ',') {
          englishSentence[englishSentence.length - 1] =
            englishSentence[englishSentence.length - 1] + ',';
          langSentence[langSentence.length - 1] =
            langSentence[langSentence.length - 1] + ',';
        } else if ((item as preposition).preposition) {
          englishSentence.push((item as preposition).english);
          langSentence.push((item as preposition).preposition);
        } else if ((item as declension).caseArray) {
          let newEnglish = english(item as declension, plural, objectiveCase);

          if (useIndefinite && !plural) {
            newEnglish = a(newEnglish);
            useIndefinite = false;
          }

          if ((item as nounDeclension).gender) {
            if (config.caseNumber === 5) {
              newEnglish += '!';
            }
          }

          englishSentence.push(newEnglish);
          langSentence.push(
            getItem((item as declension).caseArray, config, gender)
          );
        }
      }
    }
  }
  if (englishSentence.length && langSentence.length) {
    return [englishSentence.join(' '), langSentence.join(' ')];
  }
  return false;
}

export type fnReturn = (dec: declensionName) => Array<Array<comboType>>;

export function sentenceGenerator(
  declensions,
  settings,
  makeComboArray: fnReturn
) {
  let res: Array<arrayToParse> = [];

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
    let [caseNumber, ...arr] = sent;

    if (singular) {
      let singRes = transformArray(
        { plural: false, caseNumber: caseNumber },
        arr
      );
      if (singRes) {
        result.push(singRes);
      }
    }
    if (plural) {
      let pluralRes = transformArray(
        { plural: true, caseNumber: caseNumber },
        arr
      );
      if (pluralRes) {
        result.push(pluralRes);
      }
    }

    return result;
  }, []);

  return newRes;
}
