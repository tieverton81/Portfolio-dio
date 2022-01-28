//declarativa
function funcao() {
    console.log('tudo certo')
}

funcao ();

function mensagem(primeiro, segundo) {
    console.log(primeiro, segundo)
}

mensagem('tudo certo', 'jovem');

//expressao de funcao
//com nomeacao

var f1 = function f1() {
    console.log("sou uma mensagem de função de expressão")
}

f1();

//arrow function

var f2 = () => {
    console.log("sou uma arrow function")
}

f2();