// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

const array = [
    {
        name: "Bayern Leverkusen",
        points: 0,
        tackle: 0,
    },
    {
        name: "Milan",
        points: 0,
        tackle: 0,
    },
    {
        name: "Roma",
        points: 0,
        tackle: 0,
    },
    {
        name: "Simone Bonvecchio dream team",
        points: 0,
        tackle: 0,
    },
];


array.forEach((element) => {
    
    element.points = getRndInteger(1, 100);
    element.tackle = getRndInteger(1, 100);
});

const result = array.map((element) => {

    const name = element.name;
    const tackle = element.tackle;
    return {name, tackle};
});

console.log(result);


