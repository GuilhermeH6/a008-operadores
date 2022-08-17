
// # Exercício 2

// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

let numero1 = Number(prompt("Insira o primeiro número"));
let numero2 = Number(prompt("Insira o seugndo número"));

// ```
// O primeiro numero é maior que segundo? true
const maior = numero1 > numero2;
console.log("O primeiro número é maior que o segundo?", maior)

// O primeiro numero é igual ao segundo? false
const igual = numero1 == numero2
console.log("O primeiro número é igual ao segundo?", igual)

// O primeiro numero é divisível pelo segundo? true
const primeiroDivisivel = numero1 % numero2 == 0
console.log("O primeiro número é divisível pelo segundo?", primeiroDivisivel)

// O segundo numero é divisível pelo primeiro? true
const segundoDivisivel = numero2 % numero1 == 0
console.log("O segundo número é divisível pelo primeiro?", segundoDivisivel)

// divisível = com resto zero

// Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
// ```


