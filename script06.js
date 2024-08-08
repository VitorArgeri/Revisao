//Exercício 05

let metaLivros = [10];
let livrosLidos = ['It - A Coisa', 'Harry Potter e a Pedra Filosofal', 'Senhor dos Anéis'];

for (let i = 0; i < livrosLidos.length; i++) {
    console.log(livrosLidos[i]);
}

let quantidade = metaLivros - livrosLidos.length;

if (livrosLidos.length >= metaLivros) {
    console.log("Parabéns! Você atingiu sua meta de leitura!")
} else {
    console.log("Você está progredindo! Faltam " + quantidade + " livros para atingir sua meta.")
}
