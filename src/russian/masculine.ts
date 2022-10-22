import { createNounDeclension } from '../utilities';

export let masculineNouns = [
  createNounDeclension(
    // Animate masculine nouns ending in a consonant

    'ma',
    'type-1',
    [
      [
        'студент',
        'студента',
        'студенту',
        'студента',
        false,
        'студенте',
        'студентом',
      ],
      [
        'студенты',
        'студентов',
        'студентам',
        'студентов',
        false,
        'студентах',
        'студентами',
      ],
    ],
    'student',
    'students'
  ),

  createNounDeclension(
    // Inanimate masculine nouns ending in a consonant

    'mi',
    'type-1',
    [
      ['диплом', 'диплома', 'диплому', 'диплом', false, 'дипломе', 'дипломом'],
      [
        'дипломы',
        'дипломов',
        'дипломам',
        'дипломы',
        false,
        'дипломах',
        'дипломами',
      ],
    ],
    'diploma',
    'diplomas'
  ),

  createNounDeclension(
    // Animate masculine nouns ending in -ь

    'ma',
    'type-1',
    [
      ['житель', 'жителя', 'жителю', 'жителя', false, 'жителе', 'жителем'],
      ['жители', 'жителей', 'жителям', 'жителей', false, 'жителях', 'жителями'],
    ],
    'citizen',
    'citizens'
  ),

  createNounDeclension(
    // Inanimate masculine nouns ending in -ь

    'mi',
    'type-1',
    [
      ['рубль', 'рубль', 'рублю', 'рубль', false, 'рубле', 'рублём'],
      ['рубли', 'рублей', 'рублям', 'рубли', false, 'рублях', 'рублями'],
    ],
    'ruble',
    'rubles'
  ),

  createNounDeclension(
    // Animate masculine noun ending in -й

    'ma',
    'type-1',
    [
      ['герой', 'героя', 'герою', 'героя', false, 'герое', 'героем'],
      ['герои', 'героев', 'героям', 'героев', false, 'героях', 'героями'],
    ],
    'hero',
    'heroes'
  ),

  createNounDeclension(
    // Inanimate masculine noun ending in -й

    'mi',
    'type-1',
    [
      ['музей', 'музея', 'музею', 'музей', false, 'музее', 'музеем'],
      ['музеи', 'музеев', 'музеям', 'музеи', false, 'музеях', 'музеями'],
    ],
    'museum',
    'museums'
  ),

  createNounDeclension(
    // Animate masculine noun ending in -ий

    'ma',
    'type-1',
    [
      [
        'Василий',
        'Василия',
        'Василию',
        'Василия',
        false,
        'Василии',
        'Василием',
      ],
      [
        'Василии',
        'Василиев',
        'Василиям',
        'Василиев',
        false,
        'Василиях',
        'Василиями',
      ],
    ],
    'Vasily',
    'Vasilys'
  ),

  createNounDeclension(
    // Inanimate masculine noun ending in -ий

    'mi',
    'type-1',
    [
      [
        'сценарий',
        'сценария',
        'сценарию',
        'сценарий',
        false,
        'сценарии',
        'сценарием',
      ],
      [
        'сценарии',
        'сценариев',
        'сценариям',
        'сценарии',
        false,
        'сценариях',
        'сценариями',
      ],
    ],
    'script',
    'scripts'
  ),

  createNounDeclension(
    // Masculine nouns ending in -а

    'ma',
    'type-2',
    [
      ['папа', 'папы', 'папе', 'папу', false, 'папе', 'папой'],
      ['папы', 'пап', 'папам', 'пап', false, 'папах', 'папами'],
    ],
    'papa',
    'papas'
  ),

  createNounDeclension(
    // Мasculine nouns ending in -я

    'ma',
    'type-2',
    [
      ['дядя', 'дяди', 'дяде', 'дядю', false, 'дяде', 'дядей'],
      ['папи', 'дядь', 'дядям', 'дядь', false, 'дядях', 'дядями'],
    ],
    'uncle',
    'uncles'
  ),

  createNounDeclension(
    // Masculine noun путь

    'mi',
    'type-3',
    [
      ['путь', 'пути', 'пути', 'путь', false, 'пути', 'путём'],
      ['пути', 'путей', 'путям', 'пути', false, 'путях', 'путями'],
    ],
    'path',
    'paths'
  ),
];
