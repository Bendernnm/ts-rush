class FinalClass {
    private constructor(private name: string) {
    }

    static create(name: string) {
        return new FinalClass(name);
    }
}

// class A extends FinalClass {
//     // * TS2675: Cannot extend a class 'FinalClass'. Class constructor is marked as private.
// }
