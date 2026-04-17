import "dotenv/config"
import { specPactumJs } from "../../utils/spec"
import { defaultHeaders } from "../../utils/headers"
import { IParamsDefault } from "../../interface/IParamsDefault.interface"
import { ICreateUser } from "../../interface/ICreateUser.interface"

/**
 * Atualiza um usuário na Serverest
 * @param body - Dados do usuário
 * @param params - Configuração padrão de validação
 * @returns Response da requisição
 */
export default async function putUser(
  body: ICreateUser,
  params: IParamsDefault
) {
  return await specPactumJs()
    .put(`${process.env.BASE_URL}/usuarios/{body._id}`)
    .withHeaders(defaultHeaders)
    .withBody(body)
    .expectStatus(params.statusCode)
    .retry({
      count: params.retry.count,
      delay: params.retry.delay,
      strategy: ({ res }) => res.statusCode === params.statusCode
    })
}