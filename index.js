// 1) ARMAZENANDO PROPRIEDADES DO OBJETO EM VARIÁVEIS SEM USAR DESESTRUTURAÇÃO

let pessoa = { nome: "Roberto", sobrenome: "Dias", idade: 33};

/*

let nome = pessoa.nome;
let idade = pessoa.idade;

console.log(nome);
console.log(idade);

*/

// 2) MAPEANDO AS PROPRIEDADES NA DECLARAÇÃO DAS VARIÁVEIS - DESESTRUTURANDO 

let {nome, idade, sobrenome: sobrenomePessoa} = pessoa;

console.log(nome);
console.log(idade);
console.log(sobrenomePessoa);

// 3) DESESTRUTURANDO ARRAYS

const numeros = [1, 2, 3];

const [ um, dois, tres, variavelUndefined] = numeros;

console.log(um);
console.log(dois);
console.log(tres);

console.log(variavelUndefined); // Undefined


