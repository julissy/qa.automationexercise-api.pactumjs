import "dotenv/config"
import { specPactumJs } from "../../utils/spec"
import { defaultHeaders } from "../../utils/headers"
import { IParamsDefault } from "../../interface/IParamsDefault.interface"

/**
 * Exclui um usuário na Serverest
 * @param userId - ID do usuário a ser excluído
 * @param params - Configuração padrão de validação
 * @returns Response da requisição
 */
export default async function deleteUser(
  userId: string,
  params: IParamsDefault
) {
  return await specPactumJs()
    .delete(`${process.env.BASE_URL}/usuarios/${userId}`)
    .withHeaders(defaultHeaders)
    .expectStatus(params.statusCode)
    .retry({
      count: params.retry.count,
      delay: params.retry.delay,
      strategy: ({ res }) => res.statusCode === params.statusCode
    })
}