import { faker } from "@faker-js/faker"
import { ICreateUser } from "../interface/ICreateUser.interface"

export default class CreateUserDataBuilder {
  private user: ICreateUser

  constructor() {
    this.user = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: "teste",
      administrador: "true"
    }
  }

  /**
   * Define o nome do usuário
   */
  withNome(nome: string): CreateUserDataBuilder {
    this.user.nome = nome
    return this
  }

  /**
   * Define o email
   */
  withEmail(email: string): CreateUserDataBuilder {
    this.user.email = email
    return this
  }

  /**
   * Define a senha
   */
  withPassword(password: string): CreateUserDataBuilder {
    this.user.password = password
    return this
  }

  /**
   * Define se é admin
   */
  withAdministrador(admin: string): CreateUserDataBuilder {
    this.user.administrador = admin
    return this
  }

  /**
   * Retorna o objeto final
   */
  build(): ICreateUser {
    return this.user
  }
}