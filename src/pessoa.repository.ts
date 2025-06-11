

interface PessoaRepositoryI {
  save(pessoa: Pessoa): void
  // listById(nome: string): Pessoa[]
  deleteById(nome: string): void
  listAll(): void
  updateById(nome: string, sobrenome: string): void
}

export class Pessoa {
  id: number | undefined
  nome: string | undefined
  sobrenome: string | undefined


  constructor(id: number, nome: string, sobrenome: string) {
    this.id = id;
    this.nome = nome;
    this.sobrenome = sobrenome
  }
}

export class PessoaRepository implements PessoaRepositoryI {
  pessoas: Pessoa[]

  constructor() {
    this.pessoas = []
  }

  save(pessoa: Pessoa): void {
    this.pessoas.push(pessoa)
  }
  // listById(id: string): Pessoa {

  // }
  deleteById(nome: string): void {

  }
  listAll(): Pessoa[] {
    return this.pessoas
  }
  updateById(nome: string, sobrenome: string): void {

  }
}