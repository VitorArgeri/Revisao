// Exercício 01

let idadealunoA = 7;

if (idadealunoA > 7 && idadealunoA < 13) {
  console.log("O aluno está na categoria INFANTIL");
} else if (idadealunoA > 12 && idadealunoA < 18) {
  console.log("O aluno está na categoria ADOLESCENTE");
} else if (idadealunoA > 17) {
  console.log("O aluno está na categoria ADULTO");
} else {
  console.log("Aluno não pode se matricular");
}