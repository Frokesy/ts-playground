function add (a: number, b:number) {
    return a + b;
}

let result: number;
result = add(20, 35);
console.log(result);

//enums
enum familyPosition { oldest = 1, semiOldest, middle, semiYoungest, youngest };

//tuples
let person: { 
    name: string, 
    age: number, 
    hobbies: string[], 
    position: [number, string] 
};

person = {
    name: 'Ayanfeoluwa',
    age: 22,
    hobbies: ['sports', 'coding', 'sleeping'],
    position: [familyPosition.youngest, 'last born']
}

console.log(person)

//function types
function strValues (a: string, b: string) {
    return (a + b);
}

let concatString: (firstname: string, othernames: string) => string;

concatString = strValues

console.log(concatString('Ayanfeoluwa', 'Noah'))

//function types with callbacks
function addAndHandle (a: number, b: number, cb: (n: number) => void) {
    const result = a + b;
    cb(result)
}

addAndHandle(5, 24, (res) => {
    console.log(res)
})
