import "dotenv/config"
import {
  assertTs,
  describeName,
  simpleReport,
  reportPactumJs,
  createUserDataBuilder,
} from "../../../constants"
import postCreateUsers from "../../../service/user/postCreateUsers.service"
import deleteUser from "../../../service/user/deleteUser.service"
import { ct05DeleteUser } from "../../data/user.data"
import { ICreateUser } from "../../../interface/ICreateUser.interface"
import { ICreateUserResponse, IDeleteUserResponse } from "../../../interface/IGetUsersResponse.interface"

describe(describeName, () => {
  let createUser: ICreateUser
  let createUserResponse: ICreateUserResponse
  let body: IDeleteUserResponse
  const rep = simpleReport

  before("Pré-condições", async () => {
    reportPactumJs.add(rep)

    // ARRANGE
    createUser = createUserDataBuilder.build()
    const responseCreateUser = await postCreateUsers(
      createUser,
      ct05DeleteUser.paramsDefault,
    )
    createUserResponse = responseCreateUser.json
  })

  const testCase05 = it(
    "[05-USER] - Validar exclusão de usuário",
    async () => {
      // ACT
      const response = await deleteUser(
        createUserResponse._id,
        ct05DeleteUser.deleteParams,
      )

      // ASSERT
      body = response.json
      assertTs.equal(
        response.statusCode,
        ct05DeleteUser.deleteParams.statusCode,
        "Status code diferente do esperado",
      )
      assertTs.equal(body.message,ct05DeleteUser.expectedMessage,"Mensagem incorreta")
    },
  )

  after(async () => {
    await rep.afterTest(testCase05)
    await reportPactumJs.end()
  })
})
