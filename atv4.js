const alunos = [
    { aluno: 'joao', nota: 10 },
    { aluno: 'maria', nota: 6 },
    { aluno: 'mateus', nota: 8 },
    { aluno: 'diego', nota: 7 },
    ]
let soma = 0
alunos.forEach((aluno) => {
    soma = soma + aluno.nota
    console.log(soma)
});