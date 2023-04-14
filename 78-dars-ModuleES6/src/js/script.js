'use strict'

import { firstVariable, secVar } from './js'
console.log(firstVariable);
console.log("secVar=> ", secVar);
// import qilish ni ham bir nech usuli bor

// defaultni eksport qilishda to'g'ridan to'gri eksport qilinadi
import logger from './js';

// hammasini bir daniga eksport qilish

import * as allexported from './js'
console.log(allexported.newVar);

console.log(allexported);