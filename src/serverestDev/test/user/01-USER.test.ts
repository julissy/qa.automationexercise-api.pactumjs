import { assertTs, describeName, simpleReport, reportPactumJs, createUserDataBuilder } from "../../../constants"
import postCreateUsers from "../../../service/user/postCreateUsers.service"
import { ct01CreateUserAdminValid } from "../../data/user.data"
import { ICreateUser } from "../../../interface/ICreateUser.interface"

describe(describeName, () => {
  let createUserAdmin: ICreateUser
  const rep = simpleReport
  
  before('Pré-condições', async () => {
    reportPactumJs.add(rep)

    // ARRANGE → criação da massa com builder
    createUserAdmin = createUserDataBuilder
    .withNome(ct01CreateUserAdminValid.name)
    .withAdministrador(ct01CreateUserAdminValid.administrator)
    .build()
  })

  const testCase01 = it("[01-USER] - Validar a criação de um usuário administrador", async () => {

    // ACT
    const response = await postCreateUsers(createUserAdmin, ct01CreateUserAdminValid.paramsDefault)

    // ASSERT
    assertTs.equal(response.statusCode, ct01CreateUserAdminValid.paramsDefault.statusCode, 'Status code diferente do esperado')
    assertTs.isNotNull(response.json._id, 'ID não deve ser nulo')
    assertTs.equal(response.json.message, ct01CreateUserAdminValid.expectedMessage, 'Mensagem incorreta')
  })

  after(async () => {
    await rep.afterTest(testCase01)
    await reportPactumJs.end()
  })
})