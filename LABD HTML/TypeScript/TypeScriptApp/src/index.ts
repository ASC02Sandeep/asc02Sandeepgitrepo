console.log("Hello World");
var message = "Happy learning";
console.log(message);


//static typing
let lunch: string = "chapathi";
lunch = "pulav";
console.log(lunch);

function add(a: number, b: number): number {
    return a + b;
}

const result = add(5, 10);
console.log(result);

//interfaces
interface User {
    name: string;
    age: number;
    email: string;
}

const user: User = {
    name: "John",
    age: 30,
    email: "john.doe@email.com"
};

console.log(user);

//classes and inheritance
class Animal {
    constructor(public name: string) { }
    makeSound(): void {
        console.log(`${this.name} makes a sound`);
    }
}
class Dog extends Animal {
    makeSound(): void {
        console.log(`${this.name} barks.`);
        // `${this.name} makes a sound.` This is an example of string interpolation in TypeScript.

    }
}

const animal = new Animal("Cat");
animal.makeSound();

const dog = new Dog("Buddy");
dog.makeSound();

// Generics
// Generics allow you to create reusable components that work with any data type.
function identity1<T>(arg: T): T{
    return arg;
}

const num = identity1<number>(42);
const str = identity1<string>("Hello");

console.log(num);
console.log(str);

//Enums
//Enums allow you to define a set of named constants
enum Direction{
    Up,
    Down,
    Left,
    Right
}

const move = Direction.Up;
console.log(move);
//print the values of the enum
console.log(Direction[move]);
console.log(Direction[1]);

enum Direction1{
    Up=1,
    Down,
    Left=50,
    Right
}
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);

//Modules
