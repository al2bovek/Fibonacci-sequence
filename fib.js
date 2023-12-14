"use strict";
export default function fib(n) {
    let f = [0, 1];
    if (n <= 0) return f[0];
    for (let i = 2; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
        if(f.length > 34) break;
    }
    return '('+ f + ')';
}