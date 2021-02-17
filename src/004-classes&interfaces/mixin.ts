type ClassConstructor<T> = new(...args: any[]) => T;
type ClassConstructorWithDetails = ClassConstructor<{ getDetails(): string }>;

function detailLogMixin<C extends ClassConstructorWithDetails>(Class: C) {
    return class extends Class {
        constructor(...args: any[]) {
            super(...args);
        }

        detailLog(): void {
            const name = Class.constructor.name;
            const details = this.getDetails();

            console.log(`Class name - ${name}\n${details}`);
        }
    };
}

class Entity {
    constructor(private id: number, private name: string) {
    }

    getDetails() {
        return JSON.stringify({
            id  : this.id,
            name: this.name,
        });
    }
}

const EntityDebug = detailLogMixin(Entity);

const entityDebug = new EntityDebug(1, 'Entity');

entityDebug.detailLog();
