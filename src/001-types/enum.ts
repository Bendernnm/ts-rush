enum LanguageNumber {
    English,
    Spanish
}

enum LanguageNumber {
    Ukrainian = 2
}

enum LanguageString {
    English = 'English',
    Spanish = 'Spanish',
    Ukrainian = 'Ukrainian'
}

const languages: [LanguageNumber, LanguageString] = [LanguageNumber.Ukrainian, LanguageString.Spanish];

console.log(languages); // [ 2, 'Spanish' ]

// const notExistedNumber = LanguageNumber.French; // TS2339: Property 'French' does not exist on type 'typeof LanguageNumber'.
// const notExistedString = LanguageString.French; // TS2339: Property 'French' does not exist on type 'typeof LanguageString'.

const englishLanguageNumber: string = LanguageNumber[0];
const wrongLanguageNumber: string = LanguageNumber[6]; // !!!string

console.log(englishLanguageNumber, wrongLanguageNumber);

const enum  LanguageNumberConst {
    English,
    Spanish
}

const enum LanguageNumberConst {
    Ukrainian = 2
}

// const ukrainianLanguageNumberConst: string = LanguageNumberConst[2]; // TS2476: A const enum member can only be accessed using a string literal.

console.log(LanguageNumberConst.Ukrainian);

