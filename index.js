let alunos = [
  { nome: "João", nota: 8.5 },
  { nome: "Maria", nota: 7.0 },
  { nome: "Pedro", nota: 2.5 },
  { nome: "Ana", nota: 6.5 },
  { nome: "Jouse", nota: 3.0 },
  { nome: "vitoria", nota: 9.0 },
  { nome: "Gabriel", nota: 5.9 }
]

const alunosAprovados = (...alunos)=>{
  let aprovados = []
  alunos.forEach((aluno)=>{
    if(aluno.nota >= 6){
      aprovados.push(aluno)
    }
  })

  return aprovados
}

console.log(alunosAprovados(...alunos))
