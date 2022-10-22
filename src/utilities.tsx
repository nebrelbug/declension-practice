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
  type: 'essential' | 'advanced' | 'irregular' | 'type-1' | 'type-2' | 'type-3',
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
    pluralDefinition: newPlural,
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

export function shuffleArray(array) {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
