function getKey<O extends object, K extends keyof O>(o: O, k: K) {
    return o[k];
}

const testObj = {
    a: '1',
    b: 2,
    1: 'number'
};

console.log(getKey(testObj, 'a'));
console.log(getKey(testObj, 1));

// * TS2345: Argument of type '"key"' is not assignable to parameter of type '"a" | "b" | 1'
// console.log(getKey(testObj, 'key'));
