
// // let i = 0;
// // let valor = 0;

// // while (i <= 10) {
// //     console.log(valor);
// //     valor += 10;
// //     i ++;
// // }

// // let nomes = ['Felipe', 'Renan', 'Bruno', 'Giselle', 'Camila', 'Murillo'];

// // for (let nome of nomes) {
// //     nome += ' Top';
// //     console.log(nome);
// // }

// let alunos = [
//     {
//         nome: 'Fulano',
//         idade: 18,
//         vivo: true
//     },

//     {
//         nome: 'Ciclano',
//         idade: 16,
//         vivo: true
//     }
// ]

// for (let aluno of alunos) {
//     if (aluno.idade >= 18) {
//         console.log(`${aluno.nome} pode consumir álcool.`);
//     }
// }

// for (let i in alunos) {
//     if (i % 2 == 0) {
//     console.log(`Índice: ${1}`);
//     console.log(`Valor: Objeto de ${alunos[i].nome}`);
//     }
// }

// let joazinho = {
//     nome: 'Joazinho',
//     idade: 13,
//     namorada: undefined,
//     gatos: 2
// }
// // in acessa os indices da lista

// Faça um programa que receba a quantidade de degraus que uma escada tem e desenhe essa escada no
// console.

// #
// ##
// ###

// Bônus:
// Pergunte para o usuário qual o caracter que ele gostaria de usar para fazer a escada (substitui
// o # pela entrada do usuário)

let quantidade = Number(prompt(`Digite a quantidade de degraus da escada:`));
let i = 0;
let caracter = '#';
let escada = '';
caracter = prompt(`Qual o material da sua escada?`);

while (i < quantidade) {
    escada += caracter;
    console.log(escada);
    i++
}