import {
  assertTs,
  describeName,
  simpleReport,
  reportPactumJs,
  createUserDataBuilder,
} from "../../../constants"
import postCreateUsers from "../../../service/user/postCreateUsers.service"
import getUser from "../../../service/user/getUser.service"
import { ct03GetUser } from "../../data/user.data"
import { ICreateUser } from "../../../interface/ICreateUser.interface"
import { IGetUserResponse, ICreateUserResponse } from "../../../interface/IGetUsersResponse.interface"

describe(describeName, () => {
  let createUser: ICreateUser
  let createUserResponse: ICreateUserResponse
  let body: IGetUserResponse
  const rep = simpleReport

  before('Pré-condições', async () => {
    reportPactumJs.add(rep)

    createUser = createUserDataBuilder
      .build()

    const userCreate = await postCreateUsers(
      createUser,
      ct03GetUser.paramsDefault,
    )

    createUserResponse = userCreate.json
  })

  const testCase03 = it(
    "[03-USER] - Validar busca de usuário",
    async () => {
      const response = await getUser(
        createUserResponse._id,
        ct03GetUser.getUserParamsDefault,
      )

      body = response.json

      assertTs.equal(response.statusCode, ct03GetUser.getUserParamsDefault.statusCode, 'Status code diferente do esperado',)
      assertTs.equal(body.nome, createUser.nome, "Nome diverge do usuário criado")
      assertTs.equal(body.email, createUser.email, "Email diverge do usuário criado")
      assertTs.equal(body.password, createUser.password, "Password diverge do usuário criado")
      assertTs.equal(body.administrador, createUser.administrador, "Administrador diverge do usuário criado")
      assertTs.equal(body._id, createUserResponse._id, "_id diverge do retorno da criação")
    },
  )

  after(async () => {
    await rep.afterTest(testCase03)
    await reportPactumJs.end()
  })
})
