# Funções_Javascript
Atividade do Bootcamp Santander  - Javascript - "Funções" 

Atividade 1: Alunos Aprovados

Crie uma função que receba o array alunose um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilizar uma técnica de "desestruturação de objetos" para manipular as propriedades desejadas de cada aluno.

Atividade 2: Esta

Dada a função calculaIdade, utilize os métodos call e aplique para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
