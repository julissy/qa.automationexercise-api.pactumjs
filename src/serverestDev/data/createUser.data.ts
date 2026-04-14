import { faker } from "@faker-js/faker"

export const ct01CreateUser = {
  name: `[CT01-CriarUsuario] ${faker.person.firstName()}`,

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