import { createNounDeclension } from '../utilities';

export let neuterNouns = [
  createNounDeclension(
    // Neuter nouns ending in -o

    'n',
    'type-1',
    [
      ['окно', 'окна', 'окну', 'окно', false, 'окне', 'окном'],
      ['окна', 'окон', 'окнам', 'окна', false, 'окнах', 'окнами'],
    ],
    'window',
    'windows'
  ),

  createNounDeclension(
    // Neuter nouns ending in -е

    'n',
    'type-1',
    [
      ['море', 'моря', 'морю', 'море', false, 'море', 'морем'],
      ['моря', 'морей', 'морям', 'моря', false, 'морях', 'морями'],
    ],
    'sea',
    'seas'
  ),

  createNounDeclension(
    // Neuter nouns ending in -ё

    'n',
    'type-1',
    [
      ['копьё', 'копья', 'копью', 'копьё', false, 'копье', 'копьём'],
      ['копья', 'копий', 'копьям', 'копья', false, 'копьями', 'копьях'],
    ],
    'spear',
    'spears'
  ),

  createNounDeclension(
    // Neuter nouns ending in -ие

    'n',
    'type-1',
    [
      ['здание', 'здания', 'зданию', 'здание', false, 'здании', 'зданием'],
      ['здания', 'зданий', 'зданиям', 'здания', false, 'зданиях', 'зданиями'],
    ],
    'building',
    'buildings'
  ),

  createNounDeclension(
    // Neuter nouns ending in -мя

    'n',
    'type-3',
    [
      ['имя', 'имени', 'имени', 'имя', false, 'имени', 'именем'],
      ['имена', 'имён', 'именам', 'имена', false, 'именах', 'именами'],
    ],
    'name',
    'names'
  ),
];
