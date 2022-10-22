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

export type gender = 'ma' | 'mi' | 'n' | 'f' | 'fa';
export type nounType =
  | 'essential'
  | 'advanced'
  | 'irregular'
  | 'type-1'
  | 'type-2'
  | 'type-3';

export type declensionName = '1' | '2' | '3' | '4' | '4-M' | '5' | '6' | '7';

export type declension = {
  caseArray: declensionArray;
  definition: string;
  type?: nounType;
  pluralDefinition?: string;
  objectiveCase?: string;
};

export interface nounDeclension extends declension {
  gender: gender;
}

export type preposition = {
  preposition: string;
  case: declensionName;
  english: string;
  default?: true;
};
