import "dotenv/config"
import { specPactumJs } from "../../utils/spec"
import { defaultHeaders } from "../../utils/headers"
import { IParamsDefault } from "../../interface/IParamsDefault.interface"

/**
 * Lista todos os usuários na Serverest
 * @param params - Configuração padrão de validação
 * @returns Response da requisição
 */
export default async function getUsers(
  params: IParamsDefault
) {
  return await specPactumJs()
    .get(`${process.env.BASE_URL}/usuarios`)
    .withHeaders(defaultHeaders)
    .expectStatus(params.statusCode)
    .retry({
      count: params.retry.count,
      delay: params.retry.delay,
      strategy: ({ res }) => res.statusCode === params.statusCode
    })
}