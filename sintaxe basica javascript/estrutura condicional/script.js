// estrutura de decisao if
var jogador1 = 0;
var jogador2 = 0;
var placar;



// if ternario

jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são validos'): console.log('os jogadores são invalidos'); 

if (jogador1 >0 && jogador2 == 0) {
    console.log('jogador1 marcou gol');
    placar = jogador1 > jogador2;
} 
// senao - else
else if (jogador2 >0 && jogador1 == 0) {
    console.log('jogador2 marcou gol');
    placar = jogador2 > jogador1;
} 

else {
    console.log('ninguem marcou gol');

};       

//case

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador2 ganhou');
        break;
    default:
        console.log('ninguem ganhou');
}

//for executa uma instrucao ate seja falsa
let array = ['v1', 'v2', 'v3', 'v4', 'v5',];

let object = {p1:'v1', p2:'v2', p3:'v3',};

for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

//for in repeticao a partir de uma propriedade

for (let i in array) {
    console.log(i);
}

for (i in object) {
    console.log(i);
}

// for of repeticao a partir valor

for (i of array) {
    console.log(i);
}

// com object

for (i of object.p1) {
    console.log(i);
}

// while enquanto verificacao e feita antes da execucao

var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}
// do while ate q det condicao seja falsa
do {
    a++;
    console.log(a);
} while (a < 10)
