export type singleDeclension = string | [string, string, string, string];

export type singleDeclensionArray = [
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension,
  singleDeclension | false,
  singleDeclension,
  singleDeclension
];

export type declensionArray = [
  singleDeclensionArray | [],
  singleDeclensionArray | []
];

export type gender = 'ma' | 'mi' | 'n' | 'f';

export type declensionName = '1' | '2' | '3' | '4' | '4-m' | '5' | '6' | '7';

export type declension = {
  caseArray: declensionArray;
  definition: string;
  plural?: string;
};

export interface nounDeclension extends declension {
  gender: gender;
  plural?: string;
  objectiveCase?: string;
}

export type preposition = {
  preposition: string;
  case: declensionName;
  english: string;
  default?: true;
};
