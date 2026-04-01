let numero = Number(prompt("Digite um valor"));
if(numero >=100) {
    let desconto = numero * 0.10;
    let dinheiro = numero - desconto;
    alert("Parabéns! Você ganhou um desconto de 10%.");
    alert("Valor do desconto: R$ " + desconto.toFixed(2));
    alert("Valor total a pagar: R$ " + dinheiro.toFixed(2));
} else {
    alert("Valor total a pagar: R$ " + numero.toFixed(2));
}
