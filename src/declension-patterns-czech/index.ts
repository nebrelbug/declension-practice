import { pán, hrad, muž, soudce, stroj, předseda } from './masculine';
import { město, vízum, moře, stavení, kuře } from './neuter';
import { žena, růže, píseň, kost } from './feminine';
import { prepositions } from '../prepositions';
import { první, malý } from './adjectives';
import { to, všechno } from './demonstratives';
import { nounDeclension, declensionArray, gender } from '../types';

export let masculineNouns = [pán, hrad, muž, soudce, stroj, předseda];
export let neuterNouns = [město, vízum, moře, stavení, kuře];
export let feminineNouns = [žena, růže, píseň, kost];
export let allNouns = masculineNouns.concat(neuterNouns).concat(feminineNouns);

export let basicAdjectives = [první, malý];

export { prepositions, to, všechno };
