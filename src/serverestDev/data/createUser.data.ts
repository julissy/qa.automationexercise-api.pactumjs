import { faker } from "@faker-js/faker"
import { UserType } from "../../enum/UserType.enum"

export const ct01CreateUser = {
  name: `[CT01-CreateUserAdminValid] ${faker.person.firstName()}`,

  administrador: UserType.ADMIN,
  paramsDefault: {
    statusCode: 201,
    retry: {
      count: 3,
      delay: 500,
    }
  }
}

export const ct02CreateUserEmailDuplicado = {
  name: `[CT02-CriarUsuarioEmailDuplicado] ${faker.person.firstName()}`,

  emailDuplicado: "usuario_duplicado@qa.com",

  paramsDefault: {
    statusCode: 400,
    retry: {
      count: 1,
      delay: 300,
    }
  }
}