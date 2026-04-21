import { faker } from "@faker-js/faker"
import { UserType } from "../../enum/UserType.enum"

export const ct01CreateUserAdminValid = {
  name: `[CT01-CreateUserAdminValid] ${faker.person.firstName()}`,
  administrator: UserType.ADMIN,
  paramsDefault: {
    statusCode: 201,
    retry: {
      count: 3,
      delay: 500,
    }
  },
  expectedMessage:"Cadastro realizado com sucesso"
}

export const ct02CreateUserCommonValid = {
  name: `[CT02-CreateUserCommonValid] ${faker.person.firstName()}`,
  administrator: UserType.COMMON,
  paramsDefault: {
    statusCode: 201,
    retry: {
      count: 1,
      delay: 300,
    }
  },
  expectedMessage:"Cadastro realizado com sucesso"
}

export const ct03GetUser = {
  paramsDefault: {
    statusCode: 201,
    retry: {
      count: 3,
      delay: 300,
    },
  },
  getUserParamsDefault: {
    statusCode: 200,
    retry: {
      count: 3,
      delay: 500,
    },
  },
}

export const ct04GetUsers = {
  paramsDefault: {
    statusCode: 200,
    retry: {
      count: 3,
      delay: 500,
    },
  },
}

export const ct05DeleteUser = {
  paramsDefault: {
    statusCode: 201,
    retry: {
      count: 1,
      delay: 100,
    },
  },
  deleteParams: {
    statusCode: 200,
    retry: {
      count: 3,
      delay:500
    }
  },
  expectedMessage: "Registro excluído com sucesso",
}