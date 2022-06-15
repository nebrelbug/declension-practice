import { pán, hrad, muž, soudce, stroj, předseda } from './masculine';
import { mesto, pole, dievča, námestie, múzeum, jablko } from './neuter';
import { žena, růže, píseň, kost } from './feminine';
import { prepositions } from './prepositions';
import { první, malý } from './adjectives';
import { to, všechno } from './demonstratives';
import { nounDeclension, declensionArray, gender } from '../types';

export let masculineNouns = [pán, hrad, muž, soudce, stroj, předseda];
export let neuterNouns = [mesto, pole, dievča, námestie, múzeum, jablko];
export let feminineNouns = [žena, růže, píseň, kost];
export let allNouns = masculineNouns.concat(neuterNouns).concat(feminineNouns);

export let basicAdjectives = [první, malý];

export { prepositions, to, všechno };
