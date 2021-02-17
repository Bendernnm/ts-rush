type Filter1 = <T>(array: T[], f: (item: T) => boolean) => T[];

const simpleFilter: Filter1 = <T>(array: T[], callback: (item: T) => boolean) => {
    const result: T[] = [];

    array.forEach(item => callback(item) && result.push(item));

    return result;
};
const callbackGreaterThen10 = (item: number) => item > 10;

const array: number[] = [1, 2, 12, 5, 88, 10];
const arrayGreaterThen10: number[] = simpleFilter<number>(array, callbackGreaterThen10);

type Filter2<T> = (array: T[], f: (item: T) => boolean) => T[];


const callbackLessThen10 = (item: number) => item < 10;
const filterNumbers: Filter2<number> = (array, callback): number[] => {
    const result: number[] = [];

    array.forEach(item => callback(item) && result.push(item));

    return result;
};

const arrayLessThen10: number[] = filterNumbers(array, callbackLessThen10);

console.log(array);
console.log(arrayGreaterThen10);
console.log(arrayLessThen10);

