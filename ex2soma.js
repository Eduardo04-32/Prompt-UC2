const prompt = require(`prompt-sync`)();

const senha = Number(prompt(`Digite sua senha, senhor jovem `))
const idade = Number(prompt(`Digite sua idade, senhor jovem `))

const assesoLIverado = (idade>= 18) && (senha === 1234)

console.log(`seu asseso é: ${assesoLIverado}`)

