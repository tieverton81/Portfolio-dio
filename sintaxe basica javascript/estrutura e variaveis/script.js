alert("boas praticas");

// tipos primitivos

//bolean
var vOuF = false;
console.log(typeof(vOuF));

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = "everton";
console.log(typeof(nome));

// como declarar
// var escopo global e local
var variavel;
console.log(variavel);

//let escopo local de bloco
let variavel2 = "everton";
console.log(variavel2);

//const escopo global de bloco, nao pode alterar
const constante = "nao altera";
console.log(constante);

//escopo global visibilidade disponivel em todo o codigo
var escopoGlobal = "global";
console.log(escopoGlobal);

//escopo local visivel dentro de um bloco ou nao
function escopolocal() {
    let escopolocalinterno = "local";
    console.log(escopolocalinterno);
}
escopolocal();

// comparacao
var numero = '0' == 0;
console.log(numero);

// comparacao identica
var identica = '0' === 0;
console.log(identica);

// operadores aritmeticos
var adicao = 1 + 1;
console.log(adicao);

var subtracao = 3 - 2;
console.log(subtracao);

var multiplicacao = 5 * 5;
console.log(multiplicacao);

var divisaoreal = 7 / 2;
console.log(divisaoreal);

var divisaointeira = 5 % 2;
console.log(divisaointeira);

var potencia = 2 ** 10;
console.log(potencia);

// operadores relacionais
var maiorQue = 5 > 2;
console.log(maiorQue);

var menor = 5 < 2;
console.log(menor);

var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

// operadores logicos
// && e considera todos valores true
// || ou considera qualquer valor true
// ! nao inverte o valor 
var e = true && false;
var ou = true || false;
var nao = !false;
console.log(e,ou,nao);












