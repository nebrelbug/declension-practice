import type {
  declensionArray,
  gender,
  declension,
  nounDeclension,
} from './types';

export function createDeclension(
  caseArray: declensionArray,
  definition: string,
  plural?: string
): declension {
  return {
    caseArray: caseArray,
    definition: definition,
    plural: plural || definition,
  };
}

export function createNounDeclension(
  gender: gender,
  caseArray: declensionArray,
  definition: string,
  plural?: string,
  objectiveCase?: string
): nounDeclension {
  let newPlural = plural || definition;

  return {
    gender: gender,
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
