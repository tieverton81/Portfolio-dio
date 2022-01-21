//array tipos de lista ou matriz de variaveis
var array = ['everton', 2, true];
console.log(array);

let array1 = ['everton', 5, false, ['array']];
console.log(array1[2]);

array.forEach(function(item, index) {console.log(item, index)}); // intera um array;

array.push('novo'); // add item final array;
console.log(array);

array.pop() // remove item final array;
console.log(array);

array.shift() // remove item inicio array;
console.log(array);

array.unshift('novo inicio') // add item inicio array;
console.log(array);

console.log(array.indexOf(true)); // retorna indice;

array.splice(0, 1); // remove substitui indice
console.log(array);

// retorna uma parte array existente
let novoArray = array.slice(0, 2);
console.log(novoArray);

// objetos - dados que possuem propriedades e valores deve ser declarado entre chaves

let object = { string: 'string', number: 1, boolean: true, array: ['array3'], objectInterno: {
    objetoInterno: 'objeto interno'}};
console.log(object.number);

var name = object.string;
console.log(name);

var {boolean, number} = object;
console.log(boolean, number);