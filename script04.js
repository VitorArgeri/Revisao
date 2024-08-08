//Exercício 03

let massas = ["Tradicional", "Integral", "Pan"];
let molhos = ["Molho de Tomate", "Molho Branco", "Molho Pesto"];
let queijos = ["Mussarela", "Queijo Prato", "Provolone", "Gorgonzola"];
let carnes = ["Calabresa", "Pepperoni", "Frango", "Bacon"];
let vegetais = ["Tomate", "Cebola", "Pimentão", "Azeitona", "Manjericão"];


let pizza = [massas[1], molhos[0], queijos[2], carnes[3], vegetais[4]];

console.log('Pizza Montada:');

for(let i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}