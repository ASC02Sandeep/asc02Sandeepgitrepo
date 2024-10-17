class Animals {
    constructor(public name: string) { }
    makeSound(): void {
        console.log(`${this.name} makes a sound`);
    }
}
class Dog1 extends Animals {
    makeSound(): void {
        console.log(`${this.name} barks.`);
        // `${this.name} makes a sound.` This is an example of string interpolation in TypeScript.

    }
}

const animals = new Animals("Cat");
animals.makeSound();

const dog1 = new Dog1("Buddy");
dog1.makeSound();