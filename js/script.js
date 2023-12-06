// SNACK 1

let bic = [
    {
        name: "Bianchi",
        weight: 6
    },
    {
        name: "Olmo",
        weight: 7
    },
    {
        name: "Bottecchia",
        weight: 10
    },
    {
        name: "Casati",
        weight: 4
    },
    {
        name: "Colnago",
        weight: 11
    },
];

let minweight = bic[0].weight;
let minbic;

for(let i=1; i<bic.length; i++){
    let { weight, name } = bic[i]
    if(weight < minweight){
        minweight = weight
        minbic = name
    }
}
console.log(`La bici con peso minore è: ${minbic} con un peso pari a ${minweight}kg`)

// SNACK 2

let teams = [
    {
        team: "Juventus",
        points: 0,
        fouls: 0
    },
    {
        team: "Napoli",
        points: 0,
        fouls: 0
    },
    {
        team: "Inter",
        points: 0,
        fouls: 0
    },
    {
        team: "Milan",
        points: 0,
        fouls: 0
    },
    {
        team: "Roma",
        points: 0,
        fouls: 0
    },
]

for(let i=0; i<teams.length; i++){
    teams[i].points = Math.floor(Math.random() * 100)
    teams[i].fouls = Math.floor(Math.random() * 100)
    let { team, fouls } = teams[i]
    console.log(`Squadra: ${team} con ${fouls} falli subiti`)
}
console.log(`Forza juve!!`)

// BONUS 1: SNACK 3

let clothings = [
    {
        name: "Poppy",
        type: "tshirt",
        color: "red"
    },
    {
        name: "Jumping",
        type: "occhiali",
        color: "blue"
    },
    {
        name: "CrissCross",
        type: "scarpe",
        color: "black"
    },
    {
        name: "Jenny",
        type: "borsa",
        color: "pink"
    },
]


const newclothings = [...clothings];
for(let i=0; i<clothings.length; i++){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    newclothings[i]["position"] = randomLetter;
}

console.log(newclothings)