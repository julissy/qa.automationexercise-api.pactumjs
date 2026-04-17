import "dotenv/config"
import { assertTs, describeName, simpleReport, reportPactumJs, createUserDataBuilder } from "../../../constants"
import postCreateUsers from "../../../service/user/postCreateUsers.service"
import { ct01CreateUserAdminValid } from "../../data/user.data"
import { ICreateUser } from "../../../interface/ICreateUser.interface"

describe(describeName, () => {
  const rep = simpleReport
  let body: ICreateUser

  before('Pré-condições', async () => {
    reportPactumJs.add(rep)

    // ARRANGE → criação da massa com builder
    body = createUserDataBuilder
    .withNome(ct01CreateUserAdminValid.name)
    .withAdministrador(ct01CreateUserAdminValid.administrador)
    .build()
  })

  const testCase01 = it(ct01CreateUserAdminValid.name, async () => {

    // ACT
    const response = await postCreateUsers(body, ct01CreateUserAdminValid.paramsDefault)

    // ASSERT
    assertTs.equal(response.statusCode, ct01CreateUserAdminValid.paramsDefault.statusCode, 'Status code diferente do esperado')
    assertTs.isNotNull(response.json._id, 'ID não deve ser nulo')
    assertTs.equal(response.json.message, "Cadastro realizado com sucesso", 'Mensagem incorreta')
  })

  after(async () => {
    await rep.afterTest(testCase01)
    await reportPactumJs.end()
  })
})