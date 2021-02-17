interface AddFn {
    (a: number, b: number): number
}

const addFn: AddFn = (a: number, b: number): number => a + b;

console.log(addFn(1, 2));
