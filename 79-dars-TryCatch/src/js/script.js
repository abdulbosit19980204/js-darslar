'use strict'

try {
    console.log("Hello fuction is start running");
    console.log(a);
    console.log("Protcessing...");
} catch (error) {
    console.log("there is an error about a is don't find");
    // console.log(error);
    console.log(error.name);
    console.log(error.message);
}

console.log("try catch is done");

import { btnfunc } from "./js";
btnfunc()