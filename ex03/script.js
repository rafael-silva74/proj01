
let entrada = prompt("Digite um número:");

let numero = parseInt(entrada);


if (!isNaN(numero) && numero % 2 === 0) {
    alert("O número é par.");

} else {
    alert("O número é impar");
}
