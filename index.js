function Pessoa(nome, idade, cpf) {
  let _nome = nome;
  let _idade = idade;
  let _cpf = cpf;

  if (this.constructor === Pessoa) {
    throw new Error(
      'Não é possível instanciar a função construtora abstrata Pessoa diretamente.'
    );
  }

  this.setNome = function (nome) {
    _nome = nome;
  };
  this.setIdade = function (idade) {
    _idade = idade;
  };
  this.setCpf = function (cpf) {
    _cpf = cpf;
  };

  this.getNome = function () {
    return _nome;
  };
  this.getIdade = function () {
    return _idade;
  };
  this.getCpf = function () {
    return _cpf;
  };
}

function Estudante(nome, idade, cpf,matricula, serie) {
  Pessoa.call(this, nome, idade, cpf);

  let _matricula = matricula;
  let _serie = serie;

  this.setMatricula = function (matricula) {
    _matricula = matricula;
  };
  this.setSerie = function (serie) {
    _serie = serie;
  };

  this.getMatricula = function () {
    return _matricula;
  };
  this.getSerie = function () {
    return _serie;
  };
}

function Funcionario(nome, idade, cpf,cargo, salario) {
  Pessoa.call(this, nome, idade, cpf);

  let _cargo = cargo;
  let _salario = salario;

  this.setCargo = function (cargo) {
    _cargo = cargo;
  };
  this.setSalario = function (salario) {
    _salario = salario;
  };

  this.getCargo = function () {
    return _cargo;
  };
  this.getSerie = function () {
    return _salario;
  };
}


estudante = new Estudante("wendel",12, "233232","20002","2B")
estudante2 = new Estudante("Bruno",14, "1234232","20213","4B")
professor = new Funcionario("Jose", 45, "8472920", "Professor", 3000)
