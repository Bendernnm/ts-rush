type IsString<T> = T extends string ? true : false;

type IsString1 = IsString<string>; // true
type IsString2 = IsString<number>; // false

const isStr1: IsString1 = true;
const isStr2: IsString2 = false;

type ToArray<T> = T[];
type ToArray1 = ToArray<number>;
type ToArray2 = ToArray<number | string>;

const arr1: ToArray1 = [1, 2, 3];
const arr2: ToArray2 = [1, 2, '3'];
