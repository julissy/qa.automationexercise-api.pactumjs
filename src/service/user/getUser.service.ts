import "dotenv/config"
import { specPactumJs } from "../../utils/spec"
import { defaultHeaders } from "../../utils/headers"
import { IParamsDefault } from "../../interface/IParamsDefault.interface"

/**
 * Lista um usuário na Serverest
 * @param userId - Identificador _id do usuário
 * @param params - Configuração padrão de validação
 * @returns Response da requisição
 */
export default async function getUser(
  userId: string,
  params: IParamsDefault,
) {
  return await specPactumJs()
    .get(`${process.env.BASE_URL}/usuarios/${userId}`)
    .withHeaders(defaultHeaders)
    .expectStatus(params.statusCode)
    .retry({
      count: params.retry.count,
      delay: params.retry.delay,
      strategy: ({ res }) => res.statusCode === params.statusCode,
    })
}