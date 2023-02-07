// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

// Prática Guiada I
// Declaração de função tradicional
function imprimirNome (nome){
    console.log(`Olá, ${nome}!`)
}
imprimirNome('Eric')
imprimirNome('Joao')
imprimirNome('Pedro')

console.log('---------------------------------------------')

// Declaração de função não nomeada
const imprimirNome2 = function (nome){
    console.log(`Olá, ${nome}!`)
}
imprimirNome2('Eric')
imprimirNome2('Joao')
imprimirNome2('Pedro') 

console.log('---------------------------------------------')

// Prática Guiada II
function veriNum (num1){
    const par = num1 % 2 === 0
    console.log(`O número ${num1} é par? ${par} `)

    const somaNum = num1 + 10
    console.log(`A soma de ${num1} + 10 é ${somaNum}`)

    const multNum = num1 * num1
    console.log(`A multiplicação de ${num1} é ${multNum}`)

    console.log('---------------------------------------------')
} 
veriNum(4)
veriNum(5)
veriNum(6)

// Prática Guiada III
function verifLoginSenha (usuario, senha){
    const armUsuario = 'eric'
    const armSenha = '123'

    // Verifica se usuarios são iguais. Se forem iguais, resultado será True
    const compaUsuario = usuario === armUsuario

    // Verifica se as senhas são iguais. Se forem iguais, resultado será True
    const compaSenha = senha === armSenha

    // Verifica se usuario e senha são iguais. Se forem iguais, resultado será True
    const compaUsuarioSenha = compaUsuario && compaSenha

    console.log(`As informações de login estão corretas? ${compaUsuarioSenha}`)
}
verifLoginSenha('eric', '123')
verifLoginSenha('123', 'eric')
verifLoginSenha('senha', '123')

console.log('---------------------------------------------')

// Prática Guiada IV
function verifMaiorIdade (nome, anoNasc, anoAtual){
    const maiorIdade = anoAtual - anoNasc
    const compIdade = maiorIdade >= 18
    console.log(`${nome} é maior de idade? ${compIdade}`)
}
verifMaiorIdade('Eric', 1985, 2023)
verifMaiorIdade('Murillo', 2010, 2023)
verifMaiorIdade('Maria Angelica', 1995, 2023)
verifMaiorIdade('Maria Lucilia', 2022, 2023)
