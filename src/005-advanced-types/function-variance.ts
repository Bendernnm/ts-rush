class Animal {
}

class Bird extends Animal {
    chirp() {
        console.log('chirp');
    }
}

class Crow extends Bird {
    caw() {
        console.log('caw');
    }
}

function chirp(bird: Bird): Bird {
    bird.chirp();
    return bird;
}

// * TS2345: Argument of type 'Animal' is not assignable to parameter of type 'Bird'.
// * Property 'chirp' is missing in type 'Animal' but required in type 'Bird'.
// chirp(new Animal());

chirp(new Bird());
chirp(new Crow());

function clone(f: (bird: Bird) => Bird): void {
    console.log('cloning');
}

function bird2Bird(bird: Bird): Bird {
    return bird;
}

function bird2Crow(bird: Bird): Crow {
    return new Crow();
}

function bird2Animal(bird: Bird): Animal {
    return new Animal();
}

function animal2Bird(animal: Animal): Bird {
    return new Bird();
}

function crow2Bird(crow: Crow): Bird {
    return crow;
}

clone(bird2Bird);
clone(bird2Crow);
// * Argument of type '(bird: Bird) => Animal' is not assignable to parameter of type '(bird: Bird) => Bird'.
// * Property 'chirp' is missing in type 'Animal' but required in type 'Bird'.
// clone(bird2Animal);
clone(animal2Bird);
// * Argument of type '(crow: Crow) => Bird' is not assignable to parameter of type '(bird: Bird) => Bird'.
// * Types of parameters 'crow' and 'bird' are incompatible.
// * Property 'caw' is missing in type 'Bird' but required in type 'Crow'.
// clone(crow2Bird);
