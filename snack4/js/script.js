// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const people = [
    {
        name: "Walter",
        surname: "Corsini",
        age: 12,
    },
    {
        name: "Simone",
        surname: "Bonvecchio",
        age: 22,
    },
    {
        name: "Franesco",
        surname: "Er Capitano",
        age: 10,
    },
    {
        name: "Bobby",
        surname: "Bob",
        age: 18,
    }
];

let result;

const control = people.forEach((element) => {
    if(element.age >= 18){
        result += ` ${element.name} ${element.surname} è maggiorenne dunque può guidare,`;
    } else {
        result += ` ${element.name} ${element.surname} è minorenne dunque non può guidare,`;
    }
});

console.log(result);