// Exercício 1. Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.
let precoMercadoria = 100;
let percentualDesconto = 0.2;
let valorDesconto = precoMercadoria * percentualDesconto;

console.log(`O valor do desconto é: R$ ${valorDesconto}\nO preço a pagar é: R$ ${precoMercadoria-valorDesconto}`);