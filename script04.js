// Exercício 02

let intensidade = 10;
let aplausos = '';

for (let i = 1; i <= intensidade; i++) {
    aplausos += '👏';
    if (i % 5 == 0) {
        aplausos += '🎉';
    }
}

console.log(aplausos); 