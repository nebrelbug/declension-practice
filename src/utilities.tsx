import type {
  declensionArray,
  gender,
  declension,
  nounDeclension,
} from './types';

import React from 'react';

export function createDeclension(
  caseArray: declensionArray,
  definition: string,
  plural?: string
): declension {
  return {
    caseArray: caseArray,
    definition: definition,
    pluralDefinition: plural || definition,
  };
}

export function createNounDeclension(
  gender: gender,
  type: 'essential' | 'advanced' | 'irregular',
  caseArray: declensionArray,
  definition: string,
  plural?: string,
  objectiveCase?: string
): nounDeclension {
  let newPlural = plural || definition;

  return {
    gender: gender,
    type: type,
    caseArray: caseArray,
    definition: definition,
    plural: newPlural,
    objectiveCase: objectiveCase || definition,
  };
}

export const cartesian = (a) =>
  a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));

export function shuffle(array) {
  let res = [...array];
  for (let i = res.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [res[i], res[j]] = [res[j], res[i]];
  }
  return res;
}

export function arrayLoop(arr) {
  return (
    <>
      {Object.keys(arr).map((i) => (
        <p key={i}>{arr[i][0] + ' - ' + arr[i][1]}</p>
      ))}
    </>
  );
}
