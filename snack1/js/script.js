// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const array = [
    {
        name: "Wilier 0 SLR",
        weight: 6.5,
    },
    {
        name: "Cannondale SuperSix",
        weight: 8.0,
    },
    {
        name: "Trek Emonda SLR",
        weight: 4.65,
    },
    {
        name: "Trek Emonda",
        weight: 6.81,
    }
];

let resultWeight = null;
let resultName = null;

array.forEach((element, index) => {
    const {name, weight} = element;
    //console.log(name,weight);

    if(index === 0) {
        result = weight;
    } else if (element.weight < result) {
        resultWeight = weight;
        resultName = name;
    }
});

console.log(resultWeight, resultName);

const outputMessage = `La bici con il peso minore è: ${resultName} con un peso di ${resultWeight}kg.`

const body = document.querySelector("body");
body.innerHTML = outputMessage;


