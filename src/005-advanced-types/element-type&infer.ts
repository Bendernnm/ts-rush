type ElementType<T> = T extends unknown[] ? T[number] : T;

type ElementTypeOfArray = ElementType<number[]>; // number
type ElementTypeOfElement = ElementType<number>; // number

const elementType1: ElementTypeOfArray = 2;
const elementType2: ElementTypeOfElement = 2;

type ElementTypeInfer<T> = T extends (infer U)[] ? U : T;

type ElementTypeInferOfArray = ElementTypeInfer<number[]>; // number
type ElementTypeInferOfElement = ElementTypeInfer<number>; // number

const elementType3: ElementTypeInferOfArray = 2;
const elementType4: ElementTypeInferOfElement = 2;
