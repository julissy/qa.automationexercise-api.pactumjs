import "dotenv/config"
import {
  assertTs,
  describeName,
  simpleReport,
  reportPactumJs,
} from "../../../constants"
import getUsers from "../../../service/user/getUsers.service"
import { ct04GetUsers } from "../../data/user.data"
import { IGetUsersResponse } from "../../../interface/IGetUsersResponse.interface"

describe(describeName, () => {
  let body: IGetUsersResponse
  const rep = simpleReport

  before('Pré-condições', async () => {
    reportPactumJs.add(rep)
  })

  const testCase04 = it("[04-USER] - Validar listagem de usuários", async () => {

    const response = await getUsers(
      ct04GetUsers.paramsDefault,
    )

    body = response.json

    assertTs.equal(
      response.statusCode,
      ct04GetUsers.paramsDefault.statusCode,
      'Status code diferente do esperado',
    )
    assertTs.isTrue(Array.isArray(body.usuarios), 'Campo usuarios deve ser um array')
    assertTs.equal(
      body.quantidade,
      body.usuarios.length,
      'Quantidade deve corresponder ao número de registros em usuarios',
    )
    
  })

  after(async () => {
    await rep.afterTest(testCase04)
    await reportPactumJs.end()
  })
})
