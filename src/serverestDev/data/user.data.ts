import { faker } from "@faker-js/faker"
import { UserType } from "../../enum/UserType.enum"

export const ct01CreateUserAdminValid = {
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

export const ct02CreateUserCommonValid = {
  name: `[CT02-CreateUserCommonValid] ${faker.person.firstName()}`,
  administrador: UserType.COMMON,
  paramsDefault: {
    statusCode: 201,
    retry: {
      count: 1,
      delay: 300,
    }
  }
}