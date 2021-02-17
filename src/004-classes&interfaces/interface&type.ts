// 1, inline type

type FirstType = number;

interface FirstInterface {
    field: number
}

// 2, make sure that extending is assignable to extension
type SecondType1 = {
    good(v: string): string,
    bad(v: string): string,
};

type SecondType2 = SecondType1 & { bad(v: string): string };

type SecondType3 = SecondType1 & { bad(v: number): number };

const v1: SecondType2 = {
    good(v: string): string {
        return v;
    },
    bad(v: string): string {
        return v;
    }
};

// const v2: SecondType3 = {
//     good(v: string): string {
//         return v;
//     },
// * TS2322: Type '(v: number) => number' is not assignable to type '((v: string) => string) & ((v: number) => number)'.
// bad(v: number): number {
//     return v;
// }
// };

interface SecondInterface1 {
    good(v: number): string,

    bad(v: string): string,
}

// interface SecondInterface2 extends SecondInterface1{
//     good(v: string | number): string,
// * TS2430: Interface 'SecondInterface2' incorrectly extends interface 'SecondInterface1'.
// * Types of property 'bad' are incompatible.
// * Type '(v: number) => string' is not assignable to type '(v: string) => string'.
//     bad(v: number): string,
// }

// 3, declaration merging
// type ThirdType = { // * TS2300: Duplicate identifier 'ThirdType'.
//     a: string
// };
// type ThirdType  = { // * TS2300: Duplicate identifier 'ThirdType'.
//     b: string
// };

interface ThirdInterface {
    a: string
}

interface ThirdInterface {
    b: string
}

class ThirdClass implements ThirdInterface {
    a: string;
    b: string;

    constructor(a: string, b: string) {
        this.a = a;
        this.b = b;
    }
}
