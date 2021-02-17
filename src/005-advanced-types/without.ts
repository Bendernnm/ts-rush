type Without<T, U> = T extends U ? never : T;

type Without1 = Without<number | string | boolean, boolean>;

const val1: Without1 = 1;
const val2: Without1 = 'str';
// * TS2322: Type 'boolean' is not assignable to type 'string | number'.
// const val3: Without1 = true;
