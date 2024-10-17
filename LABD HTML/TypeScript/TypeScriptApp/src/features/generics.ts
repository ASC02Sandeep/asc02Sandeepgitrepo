function identity<T>(arg: T): T{
    return arg;
}

const num1 = identity<number>(42);
const str1 = identity<string>("Hello");

console.log(num1);
console.log(str1);