type Excluded = Exclude<string | number, number>; // string
type Extracted = Extract<string | number, number> // number
type NonNullableType = NonNullable<string | number | null> // string | number

const nonNullableType1: NonNullableType = 'str';
const nonNullableType2: NonNullableType = 2;

type SomeFunctionType = (a: string) => string;
type ReturnedType = ReturnType<SomeFunctionType>
