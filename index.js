"use strict";
import fib from "./fib.js";
const i_1 = document.querySelector('#i_1');
const i_2 = document.querySelector('#i_2');
i_2.size = i_2.placeholder.length;
i_1.addEventListener('input', () => i_2.value = fib(+i_1.value));
i_1.addEventListener('input', () => {if(fib(+i_1.value).length > i_2.size) i_2.size = fib(+i_1.value).length});
