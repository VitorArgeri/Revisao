//Exercicio 04

let armas = ['Laser', 'Missil', 'Arma de Plasma', 'Sabre de Luz', 'Bomba de Antimateria'];
let ataques = [];

ataques.push('Optimus Prime');
ataques.push(armas[0]);
ataques.push(armas[1]);
ataques.push(armas[2]);
ataques.push(armas[3]);
ataques.push(armas[4]);

for (let i = 0; i < ataques.length; i++) {
    if (i == 0) {
        console.log('Nome do Robô: ' + ataques[i]);
    } else {
        console.log('Ataque ' + [i] + ': ' + ataques[i])
    }
}