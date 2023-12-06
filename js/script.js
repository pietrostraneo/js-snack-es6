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
        weight: 9
    },
    {
        name: "Colnago",
        weight: 11
    },
];


for(let i=0; i<bic.length; i++){
    let { weight } = bic[i]
    let minweight = Math.min(weight)
    console.log(minweight)
}