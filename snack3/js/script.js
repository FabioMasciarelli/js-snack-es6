// Crea un array composto da 4 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. (modificato) 

const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
];

// prendiamo un'automobile alla volta
//per ogni autombile andiamo a vedere l'alimentazione
// in base al tipo di alimentazione andiamo a mettere l'automobile nel suo array specifico

automobili.forEach((element) => {

});

console.log(automobili);