// @ts-check

let compra = 210;
let desconto1 = 20;
let desconto2 = 10;

if (compra >= 200){
    let valorDesconto1 = compra * desconto1 / 100;
    let total1 = compra - valorDesconto1;
    console.log("Você tem: " + desconto1 + "% de desconto. Total ficará: R$" + total1);
} else if (compra >= 100){
    let valorDesconto2 = compra * desconto2 / 100;
    let total2 = compra - valorDesconto2;
    console.log("Você tem: " + desconto2 + "% de desconto. Total ficará: R$" + total2);
} else {
    console.log("Você não terá desconto.");
}