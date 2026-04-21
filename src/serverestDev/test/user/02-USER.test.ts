import "dotenv/config"
import { assertTs, describeName, simpleReport, reportPactumJs, createUserDataBuilder } from "../../../constants"
import postCreateUsers from "../../../service/user/postCreateUsers.service"
import { ct02CreateUserCommonValid } from "../../data/user.data"
import { ICreateUser } from "../../../interface/ICreateUser.interface"

describe(describeName, () => {
  const rep = simpleReport
  let body: ICreateUser

  before('Pré-condições', async () => {
    reportPactumJs.add(rep)

    // ARRANGE → criação da massa com builder
    body = createUserDataBuilder
    .withNome(ct02CreateUserCommonValid.name)
    .withAdministrador(ct02CreateUserCommonValid.administrator)
    .build()
  })

  const testCase02 = it("[02-USER] - Validar a criação de um usuário comum", async () => {

    // ACT
    const response = await postCreateUsers(body, ct02CreateUserCommonValid.paramsDefault)

    // ASSERT
    assertTs.equal(response.statusCode, ct02CreateUserCommonValid.paramsDefault.statusCode, 'Status code diferente do esperado')
    assertTs.isNotNull(response.json._id, 'ID não deve ser nulo')
    assertTs.equal(response.json.message, ct02CreateUserCommonValid.expectedMessage, 'Mensagem incorreta')
  })

  after(async () => {
    await rep.afterTest(testCase02)
    await reportPactumJs.end()
  })
})