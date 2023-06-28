// import assert from "assert";
import { BigNumber } from 'bignumber.js'
import { calc } from "../build/debug.js";

// assert.strictEqual(add(1, 2), 3);
// console.log("ok");

const resUTC = calc()
const offset = new Date().getTimezoneOffset() / 60
const resLocal = calc(0, offset)
console.log('res', [resUTC.base,resLocal.base])

/* Case Set Daate */
new Array(7).fill(0).map((_,i)=>{
    const date = `2023-06-${String(4+i).padStart(2, '0')}`
    const _res = calc(BigNumber(new Date(date).getTime()), offset)
    console.log(date, _res)
})

