/*
multiplicador x número = resultado
multiplicador x 0 = resultado
multiplicador x 1 = resultado
multiplicador x 2 = resultado
multiplicador x 3 = resultado
...
multiplicador x 10 = resultado
obs:não podemos criar vários console.log(multiplicador x 3 = resultado)
*/
const multiplicador = 8;
let i=0
// chegará até o valor desejado = 10
// ele add +1 sobre o valor então quando acaba o código ele add +1 =1+1=2
for (let i = 0; i <= 10; i++){
const calc = multiplicador * i;
    console.log(`${multiplicador} x ${i} = ${calc}`);
}
