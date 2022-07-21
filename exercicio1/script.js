// # Exercício 1

// Construa um programa que:

// a) Peça ao usuário que insira um número **par**
const par = Number(prompt("insira um número par:"))

// b) Imprima no console **o resto da divisão** desse número por 2.
const resto = par % 2
console.log(resto)

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

// O resto da divisão será sempre 0, pois o número par que for par dividido por 2 não restará nada.

// d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código

// O resto da divisão será sempre 1, pois o número impar que for par dividido por 2 sempre sobrará 1.

// >💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número