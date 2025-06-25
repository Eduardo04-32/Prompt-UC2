// importa o prompt-sync 
const prompt = require(`prompt-sync`)();

//pede o nome do usuario
const nome = prompt(`Qual é o seu nome? `)

//pede a idade don usuario
const idade = prompt(`Quantos anos voce tem? `)

//exibe a resposta no terminal
console.log(`Olá, ${nome}! Voce tem ${idade} anos. `)