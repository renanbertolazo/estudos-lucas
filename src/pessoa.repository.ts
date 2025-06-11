import { Pessoa } from ".";

interface PessoaRepositoryI {
  save(pessoa: Pessoa): void
  listById(nome: string): Pessoa[]
  deleteById(nome: string): void
  listAll(): void
  updateById(nome: string, sobrenome: string): void
}


export class PessoaRepository implements PessoaRepositoryI {
  pessoas: Pessoa[]

  constructor() {
    this.pessoas = []
  }

  save(pessoa: Pessoa): void {

  }
  listById(nome: string): Pessoa[] {

  }
  deleteById(nome: string): void {

  }
  listAll(): void {

  }
  updateById(nome: string, sobrenome: string): void {

  }
}