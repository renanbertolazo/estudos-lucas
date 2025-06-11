// simula um crud

import { PessoaRepository } from "./pessoa.repository"
import { Pessoa } from "./pessoa.repository";

const pessoa1 = new Pessoa(1, 'Lucas', 'Azevedo')
const pessoa2 = new Pessoa(2, 'Renan', 'Chorao de Quadrinhos')
const pessoa3 = new Pessoa(3, 'Paulinho', 'Manja Nada')



const savingProcess = new PessoaRepository

savingProcess.save(pessoa1)

